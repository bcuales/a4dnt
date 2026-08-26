import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  /**
   * Heading level. Defaults to `h2` (a section inside a page that already has an `h1`).
   * Pass `h1` when this header IS the page's main heading — e.g. the top of /projects.
   * Visual size is unchanged either way; this only affects semantics.
   */
  as?: "h1" | "h2";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
  as: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto" : "text-left"} max-w-2xl ${className}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <Heading
        className={`mt-4 font-semibold leading-[1.08] tracking-tight ${
          light ? "text-paper" : "text-body"
        }`}
        style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)" }}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed ${light ? "text-paper/70" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
