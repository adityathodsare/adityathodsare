"use client";

import { useEffect, useRef } from "react";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    id: "safev",
    title: "SAFE-V",
    description:
      "IoT-powered vehicle safety platform with live location tracking, accident detection, and automated emergency alerts. Full-stack app with real-time dashboards and WebSocket updates.",
    technologies: [
      "IoT",
      "Next.js",
      "Spring Boot",
      "MySQL",
      "WebSocket",
      "ESP32",
    ],
    image: "/image.png",
    links: [
      { name: "Live Site", url: "https://safev.vercel.app" },
      { name: "Source Code", url: "https://github.com/adityathodsare/safev/" },
    ],
    badge: "★ Featured MERN/IoT",
  },
  {
    id: "healthorbit",
    title: "HealthOrbit AI",
    description:
      "AI-powered health platform with personalized fitness recommendations and symptom analysis. Event-driven microservices with RabbitMQ, Eureka, Gemini API, MongoDB, and PostgreSQL.",
    technologies: [
      "Spring Boot",
      "RabbitMQ",
      "Next.js",
      "Gemini API",
      "Microservices",
    ],
    image: "/healthorbit.png",
    links: [
      {
        name: "Live Demo",
        url: "https://www.linkedin.com/posts/aditya-thodsare-475366289_springboot-microservices-rabbitmq-activity-7349101989458235393-2Av1",
      },
      {
        name: "Frontend",
        url: "https://github.com/adityathodsare/healthOrbit-Ai",
      },
      {
        name: "Backend",
        url: "https://github.com/adityathodsare/microservices-project-health-fitness-ai",
      },
    ],
    badge: "☁️ Microservices",
  },
  {
    id: "printify",
    title: "Printify",
    description:
      "Print shop management with room-based jobs, secure document uploads, and anonymous WebSocket chat.",
    technologies: ["React.js", "Vite", "Spring Boot", "WebSocket", "MongoDB"],
    image: "/printify.png",
    links: [
      {
        name: "Live Demo",
        url: "https://www.linkedin.com/posts/aditya-thodsare-475366289_webapp-printify-springboot-activity-7284180807630368768-WPDF/?utm_source=social_share_sheet&utm_medium=member_desktop_web",
      },
      {
        name: "Source Code",
        url: "https://github.com/adityathodsare/project-Printify",
      },
    ],
    badge: "💻 Full Stack",
  },
  {
    id: "usermanagement",
    title: "User Management with JWT",
    description:
      "JWT auth, role-based access, encrypted passwords, refresh token rotation, and audit logging via REST APIs.",
    technologies: ["Spring Security", "Spring Boot", "JWT", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    links: [
      {
        name: "Source Code",
        url: "https://github.com/adityathodsare/spring-security-user-management-with-JWT",
      },
    ],
    badge: "🔒 Security",
  },
];

export default function ProjectsSection() {
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
    <section
      id="projects"
      className="py-24 border-t-4 border-white/10 px-4 overflow-hidden relative"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-white pb-4">
          <h2 className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter font-display">
            Selected
            <span style={{ color: "var(--color-neo-green)" }}>_Works</span>
          </h2>
          <div className="flex items-center gap-2 mb-2 md:mb-4">
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ background: "var(--color-neo-green)" }}
            />
            <p
              className="font-mono text-sm font-bold"
              style={{ color: "var(--color-neo-green)" }}
            ></p>
          </div>
        </div>
        <p
          className="font-mono text-sm mb-12"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Projects I've built to solve real-world problems and deliver business
          value
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <article
              ref={addToRefs}
              key={project.id}
              className="reveal group flex flex-col bg-[#111] border-2 border-[#222] hover:border-[var(--color-neo-green)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(51,255,87,0.08)]"
            >
              <div className="h-60 overflow-hidden relative border-b-2 border-[#222] group-hover:border-[var(--color-neo-green)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale-[30%] brightness-85 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                <span
                  className="absolute top-0 left-0 z-20 text-[10px] px-3 py-1.5 font-mono font-extrabold uppercase tracking-widest"
                  style={{
                    background: "var(--color-neo-green)",
                    color: "#0a0a0a",
                  }}
                >
                  {project.badge}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-3">
                  <h3 className="text-xl md:text-2xl font-black uppercase text-white leading-tight font-display mb-4">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.links.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-bold px-3 py-1.5 border border-white/20 text-white/70 hover:border-[var(--color-neo-green)] hover:text-[var(--color-neo-green)] hover:bg-[var(--color-neo-green)]/10 transition-all cursor-hover"
                      >
                        {link.name} ↗
                      </a>
                    ))}
                  </div>
                </div>
                <p className="font-mono text-sm mb-3 text-white/50 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2.5 py-1 border border-[#333] text-white/60 font-mono font-bold uppercase tracking-widest group-hover:border-[var(--color-neo-green)] group-hover:text-[var(--color-neo-green)] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-20">
          <a
            href="https://github.com/adityathodsare?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-bold font-mono text-lg px-10 py-4 transition-all cursor-hover border-2 border-[var(--color-neo-green)] text-[var(--color-neo-green)] hover:bg-[var(--color-neo-green)] hover:text-black"
          >
            VIEW ALL REPOS ON GITHUB →
          </a>
        </div>

        <div className="mt-8 pt-4 flex justify-between font-mono text-xs border-t-2 border-[#222] text-white/20">
          <span>TOTAL_PROJECTS: {projects.length}</span>
          <span>STATUS: DEPLOYED</span>
        </div>
      </div>
    </section>
  );
}
