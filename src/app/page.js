"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExprienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateActiveSection = useCallback(() => {
    const sections = ["home", "about", "experience", "projects", "contact"];
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
    updateActiveSection();
  }, [updateActiveSection]);

  useEffect(() => {
    const throttled = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttled);
    return () => window.removeEventListener("scroll", throttled);
  }, [handleScroll]);

  const handleNavClick = useCallback(
    (section) => {
      setActiveSection(section);
      const element = document.getElementById(section);
      if (element) {
        const offset = isMobile ? 88 : 0;
        const top =
          element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    [isMobile]
  );

  if (!mounted) return <Loading />;

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#2D2D2D]">
      <Navbar
        activeSection={activeSection}
        handleNavClick={handleNavClick}
        scrolled={scrolled}
      />

      <main>
        <HeroSection handleNavClick={handleNavClick} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer activeSection={activeSection} handleNavClick={handleNavClick} />
    </div>
  );
}

function throttle(func, limit) {
  let lastRan;
  let lastFunc;
  return function (...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
