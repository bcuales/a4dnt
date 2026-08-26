# Audio4Design n Technology Corp. — Website

Marketing site for Audio4Design n Technology Corp., a Philippines-based systems integrator that designs, engineers, and installs professional audio, video, communication, security, lighting, and fire/life-safety systems.

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

---

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

| Script | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build (also runs a full typecheck) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

---

## Documentation

| File | Audience | Contents |
|---|---|---|
| [`CLAUDE.md`](./CLAUDE.md) | Developers / AI assistants | **Read this first.** Verified company facts, design system and tokens, theming rules, content architecture, routing, and project conventions. |
| [`EDITING-GUIDE.md`](./EDITING-GUIDE.md) | Non-developers | Plain-English walkthrough for changing content — contact details, copy, images, client/partner logos, projects, colors. |
| [`public/images/MANIFEST.md`](./public/images/MANIFEST.md) | Anyone touching images | What every curated image is, and how the client logos and company logo were derived from the source PDF. |

---

## Routes

| Route | Description |
|---|---|
| `/` | Landing page |
| `/projects` | All projects, most recent first |
| `/projects?solution=<id>` | Projects filtered to one solution area |
| `/projects?sort=oldest` | Oldest first |
| `/projects/<slug>` | Project detail page with photo/video gallery |

Filter and sort state lives entirely in the URL and is resolved server-side, so views are shareable and browser navigation works without client-side state.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              Root layout, fonts, theme bootstrap
│   ├── page.tsx                Landing page
│   ├── globals.css             Design tokens + shared utility classes
│   └── projects/
│       ├── page.tsx            Projects list (filter + sort)
│       └── [slug]/page.tsx     Project detail
├── components/
│   ├── sections/               Landing-page sections
│   ├── projects/               ProjectCard, ProjectGrid, ProjectFilters, ProjectGallery
│   └── …                       Navbar, Footer, Button, SectionHeader, Reveal, etc.
└── lib/
    ├── solutions.ts            Solution catalogue (single source of truth)
    ├── projects.ts             Projects + media (single source of truth)
    ├── clients.ts              Client logos
    ├── partners.ts             Technology partner logos
    └── site-data.ts            Company info, nav links, core capabilities
```

**Content lives in `src/lib/`, never in components.** Adding a solution, project, client, or partner means editing one data file — no component changes required. See the content-workflow section of `CLAUDE.md`.

---

## Content architecture

Projects reference solution areas by **stable ID**, and a project can belong to several:

```
solutions.ts ──id──► projects.ts
     │                    │
     ├─ featured:true ──► homepage grid + footer links
     └─ all solutions ──► /projects filter chips
```

The solutions array is declared `as const`, which derives a literal union of valid IDs — a typo in a project's `solutions` array is a compile error rather than a silently empty filter.

> **Note:** the projects currently in `src/lib/projects.ts` are clearly-marked placeholders using neutral placeholder imagery. Real project records and media are pending. Delete them as real projects are added.

---

## Design system

- **Palette:** near-black / warm off-white / neutral gray, with the Audio4Design red reserved as an accent (~90% neutral, 10% accent).
- **Type:** Inter throughout, fluid `clamp()` sizing.
- **Light and dark mode:** toggle in the navbar, remembered per visitor, defaults to the OS preference, and applied before first paint so there's no flash. Four "statement" sections (hero, mission/vision, final CTA, footer) are intentionally dark in both themes.
- **Motion:** subtle scroll reveals and hover transitions, fully disabled under `prefers-reduced-motion`.

Tokens are defined once in `src/app/globals.css`. See the theming section of `CLAUDE.md` before introducing a new color.

---

## Imagery

All photography, logos, and brand marks were extracted from the official company profile PDF and curated — see `public/images/MANIFEST.md`. `public/images/raw/` is an untouched archive of the original extraction; it is not used by the site and exists only as a derivation source.
