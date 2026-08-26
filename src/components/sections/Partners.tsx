import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import PartnerLogo from "@/components/PartnerLogo";
import { partners } from "@/lib/partners";

export default function Partners() {
  return (
    <section className="section bg-canvas-alt">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Technology Partners"
            title="Built on a professional-grade technology ecosystem."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {partners.map((partner) => (
              <PartnerLogo key={partner.name} {...partner} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
