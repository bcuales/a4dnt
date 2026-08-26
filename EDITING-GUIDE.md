# Editing Guide

A plain-English guide to changing the content on the Audio4Design website yourself — text, images, contact info, partner/client logos, colors — without needing to understand the code. There's currently one page (the homepage), so this guide walks through it section by section, in the order you scroll past them.

If you'd rather not edit files directly, you can also just describe the change to Claude Code in plain language (e.g. "change the phone number to..." or "swap the hero photo for this one") and point it at this guide.

**For deeper technical/design decisions** (why colors are structured the way they are, which sections are allowed to be dark, etc.) see `CLAUDE.md` — this guide is the "how do I change X" companion to that file.

---

## Before you start

1. Open a terminal in this project folder.
2. Run `npm run dev`.
3. Open **http://localhost:3000** in your browser.
4. Leave that terminal running. Whenever you save a change to a file, the page in your browser updates automatically within a second or two — no need to restart anything.
5. Make one change at a time and check it in the browser before moving to the next, especially with images.

Two files you'll come back to constantly:

| File | What it controls |
|---|---|
| `src/lib/site-data.ts` | Contact info, nav menu, the four "What We Do" items |
| `src/lib/solutions.ts` | All solution areas, and which appear on the homepage |
| `src/lib/projects.ts` | All projects and their photos/videos |
| `src/lib/partners.ts` | The list of technology partner logos |
| `src/lib/clients.ts` | The list of client logos (government + corporate) |

Everything else (Hero headline, Mission/Vision text, Footer text, etc.) lives directly in the section file it belongs to, listed below.

---

## Quick reference — "I want to change..."

| I want to change... | Edit this file |
|---|---|
| Phone, email, or address | `src/lib/site-data.ts` → the `company` object |
| The menu links at the top of the page | `src/lib/site-data.ts` → `navLinks` |
| The main headline / hero photo | `src/components/sections/Hero.tsx` |
| "Est. 2003 / Design / Engineering..." strip | `src/components/sections/CredibilityStrip.tsx` |
| The "About Audio4Design" text | `src/components/sections/About.tsx` |
| The four Engineering/Design/Installation/Maintenance items | `src/lib/site-data.ts` → `capabilities` |
| The Solutions cards (title, blurb, photo) | `src/lib/solutions.ts` |
| Which solutions show on the homepage | `src/lib/solutions.ts` → the `featured` flag |
| Projects, project photos/videos | `src/lib/projects.ts` |
| The "Real Work" homepage photos | `src/components/sections/RealWork.tsx` |
| The Mission & Vision statement | `src/components/sections/MissionVision.tsx` |
| Client logos (add/remove/swap/reorder) | `src/lib/clients.ts` + `public/images/clients/logos/` |
| Technology partner logos (add/remove/swap) | `src/lib/partners.ts` + `public/images/partners/` |
| The closing "Let's build the right system..." section | `src/components/sections/FinalCTA.tsx` |
| Footer text/links | `src/components/Footer.tsx` |
| The logo image itself | `public/images/logo/a4dnt-logo.png` |
| Colors / light-dark mode | `src/app/globals.css` (see the "Colors & dark mode" section below) |

---

## 1. Contact details, company info & nav menu

**File:** `src/lib/site-data.ts`

Right at the top:

```ts
export const company = {
  name: "Audio4Design n Technology Corp.",
  shortName: "Audio4Design",
  foundedLabel: "Since 2003",
  phone: "0933-4634994 / 8812-2538",
  email: "galindezc.aristotle@yahoo.com",
  website: "www.audio4design.com",
  address: [
    "2nd Flr., Unit 209 Cityland Pasong Tamo",
    "#6264 Calle Estacion Pio, Del Pilar",
    "Makati City 1230",
  ],
};
```

