import Reveal from "@/components/Reveal";
import SolutionItem from "@/components/SolutionItem";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { featuredSolutions, solutions } from "@/lib/solutions";

export default function Solutions() {
  // Derived from the central catalogue — never a second hardcoded list here.
  const [featured, ...rest] = featuredSolutions;
  const hasMoreThanFeatured = solutions.length > featuredSolutions.length;

  return (
    <section id="solutions" className="section bg-canvas">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Selected Solution Areas"
            title="A broad technical capability, organized around real needs."
            description="From presentation and sound to security and life-safety, Audio4Design brings each discipline together under one engineering and installation process. The areas below are a selection — our full scope covers a considerably wider range of systems."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <SolutionItem {...featured} featured />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.slice(0, 2).map((solution, i) => (
              <Reveal key={solution.id} delay={(i + 1) * 90}>
                <SolutionItem {...solution} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {rest.slice(2).map((solution, i) => (
            <Reveal key={solution.id} delay={(i + 3) * 90}>
              <SolutionItem {...solution} />
            </Reveal>
          ))}
        </div>

        {hasMoreThanFeatured && (
          <Reveal delay={120}>
            <div className="mt-12 flex justify-center">
              <Button href="/projects" variant="secondary">
                Browse projects by solution
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
