"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { SITE } from "@/lib/site";
import { BrutalButton, SocialLinks, cn } from "./ui/BrutalUI";

const NAV = ["home", "about", "experience", "projects", "contact"];

export default function Navbar({
  activeSection,
  handleNavClick,
  scrolled,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  }, [scrolled]);

  const handleMobileNavClick = (item) => {
    handleNavClick(item);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full brutal-border border-x-0 border-t-0 transition-all",
        scrolled ? "bg-[#FFD43B]/95 backdrop-blur-sm py-2" : "bg-[#FFD43B] py-3"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="font-display text-lg font-extrabold sm:text-xl"
        >
          {SITE.name.split(" ")[0]}
          <span className="text-[#FF8A7A]">.</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleNavClick(item)}
              className={cn(
                "font-display rounded-lg px-3 py-1.5 text-sm font-bold capitalize transition-all",
                activeSection === item
                  ? "brutal-border bg-white brutal-shadow-sm"
                  : "hover:bg-white/50"
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <SocialLinks size="md" />
          <BrutalButton
            href={SITE.resumeUrl}
            download={SITE.resumeFilename}
            variant="secondary"
            className="!px-4 !py-2 text-sm"
          >
            <FiDownload className="w-4 h-4" />
            Resume
          </BrutalButton>
        </div>

        <button
          type="button"
          className="rounded-lg brutal-border bg-white p-2 brutal-shadow-sm md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t-[3px] border-black bg-[#FFE566] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {NAV.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleMobileNavClick(item)}
                className={cn(
                  "font-display rounded-xl brutal-border px-4 py-3 text-left text-base font-bold capitalize",
                  activeSection === item ? "bg-white brutal-shadow-sm" : "bg-[#FFF4D6]"
                )}
              >
                {item}
              </button>
            ))}
            <div className="mt-2 flex flex-wrap gap-2 border-t-2 border-dashed border-black/30 pt-4">
              <SocialLinks size="md" showLabels />
            </div>
            <BrutalButton
              href={SITE.resumeUrl}
              download={SITE.resumeFilename}
              variant="coral"
              className="w-full"
            >
              <FiDownload />
              Download Resume
            </BrutalButton>
          </div>
        </div>
      )}
    </nav>
  );
}
