"use client";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

export default function Footer({ activeSection, handleNavClick }) {
  return (
    <footer className="bg-black text-white py-16 px-4 border-t-8 border-[var(--color-neo-green)] font-mono relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-black mb-6 font-display">ADITYA THODSARE.</h2>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Designing for the future with the raw aesthetics of the past. No
            cookies, no trackers, just code.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-[var(--color-neo-green)] mb-4 border-b border-gray-700 pb-2">
            SITEMAP
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <button
                onClick={() => handleNavClick("home")}
                className="hover:text-white hover:underline decoration-[var(--color-neo-pink)] decoration-2 cursor-hover"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("projects")}
                className="hover:text-white hover:underline decoration-[var(--color-neo-pink)] decoration-2 cursor-hover"
              >
                Works
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("about")}
                className="hover:text-white hover:underline decoration-[var(--color-neo-pink)] decoration-2 cursor-hover"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("contact")}
                className="hover:text-white hover:underline decoration-[var(--color-neo-pink)] decoration-2 cursor-hover"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[var(--color-neo-green)] mb-4 border-b border-gray-700 pb-2">
            SOCIALS
          </h3>
          <div className="flex gap-4">
            <a
              href="https://leetcode.com/u/adityathodsare/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[var(--color-neo-blue)] transition-colors cursor-hover"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://github.com/adityathodsare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[var(--color-neo-yellow)] transition-colors cursor-hover"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-thodsare-475366289/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[var(--color-neo-purple)] transition-colors cursor-hover"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 pt-8 border-t border-gray-800 text-gray-500 text-sm z-10 relative">
        <p>© 2026 Aditya Thodsare // SYSTEM_END</p>
      </div>

      <div className="absolute bottom-0 left-0 w-full text-[20vw] font-black text-white opacity-[0.03] leading-none select-none pointer-events-none text-center font-display">
        BRUTAL
      </div>
    </footer>
  );
}
