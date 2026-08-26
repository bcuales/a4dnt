import Link from "next/link";
import { solutions } from "@/lib/solutions";
import { getProjectCountsBySolution, type ProjectSort } from "@/lib/projects";

type ProjectFiltersProps = {
  /** Currently active solution id, or undefined for "All". */
  activeSolution?: string;
  activeSort: ProjectSort;
};

/**
 * Filter + sort controls, rendered as plain links that drive the URL query string. State lives
 * in the URL (so views are shareable and back/forward works) and the page re-renders on the
 * server — no client-side state needed.
 *
 * Filters are derived from src/lib/solutions.ts: adding a solution there automatically adds a
 * filter here. Never hardcode solution names in this file.
 */
export default function ProjectFilters({ activeSolution, activeSort }: ProjectFiltersProps) {
  const counts = getProjectCountsBySolution();

  const chip =
    "inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const active = "border-accent bg-accent text-accent-ink";
  const idle = "border-border text-muted hover:border-body/25 hover:text-body";

  const sortHref = (sort: ProjectSort) => {
    const params = new URLSearchParams();
    if (activeSolution) params.set("solution", activeSolution);
    if (sort !== "recent") params.set("sort", sort);
    const qs = params.toString();
    return qs ? `/projects?${qs}` : "/projects";
  };

  const solutionHref = (id?: string) => {
    const params = new URLSearchParams();
    if (id) params.set("solution", id);
    if (activeSort !== "recent") params.set("sort", activeSort);
    const qs = params.toString();
    return qs ? `/projects?${qs}` : "/projects";
  };

  return (
    <div className="flex flex-col gap-6 border-y border-border py-6">
      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          Filter by solution
        </span>
        <ul className="flex flex-wrap gap-2">
          <li>
            <Link
              href={solutionHref()}
              aria-current={!activeSolution ? "page" : undefined}
              className={`${chip} ${!activeSolution ? active : idle}`}
            >
              All
            </Link>
          </li>
          {solutions.map((solution) => {
            const isActive = activeSolution === solution.id;
            return (
              <li key={solution.id}>
                <Link
                  href={solutionHref(solution.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`${chip} ${isActive ? active : idle}`}
                >
                  {solution.title}
                  <span className={isActive ? "text-accent-ink/70" : "text-muted/70"}>
                    {counts[solution.id] ?? 0}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          Sort
        </span>
        <ul className="flex flex-wrap gap-2">
          {([
            { value: "recent", label: "Most Recent" },
            { value: "oldest", label: "Oldest" },
          ] as const).map((option) => {
            const isActive = activeSort === option.value;
            return (
              <li key={option.value}>
                <Link
                  href={sortHref(option.value)}
                  aria-current={isActive ? "page" : undefined}
                  className={`${chip} ${isActive ? active : idle}`}
                >
                  {option.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
