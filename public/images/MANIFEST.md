# Image Manifest — A4DNT Company Profile 2025

Sorted from 99 raster images extracted from `A4DNT COMPANY PROFILE 2025.pdf` (raw files in `raw/`, unchanged).
Verified by visually inspecting every image's actual content (not filenames/dimensions alone). Duplicates were
identified first via MD5 checksum, then one representative of each unique image was inspected.

## logo/ (1 file)
- `a4dnt-logo.png` — the AUDIO4DESIGN red wordmark + "N TECHNOLOGY CORP." black subtext, trimmed of white
  margin and converted to PNG. Source: `raw/p01_img02_600x349.jpeg` (the largest/cleanest of the many
  duplicate logo instances found on nearly every page).

## photos/ (14 files) — genuine on-site company work photos, pages 6–10
- `av-conference-room.jpg` — boardroom/conference table with mic consoles, monitor, and wall screen ("Audio Visual System", p6).
- `background-music-outdoor-speaker.jpg` — technician on a ladder installing an outdoor speaker on a pole near a pool ("Background Music", p6).
- `training-room-rack-install.jpg` — technician kneeling, working inside a rack-mount flight case labeled "STELLAR" ("Training Room", p6).
- `ceiling-speaker-install.jpg` — technician on a red ladder reaching into a ceiling tile in what looks like a call-center/office floor ("Ceiling Speaker", p7).
- `intercom-system.jpg` — person at a wall-mounted intercom/phone panel on a blue wall ("Intercom System", p7).
- `video-conference-logitech.jpg` — conference table with a Logitech camera, speakerphone puck, and remote ("Video Conference System Logitech", p7).
- `cctv-server-rack-unboxing.jpg` — person unboxing/scanning equipment among stacked boxes next to an open server rack ("CCTV Installation", p8).
- `cctv-rack-install-hardhat.jpg` — technician in a hardhat working inside an open rack cabinet ("CCTV Installation" continued, p8).
- `pa-system-ceiling-fitout.jpg` — construction-stage ceiling grid with a speaker cutout tile and aircon unit exposed ("P.A System", p8).
- `pabx-cable-run-ladder.jpg` — three technicians (one on a ladder in a hardhat) running a cable bundle to a wall-mounted cabinet, "AUDIO4DESIGN" branded shirt visible ("PABX", p9).
- `pabx-rack-termination.jpg` — technician kneeling, terminating cables into a server rack at night/low light ("PABX", p9).
- `pabx-ceiling-conduit.jpg` — technician on a ladder working on ceiling lighting/conduit in an empty warehouse-like space ("PABX", p9).
- `fiber-termination-scissor-lift.jpg` — technicians in harnesses on a scissor lift doing overhead work under a "KEEP OUT OVERHEAD WORKS" sign ("IDF CCTV Fiber Termination", p10).
- `fire-alarm-scaffolding-install.jpg` — technician (AUDIO4DESIGN shirt) reaching up to install a device on an overhead beam/track ("Fire Alarm Installation", p10).

### photos/products/ (12 files) — catalog/product stock photos, pages 12–14
- `product-led-sign.jpg` — red LED scrolling "OPEN" sign.
- `product-paging-console.jpg` — black paging gooseneck-mic console with zone buttons.
- `product-pa-speakers.jpg` — Alto-branded PA loudspeaker cabinet.
- `product-speech-lab.jpg` — language/speech lab room, rows of headphone stations and a mixing console.
- `product-conference-cam.jpg` — Logitech conference camera + speakerphone + remote kit (studio product shot).
- `product-intercom-panel.jpg` — IP phone plus two door-intercom panels.
- `product-stage-light.jpg` — black stage Par-can light fixture.
- `product-portable-pa.jpg` — JBL-branded portable PA system with two speakers and a powered mixer.
- `product-projector.jpg` — small black mini/pico projector.
- `product-cctv-cameras.jpg` — cluster of bullet and dome CCTV cameras.
- `product-electrical-breaker.jpg` — Schneider EasyPact electrical circuit breaker.
- `product-fire-detection.jpg` — smoke/heat detector heads and a red manual call point.

## clients/logos/ (38 files) — UPDATE, post-launch: individually cropped client logos

The original `clients-collage.jpg` (below) was a single flattened black-background image with no separated
logo files in the source PDF. To present clients properly (grouped, labeled, individually legible in both
light and dark mode) instead of one flat picture, it was re-derived:

1. Re-rendered page 15 of the source PDF at 6x zoom (3573×5054px) — far higher resolution than the
   883×908 raster embedded in the PDF — via `page.get_pixmap(matrix=fitz.Matrix(6,6))`.
2. Cropped to just the black collage box, then ran connected-component detection
   (`scipy.ndimage.label` on a "brighter than near-black" mask, after a binary-opening pass to
   drop noise) to find each logo's bounding box automatically — no manual coordinate-guessing.
3. Kept only components with area > 50,000px (36 logos are ~418×418px; 2 — DPWH and the Macquarie
   Bank ring mark — detected smaller due to lower internal contrast, ~372–420px; both still well
   above the noise floor). This naturally excludes the "GOVERNMENT"/"CORPORATE" gold header text,
   which fragments into many small per-letter components under this threshold.
4. Sorted the 38 surviving blobs into 6 rows (by y-position clustering) of 6–7 each (by x-position
   within row) — i.e. the collage's actual reading order — giving 19 government + 19 corporate,
   not the 18 + 18 originally assumed from a first-pass text-layer read of the PDF.
