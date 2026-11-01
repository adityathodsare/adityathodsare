"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiNextdotjs,
  SiJenkins,
  SiN8N,
  SiMake,
} from "react-icons/si";
import { FaJava, FaReact, FaDocker, FaLinux } from "react-icons/fa";
import { IoHardwareChipOutline } from "react-icons/io5";

const techStack = [
  {
    name: "Spring Boot",
    category: "BACKEND",
    icon: <SiSpringboot className="text-4xl text-[#6DB33F]" />,
    color: "#6DB33F",
  },
  {
    name: "Java",
    category: "LANGUAGE",
    icon: <FaJava className="text-4xl text-[#ED8B00]" />,
    color: "#ED8B00",
  },
  {
    name: "n8n (AI Workflows)",
    category: "AI AUTOMATION",
    icon: <SiN8N className="text-4xl text-[#FF6C37]" />,
    color: "#FF6C37",
  },
  {
    name: "Make.com",
    category: "AI AUTOMATION",
    icon: <SiMake className="text-4xl text-[#6D00CC]" />,
    color: "#6D00CC",
  },
  {
    name: "React.js",
    category: "LIBRARY",
    icon: <FaReact className="text-4xl text-[#61DAFB]" />,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    category: "FRAMEWORK",
    icon: <SiNextdotjs className="text-4xl text-white" />,
    color: "#FFFFFF",
  },
  {
    name: "MySQL",
    category: "DATABASE",
    icon: <SiMysql className="text-4xl text-[#4479A1]" />,
    color: "#4479A1",
  },
  {
    name: "MongoDB",
    category: "DATABASE",
    icon: <SiMongodb className="text-4xl text-[#47A248]" />,
    color: "#47A248",
  },
  {
    name: "Docker",
    category: "CONTAINERS",
    icon: <FaDocker className="text-4xl text-[#2496ED]" />,
    color: "#2496ED",
  },
  {
    name: "Jenkins",
    category: "CI/CD",
    icon: <SiJenkins className="text-4xl text-[#D24939]" />,
    color: "#D24939",
  },
  {
    name: "Linux",
    category: "SYSTEM",
    icon: <FaLinux className="text-4xl text-[#FCC624]" />,
    color: "#FCC624",
  },
  {
    name: "IoT / ESP32",
    category: "HARDWARE",
    icon: <IoHardwareChipOutline className="text-4xl text-[#00E5FF]" />,
    color: "#00E5FF",
  },
];

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
              I am a passionate Full Stack Developer & AI Automation Engineer focused on building{" "}
              <span className="bg-[var(--color-neo-yellow)] px-1 border border-black text-black">
                scalable
              </span>{" "}
              and robust applications.
              <br />
              <br />
              I specialize in backend microservices using Spring Boot, modern frontend experiences in React & Next.js, and autonomous workflow automation using AI with n8n and Make.com.
              <br />
              <br />
              I also build IoT-powered platforms (like SAFE-V.ai) demonstrating real-time monitoring and event-driven architecture.
            </p>

            <p className="font-mono text-lg mb-8 text-gray-600 border-l-4 border-[var(--color-neo-purple)] pl-4 space-y-1">
              <span>{">"} Strong foundation in Java & Spring Boot microservices</span>
              <br />
              <span>{">"} Experience building scalable full-stack web applications</span>
              <br />
              <span>{">"} Automating complex business workflows with AI using n8n & Make.com</span>
              <br />
              <span>{">"} Focused on clean UI, performance, and robust backends</span>
              <br />
              <span>{">"} IoT enthusiast integrating hardware with web systems</span>
            </p>

            <div className="font-mono text-sm bg-[var(--color-neo-green)] border-2 border-black p-3 mb-6 brutal-shadow-sm text-black">
              <strong>
                ✔ Proven ability to deliver full-stack solutions
                <br />✔ Automating workflows with AI using n8n & Make.com
                <br />✔ Passionate about scalable architecture and test automation
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
              <div className="w-3 h-3 bg-[var(--color-neo-green)] rounded-full animate-pulse" />
              <p className="font-mono text-[var(--color-neo-green)] text-sm font-bold uppercase">
                CORE TECHNOLOGIES
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group p-5 border-2 border-white/30 hover:border-[var(--color-neo-green)] bg-[#111] hover:bg-black transition-all duration-200 cursor-pointer flex flex-col items-center justify-between min-h-[150px] brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                <div className="font-mono text-[10px] tracking-wider text-[var(--color-neo-green)] font-bold uppercase self-start">
                  {">"}_ {tech.category}
                </div>

                <div className="my-2 text-4xl group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>

                <div className="text-white font-black font-display text-sm uppercase tracking-tight text-center">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t-4 border-white mt-8 pt-4 flex flex-col sm:flex-row justify-between font-mono text-xs text-gray-400 gap-2">
            <span>TOTAL_NODES: {techStack.length}</span>
            <span>JAVA • SPRING BOOT • REACT • NEXT.JS • N8N & MAKE AI AUTOMATION</span>
          </div>
        </div>
      </section>
    </>
  );
}
