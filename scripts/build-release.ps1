param(
  [Parameter(Mandatory = $true)]
  [string]$BaseUrl,
  [string]$Channel = 'stable',
  [string]$Notes = '',
  [string]$MinDsh = ''
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$release = Join-Path $root 'release'
$packagePath = Join-Path $root 'package.json'

if (-not (Test-Path $packagePath)) { throw "package.json not found: $packagePath" }
if (-not (Test-Path $release)) { New-Item -ItemType Directory -Path $release | Out-Null }

Push-Location $root
try {
  node --check client.js
  if ($LASTEXITCODE -ne 0) { throw 'client.js syntax check failed' }
  node --check index.js
  if ($LASTEXITCODE -ne 0) { throw 'index.js syntax check failed' }

  $pkg = Get-Content $packagePath -Raw -Encoding utf8 | ConvertFrom-Json
  $version = [string]$pkg.version
  $name = [string]$pkg.name
  $tgzName = "$name-$version.tgz"
  $zipName = "小肥鱼学习平台-v$version-安装包.zip"
  $tgz = Join-Path $release $tgzName
  $zip = Join-Path $release $zipName
  $asciiZip = Join-Path $release "xiaofeiyu-academy-v$version-installer.zip"
  if (Test-Path $tgz) { Remove-Item $tgz -Force }
  if (Test-Path $zip) { Remove-Item $zip -Force }
  if (Test-Path $asciiZip) { Remove-Item $asciiZip -Force }

  npm pack --pack-destination $release
  if ($LASTEXITCODE -ne 0) { throw 'npm pack failed' }
  if (-not (Test-Path $tgz)) { throw "npm pack did not create $tgzName" }

  $hash = (Get-FileHash $tgz -Algorithm SHA256).Hash.ToLowerInvariant()
  $size = (Get-Item $tgz).Length
  $download = "$($BaseUrl.TrimEnd('/'))/$tgzName"
  $noteList = @()
  if ($Notes.Trim()) {
    $noteList = @($Notes -split "`r?`n" | Where-Object { $_.Trim() } | ForEach-Object { $_.Trim() })
  }
  $manifest = [ordered]@{
    schema      = 1
    package     = $name
    version     = $version
    channel     = $Channel
    publishedAt = (Get-Date).ToUniversalTime().ToString('yyyy-MM-ddTHH:mm:ssZ')
    download    = $download
    sha256      = $hash
    size        = $size
    notes       = $noteList
  }
  if ($MinDsh.Trim()) { $manifest.minDsh = $MinDsh.Trim() }
  $manifest | ConvertTo-Json -Depth 5 | Set-Content (Join-Path $release 'update.json') -Encoding utf8

  Copy-Item (Join-Path $root 'README.md') (Join-Path $release 'README.md') -Force
  Copy-Item (Join-Path $root '安装说明.md') (Join-Path $release '安装说明.md') -Force
  Copy-Item (Join-Path $root 'CHANGELOG.md') (Join-Path $release 'CHANGELOG.md') -Force
  $sums = @(
    "$hash  $tgzName",
    "$( (Get-FileHash (Join-Path $release 'update.json') -Algorithm SHA256).Hash.ToLowerInvariant() )  update.json"
  )
  Set-Content (Join-Path $release 'SHA256SUMS.txt') ($sums -join "`n") -Encoding ascii

  Compress-Archive -Path @(
    $tgz,
    (Join-Path $release '安装说明.md'),
    (Join-Path $release 'README.md'),
    (Join-Path $release 'CHANGELOG.md'),
    (Join-Path $release 'update.json'),
    (Join-Path $release 'SHA256SUMS.txt')
  ) -DestinationPath $zip -CompressionLevel Optimal
  Copy-Item $zip $asciiZip -Force

  Write-Host ""
  Write-Host "Release built:"
  Write-Host "  version : $version"
  Write-Host "  channel : $Channel"
  Write-Host "  tgz     : $tgz"
  Write-Host "  zip     : $zip"
  Write-Host "  zip(ASCII): $asciiZip"
  Write-Host "  manifest: $(Join-Path $release 'update.json')"
  Write-Host "  sha256  : $hash"
  Write-Host ""
  Write-Host "Next: upload the tgz, zip and update.json to the same release URL used in -BaseUrl."
} finally {
  Pop-Location
}