5. Cropped each to a fixed 470×470px circle (generous fixed radius around each detected centroid,
   so the two undersized detections still get a full, uncropped logo) and masked to a clean circle
   with a transparent background (`PIL.ImageDraw` ellipse alpha mask).
6. Visually confirmed and named every single crop by hand — see `src/lib/clients.ts` for the final
   list. Three were not obvious from position/text-layer guessing alone and were identified from the
   artwork itself: **crop 6** is the Department of Public Works and Highways seal (gear-tooth ring +
   columns), not MMDA as first assumed from the text layer; **crop 12** is the Department of
   Information and Communications Technology's abstract four-circle geometric mark; **crop 20** is
   **Globe** (Globe Telecom)'s icon-cluster globe mark — a real client the original text-layer pass
   had missed entirely (it renders as a pure icon with no adjacent OCR-able text).

Files are named `gov-{slug}.png` / `corp-{slug}.png`, e.g. `gov-philippine-air-force.png`,
`corp-samsung.png`. Full name list and grouping: `src/lib/clients.ts`.

**If the source company profile is ever revised with a different client roster, this whole
derivation has to happen again** — steps 1–6 above, not just a re-crop, since blob positions and
counts depend on the new collage's exact layout.

## raw/superseded/clients-collage.jpg (archived, superseded)
The original single flattened collage (883×908; all 38 logos + "GOVERNMENT"/"CORPORATE" headers
baked into one black-background image) that `clients/logos/` above was derived from. Kept only for
reference — the site no longer uses this file.

## partners/ (33 files) — individual technology brand logos, pages 16–17
- `partner-epson.png`, `partner-alto.png`, `partner-shure.png`, `partner-phonic.png`, `partner-acer.png`,
  `partner-yamaha.png`, `partner-konzert.jpg`, `partner-hitachi.png`, `partner-dbx.png`, `partner-mipro.jpg`,
  `partner-samson.png`, `partner-aten.jpg`, `partner-audio-technica.png`, `partner-polk-audio.png`,
  `partner-soundcraft.png`, `partner-fender.png`, `partner-cerwin-vega.jpg`, `partner-p-audio.jpg`,
  `partner-kevler.jpg`, `partner-neutrik.png`, `partner-wharfedale-pro.jpg`, `partner-strandtz.jpg`,
  `partner-rcf.jpg`, `partner-qsc.jpg`, `partner-peavey.jpg`, `partner-samsung.png`, `partner-lg.png`,
  `partner-msi.jpg`, `partner-hp.jpg`, `partner-studiomaster.jpg`, `partner-beta-three.jpg`,
  `partner-apple.jpg`, `partner-asus.jpg` — each is that brand's individual wordmark/logo as extracted.
  Duplicate instances of the same brand and any A4DNT-logo/decoration repeats on these pages were skipped.

  **Note on quality:** `partner-acer.png`, `partner-samson.png`, and `partner-shure.png` were extracted from
  the PDF as essentially black text flattened onto a black background (their true fill and background pixel
  values were both RGB 0,0,0 — likely a transparency-flattening bug in the original PDF). Only the
  anti-aliased edge pixels survived, so these three are barely legible even after auto-contrast stretching.
  They are included (auto-contrast applied to make the wordmark as visible as possible) but are the lowest
  quality of the set — worth sourcing fresh official logo files for these three brands before using them on
  the site.

  **Note on missing brands:** the task's reference list also mentioned Mackie, Pioneer, Bose, JBL, and TOA
  as partner brands. No separate raster logo image for any of these five was found among the 99 extracted
  images — they were likely set as vector/text elements in the original PDF rather than embedded raster
  images, so there is nothing to extract for them here.

## decorative-skip/ — NOT copied, listed here for reference only (no folder created, nothing to see)
- Large red angular corner-shape background graphic, ~736×1040, appears identically on 14 pages
  (`p01_img01` … `p14_img02`, MD5 `605e8eac…`). Pure decoration, no photo content.
- Smaller version of the same red corner shape, ~420×245, appears identically on 12 pages
  (`p03_img01` … `p14_img01`, MD5 `a4703ef5…`). Pure decoration.
- `p04_img03_2304x1688.jpeg` — full-bleed blank light-grey paper/texture background graphic, no content.
- Five fully solid-black PNG squares with zero pixel variation (`p16_img03`, `p16_img04`, `p16_img08`,
  `p16_img10`, `p16_img12`) — broken/blank placeholder images, nothing renders in them at all.
- Small ~360×210 duplicate of the A4DNT logo appearing 4 times (`p02_img02`, `p15_img01`, `p16_img24`,
  `p17_img06`) — skipped as a duplicate of the logo already kept in `logo/`.

## Skipped — judgment calls, worth a second look
- `p11_img03_480x320.png` ("DJ Mixing Audio System", p11) — close-up hands on DJ mixer/CDJ gear with warm
  bokeh background. Has the unmistakable look of licensed stock photography (generic hand model, no company
  branding, studio-style lighting) rather than an actual A4DNT job photo. Excluded from `photos/`.
- `p11_img04_521x308.png` ("Lighting System", p11) — wide shot of a stage with purple/blue moving-head
  lighting beams and a silhouetted performer. Plausible as a real A4DNT lighting gig, but has the same
  generic/cinematic "stock concert photo" feel as the DJ image and no identifying details. Excluded from
  `photos/` out of caution; if you have context confirming this is an actual A4DNT event, it's a strong
  visual and worth moving into `photos/` as `lighting-system-concert.jpg`.
- `partner-acer.png`, `partner-samson.png`, `partner-shure.png` — see quality note above; usable but weak,
  consider replacing with official brand assets.
