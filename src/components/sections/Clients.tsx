import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import ClientBadge from "@/components/ClientBadge";
import { clients } from "@/lib/clients";

const government = clients.filter((c) => c.group === "government");
const corporate = clients.filter((c) => c.group === "corporate");

export default function Clients() {
  return (
    <section id="clients" className="section bg-canvas">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Trusted By"
            title="Government and corporate clients."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-16 space-y-14">
          <Reveal delay={80}>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Government
            </p>
            <div className="mx-auto mt-7 flex max-w-4xl flex-wrap justify-center gap-x-5 gap-y-7 sm:gap-x-7 sm:gap-y-8">
              {government.map((client) => (
                <ClientBadge key={client.name} name={client.name} file={client.file} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Corporate
            </p>
            <div className="mx-auto mt-7 flex max-w-4xl flex-wrap justify-center gap-x-5 gap-y-7 sm:gap-x-7 sm:gap-y-8">
              {corporate.map((client) => (
                <ClientBadge key={client.name} name={client.name} file={client.file} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
