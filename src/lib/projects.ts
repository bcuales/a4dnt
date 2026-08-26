import type { SolutionId } from "@/lib/solutions";

/**
 * Single source of truth for projects.
 *
 * Projects reference solution areas by stable id (see src/lib/solutions.ts) via the
 * `solutions` array — a project can belong to several. Never store solution *names* here;
 * the id is the only link, so renaming a solution's title never breaks a project.
 *
 * ⚠️ EVERY ENTRY BELOW IS PLACEHOLDER DATA. Real projects and media are not ready yet.
 * Placeholders are marked `placeholder: true`, titled "Sample Project …", and use neutral
 * generated images from /images/placeholder/ so they can't be mistaken for real client work.
 * Delete them as real projects are added — nothing in the UI depends on them existing.
 */

export type ProjectMedia =
  | {
      type: "image";
      /** Path under /public. */
      src: string;
      /** Required for images — describes the image for screen readers. */
      alt: string;
      caption?: string;
    }
  | {
      type: "video";
      /** Path under /public (e.g. an .mp4). Loaded only when the viewer presses play. */
      src: string;
      /** Still frame shown before playback. Strongly recommended. */
      poster?: string;
      caption?: string;
    };

export type Project = {
  /** Stable identifier, independent of the URL. */
  id: string;
  /** URL segment: /projects/<slug>. Must be unique. */
  slug: string;
  title: string;
  /** ISO 8601 (YYYY-MM-DD). Used for sorting — never sort on a formatted display string. */
  date: string;
  location?: string;
  description: string;
  /** Solution areas this project involved. Values must be ids from src/lib/solutions.ts. */
  solutions: SolutionId[];
  /** Card/hero image. Path under /public. */
  coverImage: string;
  /** Gallery album — photos and videos, shown in order. */
  media: ProjectMedia[];
  /** Marks temporary sample data. Real projects should omit this. */
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    id: "sample-corporate-hq",
    slug: "sample-corporate-hq",
    title: "Sample Project — Corporate HQ Boardroom",
    date: "2025-11-18",
    location: "Makati City",
    description:
      "Placeholder entry demonstrating a project that spans several solution areas. Replace with a real project write-up.",
    solutions: ["audio-visual", "professional-sound", "communication"],
    coverImage: "/images/placeholder/project-cover-1.png",
    media: [
      {
        type: "image",
        src: "/images/placeholder/project-media-1.png",
        alt: "Placeholder project image",
        caption: "Placeholder caption",
      },
      {
        type: "image",
        src: "/images/placeholder/project-media-2.png",
        alt: "Placeholder project image",
      },
      {
        type: "video",
        src: "/videos/placeholder-walkthrough.mp4",
        poster: "/images/placeholder/project-video-poster.png",
        caption: "Placeholder video — file not yet added",
      },
    ],
    placeholder: true,
  },
  {
    id: "sample-campus-security",
    slug: "sample-campus-security",
    title: "Sample Project — Campus Security Rollout",
    date: "2025-08-02",
    location: "Quezon City",
    description:
      "Placeholder entry demonstrating a security-led project with a supporting infrastructure scope.",
    solutions: ["security", "safety-infrastructure"],
    coverImage: "/images/placeholder/project-cover-2.png",
    media: [
      {
        type: "image",
        src: "/images/placeholder/project-media-3.png",
        alt: "Placeholder project image",
      },
      {
        type: "image",
        src: "/images/placeholder/project-media-4.png",
        alt: "Placeholder project image",
        caption: "Placeholder caption",
      },
    ],
    placeholder: true,
  },
  {
    id: "sample-auditorium-lighting",
    slug: "sample-auditorium-lighting",
    title: "Sample Project — Auditorium Lighting & Display",
    date: "2025-03-27",
    location: "Pasig City",
    description:
      "Placeholder entry demonstrating a lighting and LED display scope with an audio-visual component.",
    solutions: ["lighting-led", "audio-visual"],
    coverImage: "/images/placeholder/project-cover-3.png",
    media: [
      {
        type: "image",
        src: "/images/placeholder/project-media-5.png",
        alt: "Placeholder project image",
      },
    ],
    placeholder: true,
  },
  {
    id: "sample-training-facility",
    slug: "sample-training-facility",
    title: "Sample Project — Training Facility Speech Lab",
    date: "2024-10-09",
    description:
      "Placeholder entry demonstrating a project with no location recorded, and a solution area that is not featured on the homepage.",
    solutions: ["speech-laboratory", "professional-sound"],
    coverImage: "/images/placeholder/project-cover-4.png",
    media: [
      {
        type: "image",
        src: "/images/placeholder/project-media-6.png",
        alt: "Placeholder project image",
      },
    ],
    placeholder: true,
  },
];

export type ProjectSort = "recent" | "oldest";

export const DEFAULT_PROJECT_SORT: ProjectSort = "recent";

export function isProjectSort(value: string | undefined): value is ProjectSort {
  return value === "recent" || value === "oldest";
}

/**
 * Filter by solution id and sort by real date. Both arguments are tolerant of junk input:
 * an unknown solution id yields all projects, an unknown sort falls back to most-recent.
 */
export function getProjects({
  solution,
  sort = DEFAULT_PROJECT_SORT,
}: { solution?: string; sort?: ProjectSort } = {}): Project[] {
  const filtered = solution
    ? projects.filter((project) => (project.solutions as readonly string[]).includes(solution))
    : [...projects];

  return filtered.sort((a, b) => {
    const diff = new Date(a.date).getTime() - new Date(b.date).getTime();
    return sort === "oldest" ? diff : -diff;
  });
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

/** Number of projects per solution id — used to label/suppress empty filters. */
export function getProjectCountsBySolution(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const project of projects) {
    for (const id of project.solutions) {
      counts[id] = (counts[id] ?? 0) + 1;
    }
  }
  return counts;
}

/** Consistent, locale-stable date rendering. Display only — never sort on this. */
export function formatProjectDate(date: string): string {
  return new Date(date).toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  });
}
