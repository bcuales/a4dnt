import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { company } from "@/lib/site-data";

export default function FinalCTA() {
  return (
    <section id="contact" className="section bg-ink text-paper">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2
            className="font-semibold leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4.8vw, 3.25rem)" }}
          >
            Let&rsquo;s build the right system for your space.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-paper/65">
            Talk to our team about your audio, visual, communication, security,
            lighting, or technical system requirements.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href={`mailto:${company.email}`} variant="accent">
              Talk to Our Team
            </Button>
            <Button href="#solutions" variant="ghost" showArrow={false}>
              Explore Solutions
            </Button>
          </div>

          <div className="mx-auto mt-14 grid max-w-xl gap-6 border-t border-paper/10 pt-10 text-left sm:grid-cols-3">
            <div>
              <p className="eyebrow">Phone</p>
              <p className="mt-2 text-sm text-paper/75">{company.phone}</p>
            </div>
            <div>
              <p className="eyebrow">Email</p>
              <p className="mt-2 text-sm text-paper/75">{company.email}</p>
            </div>
            <div>
              <p className="eyebrow">Address</p>
              <p className="mt-2 text-sm leading-relaxed text-paper/75">
                {company.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
