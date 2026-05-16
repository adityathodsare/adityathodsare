"use client";

import { FiArrowDown, FiDownload } from "react-icons/fi";
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
      className="doodle-bg relative min-h-screen overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
      style={{ "--section-bg": "#FFF4D6" }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute right-[5%] top-20 h-28 w-28 rounded-full bg-[#FF8A7A] brutal-border opacity-80" />
        <div className="absolute left-[8%] top-40 h-16 w-16 rotate-12 rounded-2xl bg-[#A78BFA] brutal-border" />
        <div className="absolute bottom-32 right-[20%] h-20 w-20 -rotate-6 rounded-full bg-[#74C0FC] brutal-border" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <BrutalBadge color="#7AE582">{SITE.tagline}</BrutalBadge>

          <h1 className="font-display mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hey! I&apos;m{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{SITE.name}</span>
              <span
                className="absolute -bottom-1 left-0 right-0 z-0 h-4 bg-[#FFD43B] -rotate-1 sm:h-5"
                aria-hidden
              />
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base font-bold leading-relaxed text-[#0f0f0f]/85 sm:text-lg lg:mx-0 mx-auto">
            I build playful, production-ready apps with{" "}
            <span className="rounded-md bg-[#C5E8FF] px-1 brutal-border">
              Spring Boot & React
            </span>
            , IoT platforms like{" "}
            <span className="rounded-md bg-[#FFD6C9] px-1 brutal-border">
              SAFE-V
            </span>
            , and AI test analytics dashboards.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <BrutalButton href="#contact" variant="coral">
              Let&apos;s talk
            </BrutalButton>
            <BrutalButton
              variant="secondary"
              onClick={() => handleNavClick("projects")}
            >
              See projects
            </BrutalButton>
            <BrutalButton
              href={SITE.resumeUrl}
              download={SITE.resumeFilename}
              variant="mint"
            >
              <FiDownload />
              Resume
            </BrutalButton>
          </div>

          <div className="mt-8 flex justify-center lg:justify-start">
            <SocialLinks size="lg" showLabels />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Mascot />
        </div>
      </div>

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
