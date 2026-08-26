import Image from "next/image";
import Link from "next/link";
import { company, navLinks } from "@/lib/site-data";
import { featuredSolutions } from "@/lib/solutions";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-paper">
      <div className="container grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr] lg:py-20">
        <div className="max-w-sm">
          <Image
            src="/images/logo/a4dnt-logo.png"
            alt="Audio4Design n Technology Corp."
            width={579}
            height={165}
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="mt-5 text-sm leading-relaxed text-paper/60">
            Design, engineering, and installation of professional audio, video,
            security, lighting, and fire/life-safety systems &mdash; {company.foundedLabel.toLowerCase()}.
          </p>
        </div>

        <div>
          <p className="eyebrow text-paper/50">Navigate</p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-paper/70 transition-colors hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-paper/50">Solutions</p>
          <ul className="mt-5 space-y-3">
            {featuredSolutions.map((solution) => (
              <li key={solution.id}>
                <Link
                  href={`/projects?solution=${solution.id}`}
                  className="text-sm text-paper/70 transition-colors hover:text-paper"
                >
                  {solution.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container flex flex-col gap-6 border-t border-paper/10 py-8 text-sm text-paper/60 md:flex-row md:items-center md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
          <a href={`tel:${company.phone.split(" / ")[0]}`} className="hover:text-paper">
            {company.phone}
          </a>
          <a href={`mailto:${company.email}`} className="hover:text-paper">
            {company.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
