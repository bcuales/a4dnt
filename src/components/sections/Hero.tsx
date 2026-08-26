import Image from "next/image";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0">
        <Image
          src="/images/photos/av-conference-room.jpg"
          alt="Boardroom fitted with an Audio4Design conference and AV system"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
      </div>

      <div className="container relative flex min-h-[88vh] flex-col justify-end gap-10 pb-20 pt-40 md:min-h-[92vh] md:pb-28 md:pt-48">
        <div className="max-w-2xl">
          <p className="eyebrow">Audio4Design n Technology Corp. &mdash; Since 2003</p>
          <h1
            className="mt-5 font-semibold leading-[1.04] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Professional Audio &amp; Visual Solutions
          </h1>
          <p className="mt-6 text-lg font-medium text-paper/80">
            Design. Engineering. Installation. Maintenance.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/60">
            We design, engineer, and install professional audio, video, security,
            lighting, and fire/life-safety systems for spaces that demand
            precision &mdash; from boardrooms and campuses to critical infrastructure.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#solutions" variant="accent">
              Explore Our Solutions
            </Button>
            <Button href="#contact" variant="ghost" showArrow={false}>
              Talk to Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
