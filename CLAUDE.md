# Audio4Design — Website Project

This file is the persistent source of truth for the Audio4Design n Technology Corp. website. Read it before building or changing any page. Update it whenever a permanent, project-wide decision is made. The user's newest explicit instruction always takes priority over an older rule recorded here.

---

## 1. Company facts (verified — from "A4DNT COMPANY PROFILE 2025.pdf")

**Legal name:** Audio4Design n Technology Corp.
**TIN:** 006-611-678-000
**Ownership:** Corporation

**History:**
- Feb 2003 – Jan 2007: operated as "Audio 4 Design N Technology" (sole proprietorship)
- Feb 2007 – present: operated as "Audio 4 Design N Technology Corp." (a corporation)

**What the company does:** specializes in the **design, engineering, and installation** of pro-audio, video, and related equipment for a wide range of applications — professional sound, paging/PA, conferencing, security, fire/life-safety, lighting/LED, electrical/mechanical, and building infrastructure systems.

**Core service capabilities (the 4 pillars, verbatim intent from profile):**
1. **Engineering** — engineers innovative audio and video solutions tailored to specific needs, using advanced technologies and industry expertise.
2. **Design** — creates bespoke audiovisual solutions that integrate with the space, focused on usability and functionality.
3. **Installation** — certified technicians install AV systems with precision and efficiency, including integration support and onsite calibration.
4. **Maintenance** — proactive maintenance programs and dedicated technical support for long-term performance and reliability.

**Mission (source wording to draw from):** "to transform sound and vision experiences through innovative solutions and exceptional service. We are dedicated to delivering tailored audiovisual solutions that exceed expectations, enriching lives and environments with our passion for excellence."

**Vision (source wording to draw from):** "to be the leading provider of pro-audio and visual solutions in the Philippines, setting the standard for innovation, quality, and customer satisfaction. We aspire to continually push the boundaries of technology and creativity, shaping the future of audiovisual experiences and inspiring lasting impact in every endeavor."

**Contact information (do not alter or invent alternatives):**
- Phone: 0933-4634994 / 8812-2538
- Email: galindezc.aristotle@yahoo.com
- Website: www.audio4design.com
- Address: 2nd Flr., Unit 209 Cityland Pasong Tamo, #6264 Calle Estacion Pio, Del Pilar, Makati City 1230

**Full capability list** (breadth reference — do not dump this list on the homepage, use it to inform curated "Solutions" categories): Professional Sound System, Paging System, PA System, Speech Laboratory, Pipe-in Music/BGM, Intercom System, Video Projection System, Conference & Discussion System, Audio-Video/Conferencing, Portable PA System, Acoustic Treatment & Installation, Lighting System/LED Technology, Electrical/Mechanical, LED Calendar Alarm Clock, LED Digital Clock w/ Temperature, Digital Time Zone Clocks, Preventive Maintenance, Aircon/FDAS/Fire-Pro, Fire Protection System, PABX System, Door Access, Voice & Data Cabling, Fire Detection & Alarm System, Inert Gas/Fire Suppression, FM200/Deluge, Sprinkler, CCTV System, Security & Surveillance Cameras, LED Display/Video Board, Production Counter/LED Scrolling Message, LED Electronic Scoreboard/Bulletin Board, Digital Temperature/Timers, LED Digital Clock & Queuing System, Forex Board, PEE & PME Certification Issuance, Air Ventilation System, Ducting Ventilation.

**Curated solution categories used on the site** (derived groupings, not from source verbatim):
1. Audio Visual — AV, projection, conferencing, presentation, multimedia
2. Professional Sound — sound reinforcement, PA, paging, background music
3. Communication — intercom, PABX, conference/discussion systems
4. Security — CCTV, surveillance, access
5. Lighting & LED — lighting systems, LED technology, display boards, signage
6. Safety & Infrastructure — fire detection/alarm, electrical, supporting infrastructure

**Clients:** 19 government + 19 corporate logos (38 total), individually cropped from the profile's single client collage image — see `src/lib/clients.ts` and `public/images/clients/logos/`. Do not add clients not present in that source collage; see "Client logos" under Design direction for how these were derived.

**Technology partners:** brand logos as extracted from the profile (`public/images/partners/`). Do not add partner brands not present there.

