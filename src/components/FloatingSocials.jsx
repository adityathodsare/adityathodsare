"use client";

import { useState, useEffect, useCallback } from "react";
import { FiGithub, FiLinkedin, FiFileText, FiX, FiDownload } from "react-icons/fi";
import { SITE } from "@/lib/site";

/* ──────────────────────────────────────────────
   Resume Viewer Modal — previews PDF in‑app,
   with a download button at the bottom.
   ────────────────────────────────────────────── */
function ResumeModal({ isOpen, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#2D2D2D]/60 backdrop-blur-sm" />

      {/* Modal container */}
      <div
        className="relative z-10 flex w-full max-w-4xl flex-col rounded-2xl brutal-border brutal-shadow-lg bg-[#FAFAF7] overflow-hidden"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-[2.5px] border-[#2D2D2D] bg-[#F0EBE0] px-5 py-3">
          <h3 className="font-display text-lg font-extrabold flex items-center gap-2">
            <FiFileText className="h-5 w-5" />
            Resume
          </h3>
          <button
            onClick={onClose}
            className="rounded-xl brutal-border brutal-shadow-sm brutal-hover brutal-active bg-white p-2 transition-transform"
            aria-label="Close resume viewer"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden bg-[#e5e5e5]" style={{ minHeight: "60vh" }}>
          <iframe
            src={`${SITE.resumeUrl}#toolbar=0&navpanes=0`}
            title="Aditya Thodsare Resume"
            className="h-full w-full"
            style={{ minHeight: "60vh", border: "none" }}
          />
        </div>

        {/* Footer with download */}
        <div className="flex items-center justify-between border-t-[2.5px] border-[#2D2D2D] bg-[#F0EBE0] px-5 py-3">
          <p className="text-sm font-semibold text-[#2D2D2D]/60 hidden sm:block">
            {SITE.resumeFilename}
          </p>
          <a
            href={SITE.resumeUrl}
            download={SITE.resumeFilename}
            className="font-display inline-flex items-center gap-2 rounded-xl brutal-border brutal-shadow bg-[#C08B3E] px-5 py-2.5 text-sm font-bold text-white brutal-hover brutal-active transition-transform hover:bg-[#D09C50]"
          >
            <FiDownload className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

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
