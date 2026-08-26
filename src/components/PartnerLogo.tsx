import Image from "next/image";

type PartnerLogoProps = {
  name: string;
  file: string;
};

export default function PartnerLogo({ name, file }: PartnerLogoProps) {
  return (
    // Fixed light card, not theme-reactive: the source brand logos have inconsistent baked-in
    // backgrounds (some white, some black) with no transparency, so a stable light card is the
    // only presentation that keeps every logo legible in both themes — see CLAUDE.md ("Theming").
    <div
      className="flex h-20 items-center justify-center rounded-lg border border-border bg-paper px-5 transition-colors duration-200 hover:border-ink/25"
      title={name}
    >
      <div className="relative h-10 w-full">
        <Image
          src={`/images/partners/${file}`}
          alt={`${name} — technology partner`}
          fill
          sizes="140px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
