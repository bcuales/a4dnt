export type ClientGroup = "government" | "corporate";

export type Client = {
  name: string;
  file: string;
  group: ClientGroup;
};

// Individually cropped from the single collage image in the source company profile PDF (see
// public/images/MANIFEST.md for how — the PDF itself only ever had one flattened image, no
// separated logo files). Order within each group matches the source collage's reading order.
export const clients: Client[] = [
  { name: "Philippine Air Force", file: "gov-philippine-air-force.png", group: "government" },
  { name: "Bangko Sentral ng Pilipinas", file: "gov-bangko-sentral.png", group: "government" },
  { name: "Bureau of Customs", file: "gov-bureau-of-customs.png", group: "government" },
  { name: "Department of Health", file: "gov-department-of-health.png", group: "government" },
  { name: "Bureau of Internal Revenue", file: "gov-bureau-of-internal-revenue.png", group: "government" },
  { name: "Department of Public Works and Highways", file: "gov-dpwh.png", group: "government" },
  { name: "Office of the President (Malacañang)", file: "gov-office-of-the-president.png", group: "government" },
  { name: "Manila International Airport Authority", file: "gov-miaa.png", group: "government" },
  { name: "Philippine Drug Enforcement Agency", file: "gov-pdea.png", group: "government" },
  { name: "Philippine Statistical Research and Training Institute", file: "gov-psrti.png", group: "government" },
  { name: "Senate of the Philippines", file: "gov-senate.png", group: "government" },
  { name: "Department of Information and Communications Technology", file: "gov-dict.png", group: "government" },
  { name: "Supreme Court of the Philippines", file: "gov-supreme-court.png", group: "government" },
  { name: "U.S. Embassy in the Philippines", file: "gov-us-embassy.png", group: "government" },
  { name: "Commission on Audit", file: "gov-coa.png", group: "government" },
  { name: "Pag-IBIG Fund", file: "gov-pagibig.png", group: "government" },
  { name: "Department of Agriculture", file: "gov-department-of-agriculture.png", group: "government" },
  { name: "Philippine Charity Sweepstakes Office", file: "gov-pcso.png", group: "government" },
  { name: "Department of Environment and Natural Resources", file: "gov-denr.png", group: "government" },

  { name: "Globe", file: "corp-globe.png", group: "corporate" },
  { name: "Samsung", file: "corp-samsung.png", group: "corporate" },
  { name: "Uratex", file: "corp-uratex.png", group: "corporate" },
  { name: "AXA", file: "corp-axa.png", group: "corporate" },
  { name: "Fitness First", file: "corp-fitness-first.png", group: "corporate" },
  { name: "Dairy Queen", file: "corp-dairy-queen.png", group: "corporate" },
  { name: "De La Salle University Manila", file: "corp-dlsu.png", group: "corporate" },
  { name: "Security Bank", file: "corp-security-bank.png", group: "corporate" },
  { name: "Metrobank", file: "corp-metrobank.png", group: "corporate" },
  { name: "PBCOM", file: "corp-pbcom.png", group: "corporate" },
  { name: "St. Luke's Medical Center", file: "corp-st-lukes.png", group: "corporate" },
  { name: "WalterMart Supermarket", file: "corp-waltermart.png", group: "corporate" },
  { name: "Hyatt", file: "corp-hyatt.png", group: "corporate" },
  { name: "Smart", file: "corp-smart.png", group: "corporate" },
  { name: "Wyeth", file: "corp-wyeth.png", group: "corporate" },
  { name: "Veterans Memorial Medical Center", file: "corp-vmmc.png", group: "corporate" },
  { name: "Gardenia", file: "corp-gardenia.png", group: "corporate" },
  { name: "Lazada", file: "corp-lazada.png", group: "corporate" },
  { name: "Macquarie Bank", file: "corp-macquarie-bank.png", group: "corporate" },
];
