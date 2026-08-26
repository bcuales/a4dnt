import Image from "next/image";

type ClientBadgeProps = {
  name: string;
  file: string;
};

export default function ClientBadge({ name, file }: ClientBadgeProps) {
  return (
    <div
      className="group relative aspect-square w-full max-w-[64px] shrink-0 transition-transform duration-200 hover:scale-110 sm:max-w-[76px] lg:max-w-[84px]"
      title={name}
    >
      <Image
        src={`/images/clients/logos/${file}`}
        alt={name}
        fill
        sizes="84px"
        className="object-contain drop-shadow-sm"
      />
    </div>
  );
}
