/**
 * Single source of truth for Audio4Design's solution areas.
 *
 * This is the FULL catalogue, not just what the homepage shows. The homepage renders only
 * the entries with `featured: true` (see `featuredSolutions` below) — flip that flag to add
 * or remove a card there without touching any component.
 *
 * Projects reference these by `id` (see src/lib/projects.ts). Because the array is declared
 * `as const`, `SolutionId` is a literal union of the ids below, so a typo in a project's
 * `solutions` array is a compile error rather than a silently-missing filter.
 */

export type Solution = {
  /** Stable identifier. Projects and the ?solution= URL param reference this. Don't rename casually. */
  id: string;
  /** URL-safe name. Currently always identical to `id`; kept separate so a slug can change without breaking project references. */
  slug: string;
  /** Display-only ordinal shown on the card ("01", "02", …). */
  number: string;
  title: string;
  description: string;
  /** Card image. Path under /public. */
  image: string;
  /** Whether this appears in the homepage "Selected Solution Areas" grid. */
  featured: boolean;
};

export const solutions = [
  {
    id: "audio-visual",
    slug: "audio-visual",
    number: "01",
    title: "Audio Visual",
    description:
      "Professional AV, projection, conferencing, presentation and multimedia systems.",
    image: "/images/photos/av-conference-room.jpg",
    featured: true,
  },
  {
    id: "professional-sound",
    slug: "professional-sound",
    number: "02",
    title: "Professional Sound",
    description: "Professional sound, PA, paging and background music systems.",
    image: "/images/photos/pa-system-ceiling-fitout.jpg",
    featured: true,
  },
  {
    id: "communication",
    slug: "communication",
    number: "03",
    title: "Communication",
    description: "Intercom, PABX, conference and discussion systems.",
    image: "/images/photos/pabx-rack-termination.jpg",
    featured: true,
  },
  {
    id: "security",
    slug: "security",
    number: "04",
    title: "Security",
    description: "CCTV, surveillance, access and related security systems.",
    image: "/images/photos/cctv-rack-install-hardhat.jpg",
    featured: true,
  },
  {
    id: "lighting-led",
    slug: "lighting-led",
    number: "05",
    title: "Lighting & LED",
    description: "Lighting systems, LED technology, display boards and signage.",
    image: "/images/photos/products/product-stage-light.jpg",
    featured: true,
  },
  {
    id: "safety-infrastructure",
    slug: "safety-infrastructure",
    number: "06",
    title: "Safety & Infrastructure",
    description:
      "Fire detection, alarm, electrical and supporting infrastructure systems.",
    image: "/images/photos/fire-alarm-scaffolding-install.jpg",
    featured: true,
  },

  // --- Catalogue entries not currently featured on the homepage -------------------------
  // These are real Audio4Design capabilities (see the full capability list in CLAUDE.md).
  // They're filterable on /projects and become homepage cards the moment `featured` is true.
  {
    id: "speech-laboratory",
    slug: "speech-laboratory",
    number: "07",
    title: "Speech Laboratory",
    description:
      "Language and speech laboratory systems for schools and training facilities.",
    image: "/images/photos/products/product-speech-lab.jpg",
    featured: false,
  },
  {
    id: "portable-pa",
    slug: "portable-pa",
    number: "08",
    title: "Portable PA",
    description:
      "Portable public address systems for mobile, temporary and event use.",
    image: "/images/photos/products/product-portable-pa.jpg",
    featured: false,
  },
] as const satisfies readonly Solution[];

/** Literal union of every solution id, derived from the catalogue above. */
export type SolutionId = (typeof solutions)[number]["id"];

/** Solutions shown on the homepage grid. Derived — never maintain a second list. */
export const featuredSolutions = solutions.filter((solution) => solution.featured);

export function getSolutionById(id: string) {
  return solutions.find((solution) => solution.id === id);
}

/** Runtime guard for untrusted input (e.g. the ?solution= query param). */
export function isSolutionId(value: string | undefined): value is SolutionId {
  return value !== undefined && solutions.some((solution) => solution.id === value);
}
