import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type SolutionItemProps = {
  /** Solution id — links through to the pre-filtered projects list. */
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
};

export default function SolutionItem({
  id,
  number,
  title,
  description,
  image,
  featured = false,
}: SolutionItemProps) {
  return (
    <Link
      href={`/projects?solution=${id}`}
      aria-label={`${title} — view related projects`}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-canvas transition-colors duration-200 hover:border-body/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div
        className={`relative w-full overflow-hidden ${featured ? "aspect-[16/11]" : "aspect-[4/3]"}`}
      >
        <Image
          src={image}
          alt={`${title} systems installed by Audio4Design`}
          fill
          sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-[0.14em] text-muted">
              {number}
            </span>
            <h3
              className={`mt-2 font-semibold tracking-tight text-body transition-colors group-hover:text-accent ${
                featured ? "text-2xl md:text-3xl" : "text-xl"
              }`}
            >
              {title}
            </h3>
          </div>
          <ArrowUpRight
            size={20}
            className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden="true"
          />
        </div>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </Link>
  );
}
