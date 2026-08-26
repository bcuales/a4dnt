import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { formatProjectDate, type Project } from "@/lib/projects";
import { getSolutionById } from "@/lib/solutions";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-canvas transition-colors duration-200 hover:border-body/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {project.placeholder && (
          <span className="absolute left-3 top-3 rounded bg-ink/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-paper">
            Placeholder
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          {/* h2: cards sit directly beneath the page's h1 on /projects — keep the level
              contiguous so the heading outline has no gaps. */}
          <h2 className="text-lg font-semibold leading-snug tracking-tight text-body transition-colors group-hover:text-accent">
            {project.title}
          </h2>
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={13} aria-hidden="true" />
            <time dateTime={project.date}>{formatProjectDate(project.date)}</time>
          </span>
          {project.location && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} aria-hidden="true" />
              {project.location}
            </span>
          )}
        </div>

        <ul className="mt-auto flex flex-wrap gap-2 pt-1">
          {project.solutions.map((id) => {
            const solution = getSolutionById(id);
            if (!solution) return null;
            return (
              <li
                key={id}
                className="rounded border border-border px-2 py-1 text-[11px] font-medium text-muted"
              >
                {solution.title}
              </li>
            );
          })}
        </ul>
      </div>
    </Link>
  );
}
