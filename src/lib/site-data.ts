/**
 * Global site/company information used across every page.
 *
 * Content collections live in their own files — see src/lib/solutions.ts,
 * src/lib/projects.ts, src/lib/clients.ts and src/lib/partners.ts. Keep this file for
 * genuinely site-wide data only.
 */

export const company = {
  name: "Audio4Design n Technology Corp.",
  shortName: "Audio4Design",
  foundedLabel: "Since 2003",
  phone: "0933-4634994 / 8812-2538",
  email: "biancacuales@a4dnt.com",
  website: "www.audio4design.com",
  address: [
    "2nd Flr., Unit 209 Cityland Pasong Tamo",
    "#6264 Calle Estacion Pio, Del Pilar",
    "Makati City 1230",
  ],
};

// Hrefs are absolute (leading "/") so the shared Navbar/Footer work from any route, not just
// the homepage — "#about" alone would be a dead link on /projects.
export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/#clients" },
  { label: "Contact", href: "/#contact" },
];

export const capabilities = [
  {
    number: "01",
    title: "Engineering",
    description:
      "We engineer innovative audio and video solutions tailored to specific needs, using advanced technologies and industry expertise.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create bespoke audiovisual solutions that integrate with the space, focused on usability and functionality.",
  },
  {
    number: "03",
    title: "Installation",
    description:
      "Certified technicians install audiovisual systems with precision and efficiency, including integration support and onsite calibration.",
  },
  {
    number: "04",
    title: "Maintenance",
    description:
      "Proactive maintenance programs and dedicated technical support for long-term system performance and reliability.",
  },
];
