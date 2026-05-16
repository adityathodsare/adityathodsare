"use client";

import { FiArrowDown } from "react-icons/fi";
import { SITE } from "@/lib/site";
import {
  BrutalButton,
  Mascot,
  SocialLinks,
  BrutalBadge,
} from "./ui/BrutalUI";

export default function HeroSection({ handleNavClick }) {
  return (
    <section
      id="home"
      className="doodle-bg relative min-h-screen overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 flex items-center"
      style={{ "--section-bg": "#FAFAF7" }}
    >
      {/* Subtle background decor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute right-[5%] top-20 h-24 w-24 rounded-full bg-[#C08B3E]/15 brutal-border border-[#2D2D2D]/10" />
        <div className="absolute left-[8%] top-40 h-14 w-14 rotate-12 rounded-2xl bg-[#4A9B5A]/12 brutal-border border-[#2D2D2D]/10" />
        <div className="absolute bottom-32 right-[20%] h-16 w-16 -rotate-6 rounded-full bg-[#6A80B8]/12 brutal-border border-[#2D2D2D]/10" />
      </div>

      <div className="relative z-10 mx-auto w-full grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        {/* Text content */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <BrutalBadge color="#E6F0E8">{SITE.tagline}</BrutalBadge>

          <h1 className="font-display mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hey! I&apos;m{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{SITE.name}</span>
              <span
                className="absolute -bottom-1 left-0 right-0 z-0 h-4 bg-[#C08B3E]/30 -rotate-1 sm:h-5"
                aria-hidden
              />
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base font-bold leading-relaxed text-[#2D2D2D]/75 sm:text-lg lg:mx-0 mx-auto">
            I build production-ready apps with{" "}
            <span className="rounded-md bg-[#E0E8F0] px-1.5 brutal-border border-[#2D2D2D]/20">
              Spring Boot & React
            </span>
            , IoT platforms like{" "}
            <span className="rounded-md bg-[#F0EBE0] px-1.5 brutal-border border-[#2D2D2D]/20">
              SAFE-V
            </span>
            , and AI test analytics dashboards.
          </p>

          {/* Only 2 CTA buttons — clean */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <BrutalButton
              onClick={() => handleNavClick("contact")}
              variant="primary"
            >
              Let&apos;s talk
            </BrutalButton>
            <BrutalButton
              variant="secondary"
              onClick={() => handleNavClick("projects")}
            >
              See projects
            </BrutalButton>
          </div>

          {/* Social links */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <SocialLinks size="lg" showLabels />
          </div>
        </div>

        {/* Photo Card */}
        <div className="order-1 flex justify-center lg:order-2">
          <Mascot />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <button
          type="button"
          onClick={() => handleNavClick("about")}
          className="rounded-full brutal-border bg-white p-3 brutal-shadow brutal-hover animate-bounce"
          aria-label="Scroll to about"
        >
          <FiArrowDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
