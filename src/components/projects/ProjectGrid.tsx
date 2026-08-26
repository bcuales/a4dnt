import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/projects/ProjectCard";
import type { Project } from "@/lib/projects";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border px-6 py-16 text-center">
        <p className="text-base font-medium text-body">No projects in this solution area yet.</p>
        <p className="mt-2 text-sm text-muted">
          Try another filter, or view all projects.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <Reveal key={project.id} delay={(i % 3) * 80}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