**Content rule:** never invent stats, awards, certifications, project counts, client counts, years-of-experience claims beyond "since 2003," testimonials, or case studies. If the source doesn't support a claim, omit it.

---

## 2. Design direction

The old PDF company profile is a **content reference only**, never a visual reference. Do not reproduce: red diagonal corner shapes, red banners, brochure layouts, condensed heavy typography, crowded text, boxed sections, clip-art, logo-collage graphics, or the PDF's page-by-page structure.

**Aesthetic:** minimal, premium, technical, architectural, editorial. Think "premium technology company" + "architectural engineering firm" + "professional AV systems integrator." Quietly impressive, not flashy — no DJ/festival/gaming/generic-SaaS/generic-construction/sci-fi-AI vibes.

**Color system** — 90% neutral / 10% accent. The site ships light **and** dark mode (see "Theming" below); every color is one of two kinds:

*Fixed brand tones* — never change with the theme toggle:
- `--color-ink` near-black: `#0B0B0C`
- `--color-paper` warm off-white: `#FAF9F7`

*Theme-reactive tokens* — flip between the light and dark values below:
- `--color-canvas` (page/section background) — light `#FAF9F7`, dark `#0B0B0C`
- `--color-canvas-alt` (alternating section background) — light `#F1F0EE`, dark `#17181A`
- `--color-body` (primary text) — light `#0B0B0C`, dark `#F2F0ED`
- `--color-muted` (secondary text) — light `#6B6864`, dark `#9C9893`
- `--color-border` (hairline borders) — light `#E4E2DE`, dark `#2A2B2E`
- `--color-accent` (Audio4Design red — CTAs, small labels, hover states, active nav, thin rules only, never full-section fills) — light `#D6222A`, dark `#FF5A57` (brightened so eyebrow-label-sized text still clears ~4.5:1 contrast on a near-black background)
- `--color-accent-ink` (text on a filled-accent button) — constant `#FFFFFF`

**Typography:** single primary font family — **Inter** (loaded via `next/font/google`), used for both display and body. Uppercase small-caps-style eyebrow labels (letter-spacing ~0.12em, 12–13px) for section labels like "ABOUT AUDIO4DESIGN," "TECHNOLOGY PARTNERS." Large editorial headlines use `clamp()` sizing, never fixed desktop px. No condensed/heavy display faces from the old brochure.

**Spacing tokens** (fluid, via `clamp()`):
- Section vertical rhythm: `clamp(4.5rem, 9vw, 8.5rem)` (~72–136px)
- Container inline padding: `clamp(1.25rem, 5vw, 5rem)` (20–80px)
- Max content width: `1280px` (`.container` utility), with a narrower `72ch`-ish measure for long-form paragraph text

**Layout:** CSS Grid/Flexbox only for primary layout; `clamp()`/`min()`/`max()`/`aspect-ratio` for fluid sizing; absolute positioning reserved for decorative accents only (thin lines, numerals, subtle marks) — never for primary content flow.

