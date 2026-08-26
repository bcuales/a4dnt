import Reveal from "@/components/Reveal";

export default function MissionVision() {
  return (
    <section className="section bg-ink text-paper">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Our Approach</p>
          <h2
            className="mt-5 font-semibold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)" }}
          >
            Sound. Vision. Technology.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-paper/65">
            Our mission is to transform sound and vision experiences through
            innovative solutions and exceptional service &mdash; delivering
            tailored audiovisual systems that exceed expectations. Our vision is
            to be the leading provider of pro-audio and visual solutions in the
            Philippines, setting the standard for innovation, quality, and
            customer satisfaction.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
