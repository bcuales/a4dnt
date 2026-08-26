"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-data";
import ThemeToggle from "@/components/ThemeToggle";

type NavbarProps = {
  /**
   * Set on pages whose first section is a full-bleed dark hero (the homepage). The navbar
   * then starts transparent and overlays that hero. Pages with a normal light background
   * must leave this false, or the light nav text would sit invisibly on a light page.
   */
  overHero?: boolean;
};

export default function Navbar({ overHero = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape, and close if the viewport grows past the `md` breakpoint where the
  // mobile menu is hidden by CSS — otherwise it stays "open" with the body scroll locked
  // and the page becomes unscrollable with no visible way to release it.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onBreakpointChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", onBreakpointChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onBreakpointChange);
    };
  }, [open]);

  // While transparent, the navbar sits directly on top of the Hero photo — always a fixed dark
  // background regardless of site theme — so it needs light (fixed "paper") text there. Once
  // solid it gets a theme-reactive background and needs theme-reactive text instead.
  // Pages without a dark hero (`overHero` false) are solid from the start.
  const solid = scrolled || open || !overHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-canvas/95 backdrop-blur border-b border-border shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container flex h-18 items-center justify-between py-4" aria-label="Primary">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo/a4dnt-logo.png"
            alt="Audio4Design n Technology Corp."
            width={579}
            height={165}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  solid ? "text-body/80" : "text-paper/90"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle
            className={solid ? "text-body/70 hover:bg-canvas-alt hover:text-accent" : "text-paper/90 hover:bg-paper/10 hover:text-accent"}
          />
          <Link
            href="/#contact"
            className={`rounded-md px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-ink ${
              solid ? "bg-body text-canvas" : "bg-paper text-ink"
            }`}
          >
            Talk to Us
          </Link>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle
            className={solid ? "text-body/70 hover:bg-canvas-alt hover:text-accent" : "text-paper/90 hover:bg-paper/10 hover:text-accent"}
          />
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-md p-2 ${solid ? "text-body" : "text-paper"}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-border bg-canvas transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="container flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-3 text-base font-medium text-body transition-colors hover:bg-canvas-alt hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-body px-4 py-3 text-center text-sm font-semibold text-canvas"
            >
              Talk to Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