This one block feeds the phone/email/address shown in the Final CTA section and the Footer, plus the `mailto:`/`tel:` links on those buttons. Change a value between the quotes and save — it updates everywhere it's used automatically. The `address` is a list of lines; add, remove, or edit a line the same way (keep the comma after each line except the last).

Just below it, the top navigation menu:

```ts
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  ...
];
```

`label` is what visitors see; `href` is which section it jumps to (the `#name` must match the `id="name"` on that section — don't change `href` unless you also rename the matching section's `id`). To reorder the menu, reorder these lines. To remove an item, delete its whole `{ ... }` line.

---

## 2. Hero (the big photo + headline at the top)

**File:** `src/components/sections/Hero.tsx`

- **Eyebrow label** ("AUDIO4DESIGN N TECHNOLOGY CORP. — SINCE 2003"): the `<p className="eyebrow">` line.
- **Headline**: the `<h1>` text, currently "Professional Audio & Visual Solutions".
- **Sub-line**: "Design. Engineering. Installation. Maintenance."
- **Paragraph**: the longer sentence below that.
- **Buttons**: the two `<Button>` lines — the text between `>` and `</Button>` is the button label; `href="#solutions"` / `href="#contact"` is where it jumps to.
- **Photo**: change `src="/images/photos/av-conference-room.jpg"` to a different file path under `public/images/`. See "Working with images" below before swapping it.

---

## 3. Credibility strip ("Est. 2003 | Design | Engineering | Installation | Maintenance")

**File:** `src/components/sections/CredibilityStrip.tsx`

It's one line near the top:

```ts
const items = ["Est. 2003", "Design", "Engineering", "Installation", "Maintenance"];
```

Edit, add, or remove entries directly in that list — each one becomes a label with a thin divider between it and the next.

---

## 4. About section

**File:** `src/components/sections/About.tsx`

- The big headline is the text inside the `<h2>` tag ("Technology designed around the way people work, communicate, and experience spaces.").
- The paragraph below it is inside the `<p className="text-base ...">` tag.
- The button ("Our Services") text and where it links to (`href="#services"`) are on the `<Button>` line.

---

## 5. Services — Engineering / Design / Installation / Maintenance

**File:** `src/lib/site-data.ts` → the `capabilities` list.

```ts
export const capabilities = [
  {
    number: "01",
    title: "Engineering",
    description: "We engineer innovative audio and video solutions ...",
  },
  ...
];
```

Each block is one row on the page. Edit `title` or `description` freely. `number` is just the "01/02/03/04" label shown next to it — change it too if you reorder or add/remove rows. To add a fifth discipline, copy one whole `{ ... },` block and edit it; to remove one, delete its block.

---

## 6. Solutions (Audio Visual, Professional Sound, Security, …)

**File:** `src/lib/solutions.ts`

This one file holds **every** solution area Audio4Design offers — not just the ones on the homepage. Each entry looks like:

```ts
{
  id: "audio-visual",
  slug: "audio-visual",
  number: "01",
  title: "Audio Visual",
  description: "Professional AV, projection, conferencing, presentation and multimedia systems.",
  image: "/images/photos/av-conference-room.jpg",
  featured: true,
},
```

- **`title` / `description` / `image`** — what shows on the card. Edit freely. `image` can point at any file under `public/images/`.
- **`number`** — just the "01 / 02 / …" label on the card.
- **`featured`** — **this is the important one.** `true` = the card appears on the homepage. `false` = it stays in the catalogue and is still available as a filter on the Projects page, but doesn't appear on the homepage. Flip it to show or hide a card; you never need to touch any component.
- **`id`** — the permanent internal name. Projects link to solutions using this, so **avoid changing an `id`** once projects reference it. Changing `title` is always safe.

