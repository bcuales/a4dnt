import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { formatProjectDate, getProjectBySlug, projects } from "@/lib/projects";
import { getSolutionById } from "@/lib/solutions";

/** Pre-render every project at build time. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found | Audio4Design n Technology Corp." };

  return {
    title: `${project.title} | Audio4Design n Technology Corp.`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="section section-page-top bg-canvas">
          <div className="container">
            <Reveal>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                <ArrowLeft size={15} aria-hidden="true" />
                All projects
              </Link>

              {project.placeholder && (
                <p className="mt-6 rounded-md border border-border bg-canvas-alt px-4 py-3 text-sm text-muted">
                  <span className="font-semibold text-body">Placeholder project.</span> Sample
                  content used while the real project records and media are being prepared.
                </p>
              )}

              <h1
                className="mt-6 max-w-3xl font-semibold leading-[1.1] tracking-tight text-body"
                style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
              >
                {project.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={15} aria-hidden="true" />
                  <time dateTime={project.date}>{formatProjectDate(project.date)}</time>
                </span>
                {project.location && (
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={15} aria-hidden="true" />
                    {project.location}
                  </span>
                )}
              </div>

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-8">
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  Solution areas
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.solutions.map((id) => {
                    const solution = getSolutionById(id);
                    if (!solution) return null;
                    return (
                      <li key={id}>
                        <Link
                          href={`/projects?solution=${id}`}
                          className="inline-flex rounded-md border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-body/25 hover:text-body"
                        >
                          {solution.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-14">
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  Gallery
                </h2>
                <div className="mt-6">
                  <ProjectGallery media={project.media} />
                </div>
              </div>
            </Reveal>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
