"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
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
      { threshold: 0.1 },
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
        id="about"
        className="py-24 px-4 max-w-7xl mx-auto border-x-4 border-black bg-white my-12 brutal-shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div ref={addToRefs} className="md:col-span-4 reveal">
            <div className="aspect-square bg-gray-200 border-4 border-black relative brutal-shadow overflow-hidden group">
              <Image
                src="/2.jpg"
                alt="Aditya Thodsare"
                fill
                className="object-cover object-top transition-all duration-500"
              />
            </div>
          </div>
          <div
            ref={addToRefs}
            className="md:col-span-8 flex flex-col justify-center reveal"
          >
            <h2 className="text-6xl font-black uppercase mb-6 font-display">
              Who am I?
            </h2>
            <p className="font-mono text-xl leading-relaxed mb-6">
              I am a passionate Full Stack Developer focused on building{" "}
              <span className="bg-[var(--color-neo-yellow)] px-1 border border-black text-black">
                scalable
              </span>{" "}
              and robust applications.
              <br />
              <br />
              I specialize in backend development using Spring Boot and
              microservices, along with modern frontend technologies like
              React.js and Next.js.
              <br />
              <br />I also build IoT-powered platforms (like SAFE-V)
              demonstrating real-time monitoring and event-driven architecture.
            </p>
            <p className="font-mono text-lg mb-8 text-gray-600 border-l-4 border-[var(--color-neo-purple)] pl-4">
              {">"} Strong foundation in Java & Spring Boot microservices
              <br />
              {">"} Experience building scalable full-stack web applications
              <br />
              {">"} Focused on clean UI, performance, and robust backends
              <br />
              {">"} IoT enthusiast integrating hardware with the web
            </p>

            <div className="font-mono text-sm bg-[var(--color-neo-green)] border-2 border-black p-3 mb-6 brutal-shadow-sm text-black">
              <strong>
                ✔ Proven ability to deliver full-stack solutions
                <br />✔ Passionate about scalable architecture and test
                automation
              </strong>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-black text-white px-4 py-2 font-mono text-sm border-2 border-transparent">
                📍 LOCATION: PUNE, INDIA
              </div>
              <div className="bg-[var(--color-neo-green)] text-black px-4 py-2 font-mono text-sm border-2 border-black">
                🟢 STATUS: AVAILABLE
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="py-20 bg-black text-white border-y-4 border-black relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-white pb-4">
            <h2 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter font-display">
              TECH<span className="text-[var(--color-neo-green)]">_STACK</span>
            </h2>
            <div className="flex items-center gap-2 mb-2 md:mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <p className="font-mono text-[var(--color-neo-green)] text-sm font-bold"></p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Backend */}
            <div className="group h-24 border-2 border-white/20 bg-black hover:bg-[var(--color-neo-yellow)] hover:border-black transition-all duration-0 hover:z-10 relative cursor-hover flex flex-col items-center justify-center p-2">
              <div className="text-[var(--color-neo-green)] group-hover:text-black font-mono text-xs mb-1 opacity-50">
                {">"}_ BACKEND
              </div>
              <div className="text-white group-hover:text-black font-black font-display text-xl uppercase">
                SPRING BOOT
              </div>
            </div>

            <div className="group h-24 border-2 border-white/20 bg-black hover:bg-[var(--color-neo-blue)] hover:border-black transition-all duration-0 hover:z-10 relative cursor-hover flex flex-col items-center justify-center p-2">
              <div className="text-[var(--color-neo-green)] group-hover:text-black font-mono text-xs mb-1 opacity-50">
                {">"}_ LANGUAGE
              </div>
              <div className="text-white group-hover:text-black font-black font-display text-xl uppercase">
                JAVA
              </div>
            </div>

            <div className="group h-24 border-2 border-white/20 bg-black hover:bg-[var(--color-neo-purple)] hover:border-black transition-all duration-0 hover:z-10 relative cursor-hover flex flex-col items-center justify-center p-2">
              <div className="text-[var(--color-neo-green)] group-hover:text-black font-mono text-xs mb-1 opacity-50">
                {">"}_ DATABASE
              </div>
              <div className="text-white group-hover:text-black font-black font-display text-xl uppercase">
                MYSQL
              </div>
            </div>

            <div className="group h-24 border-2 border-white/20 bg-black hover:bg-[var(--color-neo-pink)] hover:border-black transition-all duration-0 hover:z-10 relative cursor-hover flex flex-col items-center justify-center p-2">
              <div className="text-[var(--color-neo-green)] group-hover:text-black font-mono text-xs mb-1 opacity-50">
                {">"}_ DATABASE
              </div>
              <div className="text-white group-hover:text-black font-black font-display text-xl uppercase">
                MONGODB
              </div>
            </div>

            <div className="group h-24 border-2 border-white/20 bg-black hover:bg-[var(--color-neo-green)] hover:border-black transition-all duration-0 hover:z-10 relative cursor-hover flex flex-col items-center justify-center p-2">
              <div className="text-[var(--color-neo-green)] group-hover:text-black font-mono text-xs mb-1 opacity-50">
                {">"}_ LIBRARY
              </div>
              <div className="text-white group-hover:text-black font-black font-display text-xl uppercase">
                REACT.JS
              </div>
            </div>

            <div className="group h-24 border-2 border-white/20 bg-black hover:bg-white hover:border-black transition-all duration-0 hover:z-10 relative cursor-hover flex flex-col items-center justify-center p-2">
              <div className="text-[var(--color-neo-green)] group-hover:text-black font-mono text-xs mb-1 opacity-50">
                {">"}_ FRAMEWORK
              </div>
              <div className="text-white group-hover:text-black font-black font-display text-xl uppercase">
                NEXT.JS
              </div>
            </div>

            <div className="group h-24 border-2 border-white/20 bg-black hover:bg-[var(--color-neo-orange)] hover:border-black transition-all duration-0 hover:z-10 relative cursor-hover flex flex-col items-center justify-center p-2">
              <div className="text-[var(--color-neo-green)] group-hover:text-black font-mono text-xs mb-1 opacity-50">
                {">"}_ TOOL
              </div>
              <div className="text-white group-hover:text-black font-black font-display text-xl uppercase">
                DOCKER
              </div>
            </div>

            <div className="group h-24 border-2 border-white/20 bg-black hover:bg-[var(--color-neo-red)] hover:border-black transition-all duration-0 hover:z-10 relative cursor-hover flex flex-col items-center justify-center p-2">
              <div className="text-[var(--color-neo-green)] group-hover:text-black font-mono text-xs mb-1 opacity-50">
                {">"}_ CI/CD
              </div>
              <div className="text-white group-hover:text-black font-black font-display text-xl uppercase">
                JENKINS
              </div>
            </div>

            <div className="group h-24 border-2 border-white/20 bg-black hover:bg-[var(--color-neo-blue)] hover:border-black transition-all duration-0 hover:z-10 relative cursor-hover flex flex-col items-center justify-center p-2">
              <div className="text-[var(--color-neo-green)] group-hover:text-black font-mono text-xs mb-1 opacity-50">
                {">"}_ SYSTEM
              </div>
              <div className="text-white group-hover:text-black font-black font-display text-xl uppercase">
                LINUX
              </div>
            </div>

            <div className="group h-24 border-2 border-white/20 bg-black hover:bg-[var(--color-neo-yellow)] hover:border-black transition-all duration-0 hover:z-10 relative cursor-hover flex flex-col items-center justify-center p-2">
              <div className="text-[var(--color-neo-green)] group-hover:text-black font-mono text-xs mb-1 opacity-50">
                {">"}_ HARDWARE
              </div>
              <div className="text-white group-hover:text-black font-black font-display text-xl uppercase">
                IOT / ESP32
              </div>
            </div>

            <div className="group h-24 border-2 border-white/20 bg-black hover:bg-[var(--color-neo-pink)] hover:border-black transition-all duration-0 hover:z-10 relative cursor-hover flex flex-col items-center justify-center p-2">
              <div className="text-[var(--color-neo-green)] group-hover:text-black font-mono text-xs mb-1 opacity-50">
                {">"}_ HARDWARE
              </div>
              <div className="text-white group-hover:text-black font-black font-display text-xl uppercase text-center leading-none">
                PCB DESIGN
              </div>
            </div>
          </div>

          <div className="border-t-4 border-white mt-8 pt-4 flex justify-between font-mono text-xs text-gray-500">
            <span>TOTAL_NODES: 10</span>
            <span>MEMORY_USAGE: 64MB</span>
          </div>
        </div>
      </section>
    </>
  );
}
