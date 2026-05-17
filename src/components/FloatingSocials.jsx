"use client";

import { useState, useEffect, useCallback } from "react";
import { FiGithub, FiLinkedin, FiFileText, FiX, FiDownload } from "react-icons/fi";
import { SITE } from "@/lib/site";

import dynamic from "next/dynamic";
const ResumeModal = dynamic(() => import("./ResumeModal"), { ssr: false });

/* ──────────────────────────────────────────────
   Floating Socials — fixed to the right edge
   with GitHub, LinkedIn, and Resume icons.
   ────────────────────────────────────────────── */
export default function FloatingSocials() {
  const [showResume, setShowResume] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show after scrolling past the hero fold
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenResume = useCallback(() => setShowResume(true), []);
  const handleCloseResume = useCallback(() => setShowResume(false), []);

  const socials = [
    {
      label: "GitHub",
      icon: FiGithub,
      href: SITE.github,
      bg: "#2D2D2D",
      color: "#FFFFFF",
    },
    {
      label: "LinkedIn",
      icon: FiLinkedin,
      href: SITE.linkedin,
      bg: "#0A66C2",
      color: "#FFFFFF",
    },
    {
      label: "Resume",
      icon: FiFileText,
      onClick: handleOpenResume,
      bg: "#C08B3E",
      color: "#FFFFFF",
    },
  ];

  return (
    <>
      {/* Floating bar — bottom-right corner */}
      <div
        className="fixed right-0 bottom-0 z-[100] flex flex-col gap-2 pb-6 pr-4 transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateX(0) translateY(0)"
            : "translateX(100%) translateY(0)",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        {socials.map(({ label, icon: Icon, href, onClick, bg, color }) => {
          const classes =
            "group relative flex items-center justify-center rounded-xl brutal-border brutal-shadow-sm brutal-hover brutal-active p-3 transition-transform";

          const tooltip = (
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg brutal-border bg-[#2D2D2D] px-3 py-1.5 font-display text-xs font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
              {label}
            </span>
          );

          if (href) {
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
                style={{ backgroundColor: bg, color }}
                aria-label={label}
              >
                {tooltip}
                <Icon className="h-5 w-5" />
              </a>
            );
          }

          return (
            <button
              key={label}
              onClick={onClick}
              className={classes}
              style={{ backgroundColor: bg, color }}
              aria-label={label}
            >
              {tooltip}
              <Icon className="h-5 w-5" />
            </button>
          );
        })}
      </div>

      {/* Resume modal */}
      <ResumeModal isOpen={showResume} onClose={handleCloseResume} />
    </>
  );
}
