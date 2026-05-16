"use client";

import { FiDownload } from "react-icons/fi";
import { SITE } from "@/lib/site";
import { BrutalButton, SocialLinks } from "./ui/BrutalUI";

const NAV = ["home", "about", "experience", "projects", "contact"];

export default function Footer({ activeSection, handleNavClick }) {
  return (
    <footer className="doodle-bg border-t-[3px] border-black py-12" style={{ "--section-bg": "#FFEB99" }}>
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="font-display text-2xl font-extrabold hover:underline"
        >
          {SITE.name}
        </button>

        <nav className="mt-6 flex flex-wrap justify-center gap-2">
          {NAV.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleNavClick(item)}
              className={`font-display rounded-lg px-3 py-1.5 text-sm font-bold capitalize transition-all ${
                activeSection === item
                  ? "brutal-border bg-white brutal-shadow-sm"
                  : "hover:bg-white/60"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <SocialLinks size="lg" showLabels />
          <BrutalButton
            href={SITE.resumeUrl}
            download={SITE.resumeFilename}
            variant="coral"
          >
            <FiDownload />
            Download Resume
          </BrutalButton>
        </div>

        <p className="mt-8 font-display text-sm font-bold text-[#0f0f0f]/70">
          © {new Date().getFullYear()} {SITE.name}. Built with doodles & code.
        </p>
      </div>
    </footer>
  );
}
