# Artwork provenance

The blue whale-girl artwork in this folder comes from the locally installed
`dsh-pet` package (version 0.3.8), at the user's explicit request to reuse the
Xiaofeiyu IP. The dsh-pet license allows open-source use and forbids commercial
use. Keep that restriction if this bundle is shared.

Files:

- `logo.png`, `icon.png` — `dsh-pet/assets/logo.png`
- `cute.png` — `dsh-pet/assets/memes/可爱.png`
- `happy.png` — `dsh-pet/assets/memes/吃饱饱摸肚子.png`
- `panic.png` — `dsh-pet/assets/memes/压力一只大肥鱼.png`
- `*-t.png` — the same artwork with the white background flood-filled to
  transparency for clean placement on colored cards. Internal white areas
  (apron, eyes) are preserved.
- `icon.png` is generated from `cute-t.png` (the clean full-body mascot without
  the sticker lettering).

The fish-shaped fallback mascot drawn in `client.js` is original SVG code for
this bundle.

## Textbook outline

`pep-curriculum.json` is a curated sample sheet for grades 1–6 (both volumes).
It is a **reference sample**, not a scan of any specific printed textbook and not
the only supported edition. Editions and regional printings can differ; the
textbook library lets parents upload a PDF or paste a corrected outline for
**any edition** (PEP, Sujiao, Beijing Normal, etc.). English grades 1–2 are
marked as a school-based prep reference because PEP English formally starts in
grade 3.

## PDF.js

`pdf.min.mjs` and `pdf.worker.min.mjs` are PDF.js 4.10.38 under the Apache
License 2.0. The license text is in `pdfjs-LICENSE.txt`. PDF parsing happens in
the browser; the PDF bytes are never sent to the host.