**Breakpoints (Tailwind defaults used as-is):** `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536. Mobile-first. Tablet (`md`–`lg`) should use 2-column layouts where sensible rather than jumping straight from 1 to 3 columns.

**Imagery:** prioritize real Audio4Design photographs extracted from the company profile PDF, organized under `public/images/photos/` (genuine on-site installation work) and `public/images/photos/products/` (catalog/product shots). See `public/images/MANIFEST.md` for the full inventory and what each image shows. Use `object-fit: cover` with deliberate `aspect-ratio`, never stretch. Always meaningful `alt` text. Lazy-load below-the-fold images (Next/Image handles this by default).

**Motion:** subtle only — fade-up on scroll reveal, gentle image scale on hover, smooth nav/menu transitions. No bounce, spin, parallax, particles, gradient animation, or heavy glassmorphism. Respect `prefers-reduced-motion` (disable/shorten transitions).

**Buttons** (`src/components/Button.tsx`, small radius ~6–8px, not pill-shaped) — four variants, and which to use depends on whether you're inside a permanently-dark section or a regular (theme-reactive) one:
- `primary` / `secondary` — theme-reactive, for use in **regular content sections** (About, Solutions, etc.)
- `accent` / `ghost` — pinned to the fixed ink/paper tones, for use **only** inside the permanently-dark sections (Hero, Final CTA)

### Theming (light/dark mode)

The toggle lives in `Navbar.tsx` (`ThemeToggle.tsx`) and flips a `data-theme="light"|"dark"` attribute on `<html>`, which switches which values the theme-reactive CSS custom properties above resolve to (defined in `src/app/globals.css`). The choice is saved to `localStorage` (`a4dnt-theme`) and restored by an inline script in `src/app/layout.tsx` that runs before first paint (no flash of the wrong theme); a first-time visitor gets their OS `prefers-color-scheme` as the starting point.

**The four "statement" sections — Hero, Mission/Vision, Final CTA, and Footer — are permanently dark and do NOT change with the toggle.** They're brand/photography statements, not reading surfaces, and they always use the *fixed* `ink`/`paper` tokens (`bg-ink text-paper`). Everything else (About, Capabilities, Solutions, Real Work, Clients, Partners, the credibility strip, and the navbar once scrolled) uses the *theme-reactive* tokens (`bg-canvas`, `bg-canvas-alt`, `text-body`, `text-muted`, `border-border`) and repaints for light/dark. Don't "fix" a dark-in-light-mode Hero or a light-in-dark-mode Footer — that's intentional; if you genuinely want to change it, that's a real design decision, not a bug fix.

One more fixed-on-purpose exception, because the source assets have inconsistent/opaque baked-in backgrounds the code can't control (see "Partner logos," above, and `MANIFEST.md`):
- `PartnerLogo.tsx` cards — always `bg-paper`

(`ClientBadge.tsx` doesn't need this exception — the individual client logo crops are already self-contained circular seals/marks with their own opaque fill, so they read fine directly on the theme-reactive `bg-canvas` without a wrapper card. See "Client logos," below.)

The unscrolled navbar is a special case: it sits transparently on top of the (always-dark) Hero photo, so its text/logo/CTA use the *fixed* light `paper` tokens regardless of theme; once scrolled (solid background), it switches to the *theme-reactive* tokens. See the `solid` variable in `Navbar.tsx`.

Photo/image gradient overlays (the dark scrim on `ProjectImage`, `SolutionItem`, and the Hero photo, used purely so white captions stay legible over a photograph) also stay on the fixed `ink` token — they tint a photo, not the page chrome, so they shouldn't repaint with the theme.

**When adding a new section:** if it's a normal white/off-white content section, use the theme-reactive tokens (`bg-canvas`/`bg-canvas-alt`, `text-body`, `text-muted`, `border-border`) so it repaints correctly. Only reach for the fixed `ink`/`paper` tokens if the section is a deliberate, permanently-dark brand statement like Hero/Footer.

**Logo usage:** use the extracted real logo asset (`public/images/logo/a4dnt-logo.png`) as-is — do not redesign or re-effect it. The file was re-processed once (see Asset inventory below) to key out its baked-in white JPEG background to real alpha transparency, since the source PDF only embeds it as flat opaque raster. On dark backgrounds (footer) it's shown via `brightness-0 invert` to render as a clean white mark; on light backgrounds (navbar) it's shown unfiltered in its native red/black. Don't reapply `brightness-0 invert` against a non-transparent copy of the logo — it will render as a solid white box.

**Partner logos:** shown in their natural full color inside plain bordered cards (`bg-paper`, hairline border) — no grayscale/desaturation filter. An earlier grayscale-by-default treatment was removed because several source brand logos (Phonic, dbx, Shure, etc.) have an opaque black background baked into the raster (not transparent), and grayscaling turned them into near-invisible dark-on-dark boxes. Full color avoids that failure mode and is the simpler, more robust choice given the asset set. A few individual logos (Acer, Samson, Shure) are inherently low quality/low contrast — this traces to a transparency-flattening artifact in the source PDF (see `MANIFEST.md`), not a rendering bug; don't try to "fix" it in code, source better brand assets if this ever matters.

**Client logos:** the source PDF's page 15 has exactly one flattened raster image (a black-background collage with "GOVERNMENT" and "CORPORATE" gold headers baked in) — there was never a set of separate client logo files to extract. Rather than showing that one flat image, the collage was re-rendered from the source PDF at high resolution and programmatically split into 38 individual circular logo crops (19 government + 19 corporate) using connected-component detection (`scipy.ndimage.label` on a non-black mask), each masked to a clean circle with a transparent background. Every crop was then visually confirmed and named by hand (see `src/lib/clients.ts` and `MANIFEST.md`) — three were genuinely hard to place at a glance (DPWH's gear-and-column seal, DICT's abstract geometric mark, and Globe's icon-cluster globe, which the original text extraction had missed entirely) and were identified from the artwork itself rather than assumed from position. If the source company profile is ever updated with a new client roster, this whole derivation (re-render → detect → crop → identify) needs to happen again — there's no shortcut. The flattened original is kept for reference at `public/images/raw/superseded/clients-collage.jpg`, no longer used by the site.

---

## 3. Asset inventory

Extracted from the source PDF via PyMuPDF and curated into:
- `public/images/logo/` — official wordmark (`a4dnt-logo.png`; background chroma-keyed to transparent post-extraction, see above)
- `public/images/photos/` — real on-site installation photography
- `public/images/photos/products/` — product/catalog photos
- `public/images/clients/logos/` — 38 individually cropped, circular, transparent-background client logos (19 government + 19 corporate), derived from the source collage — see "Client logos" above and `src/lib/clients.ts`
- `public/images/partners/` — individual technology partner brand logos (33 of ~38 reference brands; Mackie, Pioneer, Bose, JBL, TOA had no raster logo in the source PDF — likely vector/text there — so they're absent, not skipped by mistake)
- `public/images/raw/` — untouched raw extraction dump (99 files) plus `raw/superseded/` (the original flattened client collage, replaced by the individual crops above); not for use in the site, kept only as a source archive (do not import from here directly, do not delete without checking)

See `public/images/MANIFEST.md` for the authoritative list of what each curated file contains, including notes on excluded/low-confidence images (e.g. the page-11 DJ/concert-lighting photos, judged likely stock rather than real company work, and thus not used on the site).

---

## 4. Tech stack & conventions

- **Framework:** Next.js (App Router) + TypeScript + Tailwind CSS v4
- **Fonts:** `next/font/google` — Inter
- **Images:** `next/image` for all photography and logos
- **Components live in** `src/components/` — `Navbar` (includes the mobile menu, not a separate component), `ThemeToggle`, `Button`, `SectionHeader`, `Reveal` (client component, IntersectionObserver-based scroll-fade wrapper), `SolutionItem`, `ProjectImage`, `PartnerLogo`, `ClientBadge`, `Footer`; homepage sections live in `src/components/sections/`; project-specific components live in `src/components/projects/` (`ProjectCard`, `ProjectGrid`, `ProjectFilters`, `ProjectGallery`). **UI components must not contain content data** — see section 6 below.
- **Built routes:** the landing page (`/`) plus the projects system (`/projects`, `/projects/[slug]`). Services/Solutions/Clients/Contact are still homepage anchor sections, not separate routes — don't scaffold them until asked.
- **`Navbar` takes an `overHero` prop.** Pass it only on pages whose first section is the full-bleed dark hero (currently just `/`); there the navbar starts transparent with light text. Every other page must omit it so the navbar renders solid — light nav text on a light page is invisible. Sub-pages should also put `section-page-top` alongside `section` on their first section to clear the fixed navbar.
- **Headings:** exactly one `<h1>` per page, no level skips. `SectionHeader` renders `h2` by default; pass `as="h1"` when it is the page's main heading (as `/projects` does). `ProjectCard` titles are `h2` because they sit directly under that `h1`. Verify with an audit before adding a new page.
- **Anchor offset:** `section[id]`/`article[id]` carry `scroll-margin-top` in `globals.css` so in-page anchors clear the fixed navbar. Any new anchor target needs to be one of those elements (or get the same rule) or it will scroll under the header.
- **CSS gotcha — `.section` beats Tailwind `pt-*`.** `.section` (and friends) are defined in `globals.css` *after* `@import "tailwindcss"`, so at equal specificity they win on source order. A `pt-32` on an element that also has `.section` is silently dead. Adjust the padding via a custom class defined after `.section` (that's what `.section-page-top` is), not a utility.
- Design tokens (colors, spacing, container widths) are defined in `src/app/globals.css` under `:root` / `:root[data-theme="dark"]` / `@theme inline` and consumed via Tailwind utility classes (`bg-canvas`, `text-body`, `text-muted`, `border-border`, `bg-ink`/`text-paper` for the fixed dark sections, `.container`, `.section`, `.eyebrow`, `.reveal`) — keep new colors/spacing in that single source rather than hardcoding one-off hex/px values in components. See "Theming" above before adding a color to a new section.
- **Non-developer editing guide:** `EDITING-GUIDE.md` at the repo root walks through changing contact info, nav links, section copy, images, partner/client logos, and colors without needing to understand the codebase. Keep it in sync when data file shapes or file locations change.
- **Icons:** `lucide-react` (added as a dependency) — small, tree-shakeable, matches the restrained aesthetic. Use it rather than inline SVGs or a heavier icon set.
- **Next.js image optimizer cache gotcha:** if a locally-served image is edited in place (same filename, new bytes) and the dev server was already running, `next dev`'s on-disk image cache can serve a stale pre-edit variant for some requested widths even after the source file changes. If a swapped/edited image looks wrong only in the browser but the file itself checks out, stop the dev server, `rm -rf .next`, and restart before assuming it's a code bug.
- **This project directory lives under iCloud Drive sync ("Desktop & Documents Folders").** iCloud has repeatedly corrupted this repo in ways that look like unrelated bugs — treat any of the following as a sign to check for it, not a code problem:
  - Duplicate `" 2"`-suffixed files appearing inside `.git` or `.next` (e.g. `refs/remotes/origin/HEAD 2`, `chunks 2`) — `next build`/`next dev` silently no-ops, or `git fetch`/`fsck` fails with a ref/object error.
  - **Silent data loss**, not just duplication: working-tree files and/or loose objects in `.git/objects` disappearing outright (no `.icloud` placeholder left behind), and separately, symlinks under `node_modules/.bin/` disappearing so `npx`/`npm run` silently fall back to a global install or fail with confusing errors (`next.config.ts not supported`, `tsc`/`eslint` trying to install an unrelated package). This has happened at least twice on this repo — once to `.git` refs, once more broadly to `.git/objects` (130+ missing blobs, broken tree links), working-tree image files (159 of them), and `node_modules/.bin`, all in the same incident.
  - **Recovery playbook:** node_modules is untracked and fully reproducible — `rm -rf node_modules && npm ci`. For `.git`/working-tree damage: verify `origin` on GitHub is intact first (`git fetch`, compare `git rev-parse main origin/main`, `git clone` into a scratch dir and run `git fsck --full` on the fresh clone) — GitHub's copy is unaffected by local iCloud issues and is the trustworthy source. Diff `git status --porcelain` for anything beyond simple deletions of already-committed content (real uncommitted work must not be discarded). If it's pure data loss with nothing new to preserve, copy the missing working-tree files in from the clean clone, then replace the local `.git` directory with the clean clone's `.git` (move the old one aside, don't delete it, until the swap is verified) rather than trying to surgically patch a corrupted object database — cache-tree/tree-object corruption isn't fixable by re-adding individual files. Reapply any local-only git config afterward (e.g. `http.postBuffer`, `http.version` — see the large-push note elsewhere in this file).
  - The durable fix is excluding this repo from iCloud sync entirely (System Settings → Apple ID → iCloud → iCloud Drive → Options, or keep git repos outside `~/Documents`) — flagged to the user, not yet done as of this writing.
- **Playwright QA note:** a `fullPage: true` screenshot can visually duplicate `position: fixed` elements (e.g. the sticky navbar) at multiple scroll offsets — that's a screenshot-stitching artifact, not a real rendering bug. Verify against `document.querySelectorAll(...)` length or a viewport-clipped screenshot before treating it as a defect. Also: Next/Image's native lazy-loading means images below the fold won't have `naturalWidth`/`complete` set until the page has actually been scrolled past them — scroll through the full page (with waits) before asserting an image is broken.

---

## 5. Content architecture (solutions & projects)

### Data files — one source of truth each

| File | Owns |
|---|---|
| `src/lib/solutions.ts` | The **full** solution catalogue (not just what the homepage shows) |
| `src/lib/projects.ts` | All projects, their media, and the filter/sort/format helpers |
| `src/lib/clients.ts` | Client logos, grouped `government` / `corporate` |
| `src/lib/partners.ts` | Technology partner logos |
| `src/lib/site-data.ts` | Genuinely site-wide only: `company`, `navLinks`, `capabilities` |

**UI components contain no content data.** If you find yourself typing a solution title or project name into a `.tsx` file, it belongs in one of the files above instead.

### Solution model

```ts
{ id, slug, number, title, description, image, featured }
```

`id` is the stable key everything else references — projects, the `?solution=` param, filter links. Renaming a `title` is safe; changing an `id` is a breaking change (update every project that references it).

The array is declared `as const satisfies readonly Solution[]`, which derives `SolutionId` as a **literal union of the real ids**. A typo in a project's `solutions` array is therefore a compile error, not a silently-empty filter. Helpers: `featuredSolutions`, `getSolutionById()`, `isSolutionId()` (runtime guard for untrusted URL input).

### Project model

```ts
{ id, slug, title, date, location?, description, solutions, coverImage, media, placeholder? }
```

- `date` is **ISO `YYYY-MM-DD`** and is what sorting uses. Never sort on a formatted display string — render via `formatProjectDate()`.
- `solutions: SolutionId[]` — **a project can belong to several solution areas**, which is the normal case (an AV fit-out often also carries communication, security, and life-safety scope). Store ids only; never solution names, and never mirror the relationship anywhere else.
- `media: ProjectMedia[]` is a discriminated union of `{ type: "image", src, alt, caption? }` and `{ type: "video", src, poster?, caption? }`, so a project can hold a full album of photos and videos. Videos render with `preload="none"` — nothing is fetched until the viewer presses play.
- `placeholder: true` marks temporary sample data (renders a visible "Placeholder" badge). **Every project currently in the file is a placeholder** — delete them as real projects arrive; nothing in the UI depends on them existing.

### Relationships

```
solutions.ts ──id──► projects.ts
     │                    │
     ├─ featured:true ──► homepage Solutions grid + Footer solution links
     └─ all solutions ──► /projects filter chips
