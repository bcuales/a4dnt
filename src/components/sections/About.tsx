import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

export default function About() {
  return (
    <section id="about" className="section bg-canvas">
      <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">About Audio4Design</p>
          <h2
            className="mt-5 font-semibold leading-[1.1] tracking-tight text-body"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3.25rem)" }}
          >
            Technology designed around the way people work, communicate, and
            experience spaces.
          </h2>
        </Reveal>

        <Reveal delay={120} className="flex flex-col justify-end gap-8">
          <p className="text-base leading-relaxed text-muted">
            Audio4Design n Technology Corp. specializes in the design,
            engineering, and installation of professional audio, video, and
            related equipment for a wide range of applications &mdash; from
            boardrooms and campuses to security, lighting, and fire/life-safety
            infrastructure. Operating since 2003, the company works across
            government and corporate sectors throughout the Philippines.
          </p>
          <div>
            <Button href="#services" variant="secondary">
              Our Services
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
