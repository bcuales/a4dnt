import Reveal from "@/components/Reveal";
import { capabilities } from "@/lib/site-data";

export default function Capabilities() {
  return (
    <section id="services" className="section bg-canvas-alt">
      <div className="container">
        <Reveal>
          <p className="eyebrow">What We Do</p>
          <h2
            className="mt-5 max-w-xl font-semibold leading-[1.1] tracking-tight text-body"
            style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)" }}
          >
            Four disciplines, one integrated process.
          </h2>
        </Reveal>

        <ul className="mt-14 border-t border-border">
          {capabilities.map((item, i) => (
            <Reveal as="li" key={item.number} delay={i * 80}>
              <div className="group grid grid-cols-1 gap-3 border-b border-border py-8 transition-colors md:grid-cols-[auto_1fr_2fr] md:items-baseline md:gap-10 md:py-10">
                <span className="text-sm font-semibold text-muted transition-colors group-hover:text-accent">
                  {item.number}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight text-body transition-colors group-hover:text-accent md:text-3xl">
                  {item.title}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
