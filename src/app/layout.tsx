import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Audio4Design n Technology Corp. | Professional Audio & Visual Solutions",
  description:
    "Audio4Design n Technology Corp. designs, engineers, and installs professional audio, video, security, lighting, and fire/life-safety systems across the Philippines. Since 2003.",
};

// Runs before first paint so the page never flashes the wrong theme. Reads the visitor's saved
// choice (localStorage key below); if they've never chosen, falls back to their OS preference.
// Keep this key in sync with THEME_STORAGE_KEY in src/components/ThemeToggle.tsx.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("a4dnt-theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-body">{children}</body>
    </html>
  );
}
