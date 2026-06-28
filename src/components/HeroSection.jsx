"use client";

import { useEffect, useRef } from "react";
import { FiDownload } from "react-icons/fi";
import { SITE } from "@/lib/site";

export default function HeroSection({ handleNavClick }) {
  const revealRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el);
    }
  };

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 relative overflow-hidden border-b-4 border-black"
      >
        <div className="absolute top-1/3 left-[10%] w-16 h-16 bg-[var(--color-neo-blue)] border-4 border-black brutal-shadow animate-bounce hidden lg:block rotate-12" />
        <div className="absolute bottom-1/3 right-[10%] w-24 h-24 bg-[var(--color-neo-pink)] rounded-full border-4 border-black brutal-shadow hidden lg:block animate-pulse" />
        <div className="absolute top-20 right-20 text-9xl opacity-5 font-black select-none pointer-events-none">
          CODE
        </div>

        <div className="relative z-10 text-center max-w-5xl mt-10">
          <div
            ref={addToRefs}
            className="inline-block bg-[var(--color-neo-white)] border-2 border-black px-4 py-1 mb-6 brutal-shadow rotate-[-2deg] reveal"
          >
            <span className="font-mono font-bold text-[var(--color-neo-green)] bg-black px-2 mr-2">
              ●
            </span>
            <span className="font-mono font-bold">SYSTEM STATUS: ONLINE</span>
          </div>

          <h1
            ref={addToRefs}
            className="text-[13vw] md:text-[9vw] leading-[0.8] font-black uppercase tracking-tighter mb-6 reveal mix-blend-darken font-display"
          >
            FULL STACK<br />
            <span className="text-white text-stroke-black">DEVELOPER</span>
          </h1>

          <p
            ref={addToRefs}
            className="font-mono text-lg md:text-2xl max-w-2xl mx-auto mb-10 bg-[var(--color-neo-yellow)] border-2 border-black p-4 brutal-shadow reveal rotate-1"
          >
            I build robust applications that solve real-world problems.
            <br />
            <br />
            From backend microservices using Spring Boot to responsive frontend
            experiences using React & Next.js. <br />
            <b>Java • Spring Boot • React • Next.js</b>
          </p>

          <div
            ref={addToRefs}
            className="flex flex-wrap justify-center gap-4 mb-10 font-mono text-sm font-bold reveal"
          >
            <span className="bg-[var(--color-neo-green)] text-black px-3 py-1 border-2 border-black brutal-shadow-sm">
              ✔ Open to Work
            </span>
            <span className="bg-[var(--color-neo-yellow)] text-black px-3 py-1 border-2 border-black brutal-shadow-sm">
              ✔ Scalable Systems
            </span>
            <span className="bg-[var(--color-neo-white)] text-black px-3 py-1 border-2 border-black brutal-shadow-sm">
              ✔ Cloud & IoT
            </span>
          </div>

          <div
            ref={addToRefs}
            className="flex flex-col md:flex-row justify-center gap-6 reveal"
          >
            <button
              onClick={() => handleNavClick("projects")}
              className="bg-black text-white border-2 border-black px-10 py-5 text-xl font-bold brutal-shadow hover:bg-[var(--color-neo-green)] hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover font-display"
            >
              PROJECT GALLERY
            </button>
            <a
              href="https://drive.google.com/file/d/1hnW7EzFJf2EMgHkgyKrjb6muXX-D7EeR/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-neo-white)] text-black border-2 border-black px-10 py-5 text-xl font-bold brutal-shadow hover:bg-[var(--color-neo-pink)] hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover flex items-center justify-center gap-2 font-display"
            >
              <FiDownload className="text-2xl" /> DOWNLOAD CV
            </a>
          </div>
        </div>
      </section>

      <div className="border-b-4 border-black bg-[var(--color-neo-blue)] py-3 relative z-20">
        <div className="marquee-container font-mono font-bold text-2xl text-white">
          <div className="marquee-content">
            /// OPEN FOR WORK /// FULL STACK DEVELOPMENT /// SPRING BOOT ///
            REACT /// MICROSERVICES /// IOT /// SECURE /// OPEN FOR WORK ///
            FULL STACK DEVELOPMENT ///
          </div>
        </div>
      </div>
    </>
  );
}
