import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "accent" | "secondary" | "ghost";
  showArrow?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

// "primary" and "secondary" are theme-reactive (bg-body/bg-canvas flip with light/dark mode) —
// use them on regular content sections. "accent" and "ghost" are pinned to the fixed ink/paper
// brand tones on purpose — only use them inside the permanently-dark sections (Hero, Final CTA),
// which don't change with the theme toggle. See CLAUDE.md ("Theming").
const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-body text-canvas hover:bg-accent hover:text-accent-ink",
  accent: "bg-accent text-accent-ink hover:bg-paper hover:text-ink",
  secondary: "border border-body/20 text-body hover:border-body hover:bg-body hover:text-canvas",
  ghost: "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

export default function Button({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {showArrow && <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />}
    </Link>
  );
}
