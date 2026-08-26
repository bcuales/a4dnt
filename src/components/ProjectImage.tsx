import Image from "next/image";

type ProjectImageProps = {
  src: string;
  label: string;
  sizes: string;
  className?: string;
};

export default function ProjectImage({ src, label, sizes, className = "" }: ProjectImageProps) {
  return (
    <div className={`group relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src={src}
        alt={`${label} — Audio4Design installation work`}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute bottom-4 left-4 text-sm font-semibold tracking-wide text-paper">
        {label}
      </span>
    </div>
  );
}
