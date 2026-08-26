import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import ProjectImage from "@/components/ProjectImage";

export default function RealWork() {
  return (
    <section id="projects" className="section bg-canvas-alt">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Real Work"
            title="Systems installed and implemented by Audio4Design."
            description="A look at recent boardroom, communication, security, and life-safety installations across client sites."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 lg:h-[640px] lg:grid-cols-2 lg:grid-rows-2">
          <Reveal className="relative aspect-[4/3] lg:aspect-auto lg:col-span-1 lg:row-span-2">
            <ProjectImage
              src="/images/photos/av-conference-room.jpg"
              label="Audio Visual System"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full"
            />
          </Reveal>

          <Reveal delay={90} className="relative aspect-[4/3] lg:aspect-auto">
            <ProjectImage
              src="/images/photos/ceiling-speaker-install.jpg"
              label="Ceiling Speaker"
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="h-full w-full"
            />
          </Reveal>

          <Reveal delay={180} className="relative aspect-[4/3] lg:aspect-auto">
            <ProjectImage
              src="/images/photos/fiber-termination-scissor-lift.jpg"
              label="IDF / Fiber Termination"
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="h-full w-full"
            />
          </Reveal>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Reveal delay={90} className="relative aspect-[16/9]">
            <ProjectImage
              src="/images/photos/fire-alarm-scaffolding-install.jpg"
              label="Fire Alarm Installation"
              sizes="(min-width: 640px) 50vw, 100vw"
              className="h-full w-full"
            />
          </Reveal>
          <Reveal delay={180} className="relative aspect-[16/9]">
            <ProjectImage
              src="/images/photos/video-conference-logitech.jpg"
              label="Video Conference System"
              sizes="(min-width: 640px) 50vw, 100vw"
              className="h-full w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
