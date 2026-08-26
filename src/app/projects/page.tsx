import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import ProjectFilters from "@/components/projects/ProjectFilters";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { DEFAULT_PROJECT_SORT, getProjects, isProjectSort } from "@/lib/projects";
import { getSolutionById, isSolutionId } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Projects | Audio4Design n Technology Corp.",
  description:
    "Audio, visual, communication, security, lighting, and life-safety systems designed, engineered, and installed by Audio4Design.",
};

export default async function ProjectsPage({ searchParams }: PageProps<"/projects">) {
  const params = await searchParams;

  const rawSolution = Array.isArray(params.solution) ? params.solution[0] : params.solution;
  const rawSort = Array.isArray(params.sort) ? params.sort[0] : params.sort;

  // Unknown values degrade gracefully: an invalid solution shows everything, an invalid
  // sort falls back to most-recent.
  const activeSolution = isSolutionId(rawSolution) ? rawSolution : undefined;
  const activeSort = isProjectSort(rawSort) ? rawSort : DEFAULT_PROJECT_SORT;

  const visibleProjects = getProjects({ solution: activeSolution, sort: activeSort });
  const activeSolutionTitle = activeSolution ? getSolutionById(activeSolution)?.title : undefined;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="section section-page-top bg-canvas">
          <div className="container">
            <Reveal>
              <SectionHeader
                as="h1"
                eyebrow="Projects"
                title="Systems designed, engineered, and installed."
                description="Browse work by solution area. A single project often spans several — an audio-visual fit-out may also carry communication, security, and life-safety scope."
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-12">
                <ProjectFilters activeSolution={activeSolution} activeSort={activeSort} />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 text-sm text-muted" aria-live="polite">
                {visibleProjects.length}{" "}
                {visibleProjects.length === 1 ? "project" : "projects"}
                {activeSolutionTitle ? ` in ${activeSolutionTitle}` : ""}
              </p>
            </Reveal>

            <div className="mt-8">
              <ProjectGrid projects={visibleProjects} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
