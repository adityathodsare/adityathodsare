"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { cn } from "./ui/BrutalUI"; // Or whatever is needed

const NAV = [
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "experience", label: "LOGS" },
  { id: "projects", label: "WORK" },
];

export default function Navbar({ activeSection, handleNavClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = (id) => {
    handleNavClick(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 h-2 bg-[var(--color-neo-green)] z-[60] border-b-2 border-black"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="fixed top-0 w-full z-50 px-4 py-4 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
          <button
            onClick={() => handleNavClick("home")}
            className="bg-[var(--color-neo-white)] border-2 border-black px-4 py-1 text-2xl font-black brutal-shadow hover:bg-[var(--color-neo-yellow)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-hover font-display"
          >
            Aditya Thodsare
          </button>

          <div className="hidden md:flex gap-4 bg-white border-2 border-black p-2 brutal-shadow">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "px-3 py-1 font-mono font-bold text-sm transition-colors cursor-hover",
                  activeSection === item.id
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white",
                )}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="px-3 py-1 font-mono font-bold text-sm bg-[var(--color-neo-yellow)] border border-black hover:bg-[var(--color-neo-pink)] transition-colors cursor-hover"
            >
              HIRE ME
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden bg-white border-2 border-black p-2 brutal-shadow cursor-hover"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto absolute top-full left-0 w-full mt-4 px-4 md:hidden">
            <div className="bg-white border-4 border-black brutal-shadow p-4 flex flex-col gap-2">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMobileNavClick(item.id)}
                  className="font-mono text-left px-4 py-3 text-base font-bold border-2 border-transparent hover:border-black hover:bg-[var(--color-neo-yellow)] transition-all"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleMobileNavClick("contact")}
                className="font-mono text-left px-4 py-3 text-base font-bold bg-[var(--color-neo-yellow)] border-2 border-black hover:bg-[var(--color-neo-pink)] transition-all"
              >
                HIRE ME
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
