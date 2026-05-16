"use client";

import { FiArrowUp } from "react-icons/fi";
import { SITE } from "@/lib/site";
import { SocialLinks, cn } from "./ui/BrutalUI";

const NAV = ["home", "about", "experience", "projects", "contact"];

export default function Footer({ activeSection, handleNavClick }) {
  return (
    <footer className="doodle-bg border-t-[2.5px] border-[#2D2D2D] py-12" style={{ "--section-bg": "#F3F1E6" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="font-display text-2xl font-extrabold hover:text-[#C08B3E] transition-colors"
          >
            {SITE.name}
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="rounded-full brutal-border bg-white p-2.5 brutal-shadow-sm brutal-hover brutal-active"
            aria-label="Back to top"
          >
            <FiArrowUp className="h-5 w-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="mt-6 flex flex-wrap justify-center gap-2">
          {NAV.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleNavClick(item)}
              className={cn(
                "font-display rounded-lg px-3 py-1.5 text-sm font-bold capitalize transition-all",
                activeSection === item
                  ? "brutal-border bg-white brutal-shadow-sm"
                  : "hover:bg-white/60"
              )}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Social links only — resume is in navbar */}
        <div className="mt-8 flex justify-center">
          <SocialLinks size="lg" showLabels />
        </div>

        <div className="mt-8 h-[2px] bg-[#2D2D2D]/10 rounded-full" />
        <p className="mt-6 text-center font-display text-sm font-bold text-[#2D2D2D]/50">
          © {new Date().getFullYear()} {SITE.name}. Built with passion & code.
        </p>
      </div>
    </footer>
  );
}