```

### Featured solutions

The homepage grid and the footer's solution list both derive from `featuredSolutions` (i.e. `featured: true`). There is no second list anywhere. Flipping one flag adds or removes a homepage card; non-featured solutions still exist in the catalogue and are still filterable on `/projects`. The Solutions section is deliberately labelled **"Selected Solution Areas"** and its copy says the full scope is wider — don't reword it to imply the six cards are the complete catalogue.

### Routing

| Route | Behaviour |
|---|---|
| `/projects` | All projects, most-recent first |
| `/projects?solution=<id>` | Only projects whose `solutions` array contains `<id>` |
| `/projects?sort=oldest` | Oldest first (`recent` is the default and is omitted from the URL) |
| `/projects/<slug>` | Project detail + gallery; pre-rendered via `generateStaticParams`, unknown slug → 404 |

Filter/sort state lives entirely in the URL and is handled server-side — the controls are plain `<Link>`s, so views are shareable and back/forward works with no client state. Invalid input degrades gracefully: an unknown `solution` shows all projects, an unknown `sort` falls back to most-recent.

Because `/projects` exists, `navLinks` hrefs are **route-absolute** (`/#about`, not `#about`) so the shared Navbar/Footer work from any page. Keep it that way.

### Content workflow

- **Add a solution** → append to `solutions.ts`. It becomes a `/projects` filter automatically; set `featured: true` to also put it on the homepage.
- **Feature/unfeature a solution** → flip `featured`. No component changes.
- **Add a project** → append to `projects.ts` with a unique `slug`, an ISO `date`, and `solutions: [...]` ids. It appears in the list, in every matching filter, and gets its own pre-rendered detail page automatically.
- **Add a project to more solution areas** → add ids to its `solutions` array. Nothing else.
- **Add project media** → push objects onto `media`. Put files in `public/images/...` (or `public/videos/...`) and reference them by path.
- **Placeholder assets** live in `public/images/placeholder/` — swap the `coverImage`/`media` paths for real files and drop `placeholder: true`.

No UI component needs to be edited for any of the above.

---

## 6. Maintenance note

After the landing page is built, this file was reviewed and updated with the final tokens/conventions actually implemented (see sections 2 and 4 above). Any future session should treat this file as authoritative over re-deriving these decisions from scratch — but should still verify referenced files/assets actually exist before relying on them.

**Known follow-up:** the homepage `RealWork` section still hardcodes its five photos and captions. That's deliberate for now — they're genuine installation photographs, and wiring the section to `projects.ts` while that file holds only placeholders would put obviously-fake project data on the homepage. Once real projects with real media exist, `RealWork` should derive from `projects.ts` like everything else.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