To add a new solution, copy a whole `{ ... },` block and edit it. To remove one, delete its block (and remove that `id` from any project's `solutions` list).

Clicking a solution card takes visitors to the Projects page filtered to that solution.

**Layout note:** the first *featured* item renders as the large card; the next two sit beside it, and any beyond that flow into rows of three below — so adding more featured solutions just extends the grid.

---

## 7. Real Work (the project photo gallery)

**File:** `src/components/sections/RealWork.tsx`

This is the homepage strip of real installation photos — it's separate from the Projects page (section 7a below). It shows 5 photos hand-arranged into a layout (one large + two medium + two wide). To swap a photo or its caption, find the matching `<ProjectImage src="..." label="..." />` block and edit `src` (file path) or `label` (caption text).

To change which photos appear, or add a sixth, each `<Reveal>...</Reveal>` block wraps one photo — copy one, change its `src`/`label`, and adjust the surrounding grid classes. If that feels fiddly, hand it to Claude Code with a plain description of what you want.

---

## 7a. Projects (the /projects page and individual project pages)

**File:** `src/lib/projects.ts` — this is the only file you need to edit to add projects.

> **Everything in this file right now is placeholder sample data**, marked `placeholder: true` and using grey placeholder images. Delete those entries as you add real projects.

Each project looks like:

```ts
{
  id: "sample-corporate-hq",
  slug: "sample-corporate-hq",
  title: "Sample Project — Corporate HQ Boardroom",
  date: "2025-11-18",
  location: "Makati City",
  description: "…",
  solutions: ["audio-visual", "professional-sound", "communication"],
  coverImage: "/images/placeholder/project-cover-1.png",
  media: [
    { type: "image", src: "/images/…", alt: "…", caption: "…" },
    { type: "video", src: "/videos/…", poster: "/images/…", caption: "…" },
  ],
  placeholder: true,
},
```

- **`slug`** — the web address: `slug: "makati-boardroom"` → `/projects/makati-boardroom`. Must be unique, lowercase, words separated by hyphens.
- **`date`** — must be written `YYYY-MM-DD` (e.g. `2025-11-18`). This is what sorting uses; the site displays it nicely ("November 2025") on its own.
- **`location`** — optional; leave the line out if you don't have one.
- **`solutions`** — a list of solution **`id`s** from `src/lib/solutions.ts`. A project can list as many as apply — that's normal and expected. This is what makes the project show up under each filter.
- **`coverImage`** — the photo on the project card.
- **`media`** — the photo/video album on the project's own page. Add as many as you like:
  - photo: `{ type: "image", src: "/images/projects/foo.jpg", alt: "Short description of the photo" }`
  - video: `{ type: "video", src: "/videos/foo.mp4", poster: "/images/projects/foo-still.jpg" }`
  - `caption` is optional on both.
- **`placeholder: true`** — shows a "Placeholder" badge. **Delete this line on real projects.**

**To add a real project:** copy a block, give it a unique `id`/`slug`, set the real `date`, write the `description`, list the `solutions` ids, then point `coverImage` and `media` at your files. It automatically appears on `/projects`, under every matching filter, and gets its own page. No component edits needed.

**Where to put project files:** photos in `public/images/projects/`, videos in `public/videos/` (create the folders if they don't exist), then reference them as `/images/projects/...` and `/videos/...`.

---

## 8. Mission & Vision ("Sound. Vision. Technology.")

**File:** `src/components/sections/MissionVision.tsx`

- Eyebrow: "Our Approach"
- Headline: "Sound. Vision. Technology."
- Paragraph below it: the mission/vision statement.

Edit any of the three directly. Keep this section short — it's designed as a big, minimal statement, not a place for a long paragraph.

---

## 9. Clients ("Government and corporate clients")

**Files:** `src/lib/clients.ts` (the list) + `public/images/clients/logos/` (the actual logo images)

Clients show as individual circular badges, grouped under "Government" and "Corporate" headings — not as one flattened picture. This works exactly like the Technology Partners section below (section 10), same process:

### To change an existing client's logo image

1. Save the new logo file into `public/images/clients/logos/`. It looks best as a square image, roughly centered, with either a transparent or plain-colored background (it doesn't need to be pre-cropped into a circle — you can, but a plain square works fine too since the badge component displays it at a small fixed size).
2. Open `src/lib/clients.ts` and find that client's line, e.g.:
   ```ts
   { name: "Samsung", file: "corp-samsung.png", group: "corporate" },
   ```
3. Change `file:` to your new filename. Save.

### To add a new client

1. Save the logo into `public/images/clients/logos/`, named like the existing ones (`gov-agencyname.png` or `corp-companyname.png`).
2. Add a new line to the list in `src/lib/clients.ts`:
   ```ts
   { name: "Client Name", file: "corp-clientname.png", group: "corporate" },
   ```
   `group` must be exactly `"government"` or `"corporate"` — that's what decides which of the two headed groups it appears under. `name` is used for the hover tooltip and accessibility text.

### To remove or reorder a client

Delete or move its `{ ... },` line in `src/lib/clients.ts`, same as any other list in this guide. Order within each group follows the order of the lines in the file.

### Where these logos came from

The original company profile PDF only had **one single flattened image** with every client logo baked into it — there was no way to show them as clean individual badges without extra work. So the 38 logos here were individually cropped out of that flattened image (at high resolution, then trimmed into circles) and identified/named by hand. The technical details of exactly how are recorded in `public/images/MANIFEST.md`, in case anyone needs to redo this later (e.g. if the client roster changes and a new source image needs to go through the same process).

---

## 10. Technology Partners (the brand-logo grid — Epson, Shure, Yamaha, etc.)

This is the one with the most moving parts, so here's the full process.

**Files involved:**
- `src/lib/partners.ts` — the list that decides which logos show and in what order
- `public/images/partners/` — the actual logo image files

### To change an existing logo's image (keep the brand, swap the picture)

1. Save your new logo file into `public/images/partners/` (PNG or JPG, ideally on a plain background — see note below).
2. Open `src/lib/partners.ts` and find that brand's line, e.g.:
   ```ts
   { name: "Epson", file: "partner-epson.png" },
   ```
3. Change `file:` to your new filename, e.g. `"partner-epson-new.png"`. Save.

### To add a new partner

1. Save the new logo image into `public/images/partners/`, named something like `partner-brandname.png`.
2. Open `src/lib/partners.ts` and add a new line anywhere in the list:
   ```ts
   { name: "Brand Name", file: "partner-brandname.png" },
   ```
   `name` is used for the hover tooltip and accessibility text — write it exactly as the brand name should read.

### To remove a partner

Delete its `{ name: ..., file: ... },` line from `src/lib/partners.ts`. (You can leave the image file in `public/images/partners/` — unused files don't show up anywhere, but you can delete it too if you want to tidy up.)

### To reorder partners

Reorder the lines in the list — they display in the same order top to bottom, left to right.

### A note on logo backgrounds

The partner logo cards always use a plain light card background, regardless of light/dark site mode (see "Colors & dark mode" below for why). That means:
- A logo with a **transparent** background looks best — it'll sit cleanly on the card.
- A logo with a **white** background baked in also works fine — it'll just blend into the card.
- A logo with a **black** (or dark) background baked in will show as a dark rectangle inside the card — still visible, just less seamless. If you have a choice of source file, prefer one with a transparent or white background.

---

## 11. Final CTA ("Let's build the right system for your space.")

**File:** `src/components/sections/FinalCTA.tsx`

- Headline and paragraph: edit the `<h2>` and `<p>` text directly.
- Button labels ("Talk to Our Team", "Explore Solutions"): edit the text inside the `<Button>` tags. The first button emails `company.email` automatically (from `site-data.ts` — see section 1); the second jumps to `#solutions`.
- Phone/Email/Address shown at the bottom: these pull automatically from `company` in `src/lib/site-data.ts` (section 1 above) — you don't need to edit them here.

---

## 12. Footer

**File:** `src/components/Footer.tsx`

- Short company blurb under the logo: the `<p className="mt-5 ...">` text.
- "Solutions" list in the footer: the `solutionLinks` array near the top of the file — plain text labels, not links to specific pages yet.
- "Navigate" list, phone, and email: pulled automatically from `navLinks` and `company` in `src/lib/site-data.ts` (section 1) — edit them there, not here.
- Copyright line: uses `company.name` automatically and today's year — no manual date updates needed.

---

## 13. The logo

**File:** `public/images/logo/a4dnt-logo.png`

Replace this file (keep the same filename, or update the `src="/images/logo/a4dnt-logo.png"` references in `src/components/Navbar.tsx` and `src/components/Footer.tsx` if you rename it).

One important technical detail: this file has been specially processed so its background is **transparent** (the original, straight from the PDF, had a solid white background baked in). The Footer displays the logo in white by filtering it (`brightness-0 invert` — turns it into a plain white silhouette), which only works correctly on a transparent-background image. If you replace this file with a new export of the logo, make sure it also has a transparent background (export as PNG with transparency from whatever tool you're using), or the Footer logo will show up as a solid white box instead of the logo shape.

---

## 14. Working with images generally

- All images live under `public/images/`. Reference them in code as `/images/...` (no `public` in the path).
- Photos are shown with `object-fit: cover`, meaning they get cropped to fill their box rather than squished — a portrait photo dropped into a wide box will get cropped on the top/bottom. Landscape/wide photos generally work best for the big cards and hero; near-square photos work well for the Solutions cards.
- After adding or replacing an image file, if the browser doesn't pick up the change (shows the old image, a blank box, or a broken image), it's almost always the Next.js image cache. Fix: stop the dev server (Ctrl+C in the terminal), delete the `.next` folder, then run `npm run dev` again.
- `public/images/raw/` is a leftover archive of every image originally extracted from the company profile PDF — it's not used by the site itself, just kept in case you want to go back and pull a different crop/version of something later. See `public/images/MANIFEST.md` for a description of what every file in there actually shows.

---

## 15. Colors & dark mode

The site has a light/dark mode toggle (top-right of the navigation bar — sun/moon icon). A few things worth knowing before touching colors:

- All the theme colors are defined in one place: `src/app/globals.css`, near the top. Light-mode values are under `:root { ... }`; dark-mode values are under `:root[data-theme="dark"] { ... }`, just below it.
- The main brand red is `--color-accent`. It's slightly different in light mode (`#D6222A`, matches the logo) vs. dark mode (`#FF5A57`, a touch brighter so it stays readable on a near-black background). Change both if you want to update the brand red everywhere at once.
- **Four sections are permanently dark and don't change with the toggle:** the Hero photo section, "Sound. Vision. Technology.", the closing "Let's build the right system..." section, and the Footer. That's a deliberate design choice (they're treated as brand statements, not reading surfaces), not a bug — if one of them looks dark while you're in light mode, that's expected.
- Every other section (About, Services, Solutions, Real Work, Clients, Partners) repaints between light and dark automatically — you don't need to do anything for new text in those sections to support both themes correctly, as long as you don't hardcode a specific color.

If you want a deeper explanation of exactly which color token to use where (e.g. building a brand-new section from scratch), see the "Theming" section in `CLAUDE.md`.

---

## Getting unstuck

- **Something looks broken after an edit:** save the file again, or refresh the browser tab. If it's an image that won't update, see the ".next cache" note in section 14.
- **You broke something and aren't sure what:** run `git diff` in the terminal to see exactly what changed since your last saved/committed version, or ask Claude Code to look at the current state of the page and fix it.
- **You want to try something bigger** (a new section, a new page, restructuring layout): just describe what you want in plain language to Claude Code — this guide covers direct hand-editing, but Claude Code can make structural changes too.
