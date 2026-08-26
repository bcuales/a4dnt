"use client";

import { useEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";

// Keep in sync with the inline script in src/app/layout.tsx.
const THEME_STORAGE_KEY = "a4dnt-theme";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

// Reads/writes the theme via direct DOM access (ref + attributes) rather than React state, so
// this never needs to re-render to reflect a value that already lives outside React (the
// data-theme attribute set by the inline script in layout.tsx before first paint). Icon
// visibility is handled in CSS (see .theme-icon-* rules in globals.css) keyed off that same
// attribute, so server and client markup always match — no hydration flash, no effect-driven
// setState.
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef.current?.setAttribute("aria-pressed", String(currentTheme() === "dark"));
  }, []);

  function toggle() {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    buttonRef.current?.setAttribute("aria-pressed", String(next === "dark"));
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // localStorage unavailable (private browsing, etc.) — theme just won't persist.
    }
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      className={`inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors ${className}`}
    >
      <Sun size={18} strokeWidth={2} aria-hidden="true" className="theme-icon-sun" />
      <Moon size={18} strokeWidth={2} aria-hidden="true" className="theme-icon-moon" />
    </button>
  );
}
