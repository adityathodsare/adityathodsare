"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { SITE } from "@/lib/site";
import { BrutalButton, cn } from "./ui/BrutalUI";
import dynamic from "next/dynamic";

const ResumeModal = dynamic(() => import("./ResumeModal"), { ssr: false });

const NAV = ["home", "about", "experience", "projects", "contact"];

export default function Navbar({ activeSection, handleNavClick, scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  }, [scrolled]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const handleMobileNavClick = (item) => {
    handleNavClick(item);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-200 border-b-[2.5px] border-[#2D2D2D]",
        scrolled
          ? "bg-white/95 backdrop-blur-sm py-2 shadow-md"
          : "bg-white py-3"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="font-display text-lg font-extrabold sm:text-xl shrink-0"
        >
          {SITE.name.split(" ")[0]}
          <span className="text-[#C08B3E]">.</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleNavClick(item)}
              className={cn(
                "font-display rounded-lg px-3 py-1.5 text-sm font-bold capitalize transition-all",
                activeSection === item
                  ? "brutal-border bg-[#F0EBE0] brutal-shadow-sm"
                  : "hover:bg-[#F0EBE0]/60"
              )}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Desktop resume CTA */}
        <div className="hidden md:flex shrink-0">
          <BrutalButton
            onClick={() => setResumeOpen(true)}
            variant="primary"
            className="!px-4 !py-2 text-sm"
          >
            <FiDownload className="w-4 h-4 shrink-0" />
            Resume
          </BrutalButton>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="rounded-lg brutal-border bg-white p-2 brutal-shadow-sm md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[calc(100%)] bg-black/10 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden
          />
          <div className="border-t-[2.5px] border-[#2D2D2D] bg-[#FAFAF7] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {NAV.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleMobileNavClick(item)}
                  className={cn(
                    "font-display rounded-xl brutal-border px-4 py-3 text-left text-base font-bold capitalize transition-all",
                    activeSection === item ? "bg-[#F0EBE0] brutal-shadow-sm" : "bg-white hover:bg-[#F0EBE0]/40"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t-2 border-dashed border-[#2D2D2D]/20">
              <BrutalButton
                onClick={() => {
                  setResumeOpen(true);
                  setMobileMenuOpen(false);
                }}
                variant="primary"
                className="w-full"
              >
                <FiDownload />
                View Resume
              </BrutalButton>
            </div>
          </div>
        </>
      )}
      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </nav>
  );
}
