"use client";

import { FiGithub, FiLinkedin, FiFileText, FiMail } from "react-icons/fi";
import { SITE } from "@/lib/site";

export default function FloatingSocials() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
      <a
        href={SITE.github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[var(--color-neo-white)] border-2 border-black flex items-center justify-center text-black brutal-shadow-sm hover:bg-[var(--color-neo-yellow)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover pointer-events-auto"
        aria-label="GitHub"
      >
        <FiGithub className="text-2xl" />
      </a>
      <a
        href={SITE.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[var(--color-neo-blue)] border-2 border-black flex items-center justify-center text-white brutal-shadow-sm hover:bg-[var(--color-neo-green)] hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover pointer-events-auto"
        aria-label="LinkedIn"
      >
        <FiLinkedin className="text-2xl" />
      </a>
      <a
        href="https://drive.google.com/file/d/1hnW7EzFJf2EMgHkgyKrjb6muXX-D7EeR/view"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[var(--color-neo-pink)] border-2 border-black flex items-center justify-center text-black brutal-shadow-sm hover:bg-[var(--color-neo-white)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover pointer-events-auto"
        aria-label="Resume"
      >
        <FiFileText className="text-2xl" />
      </a>
      <button
        onClick={handleScrollToContact}
        className="w-12 h-12 bg-black border-2 border-black flex items-center justify-center text-white brutal-shadow-sm hover:bg-[var(--color-neo-orange)] hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover pointer-events-auto"
        aria-label="Contact"
      >
        <FiMail className="text-2xl" />
      </button>
    </div>
  );
}
