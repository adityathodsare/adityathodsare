"use client";

import {
  FiGithub,
  FiExternalLink,
  FiCpu,
  FiMessageSquare,
  FiWifi,
  FiLayers,
} from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";
import {
  BrutalSection,
  SectionHeader,
  BrutalCard,
  BrutalBadge,
  BrutalButton,
  cn,
} from "./ui/BrutalUI";

const TABS = [
  { id: "all", label: "All", icon: FiLayers },
  { id: "iot", label: "IoT", icon: FiWifi },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
];

const TAB_COLORS = {
  all: "#FFD43B",
  iot: "#74C0FC",
  fullstack: "#A78BFA",
  backend: "#FF8A7A",
  frontend: "#7AE582",
};

const projects = [
  {
    id: "safev",
    title: "SAFE-V",
    description:
      "IoT-powered vehicle safety platform with live location tracking, accident detection, and automated emergency alerts. Full-stack app with real-time dashboards and WebSocket updates.",
    technologies: ["IoT", "Next.js", "Spring Boot", "MySQL", "WebSocket", "ESP32"],
    image: "/image.png",
    githubLink: "https://github.com/adityathodsare/safev-frontend-nextjs",
    demoLink: "https://safev.vercel.app",
    categories: ["iot", "fullstack"],
    featured: true,
    cardColor: "#FFD43B",
  },
  {
    id: "healthorbit",
    title: "HealthOrbit AI",
    description:
      "AI-powered health platform with personalized fitness recommendations and symptom analysis. Event-driven microservices with RabbitMQ, Eureka, Gemini API, MongoDB, and PostgreSQL.",
    technologies: ["Spring Boot", "RabbitMQ", "Next.js", "Gemini API", "Microservices"],
    image: "/healthorbit.png",
    githubLinks: [
      { label: "Frontend", url: "https://github.com/adityathodsare/healthOrbit-Ai" },
      {
        label: "Backend",
        url: "https://github.com/adityathodsare/microservices-project-health-fitness-ai",
      },
    ],
    demoLink:
      "https://www.linkedin.com/posts/aditya-thodsare-475366289_springboot-microservices-rabbitmq-activity-7349101989458235393-2Av1",
    architectureLink:
      "https://app.eraser.io/workspace/bIMvUVxGVW2MvIYOgsOc?origin=share&elements=uKAcreQNH_YZDVULBAVyEA",
    categories: ["fullstack"],
    cardColor: "#E4D4FF",
  },
  {
    id: "printify",
    title: "Printify",
    description:
      "Print shop management with room-based jobs, secure document uploads, and anonymous WebSocket chat.",
    technologies: ["React.js", "Vite", "Spring Boot", "WebSocket", "MongoDB"],
    image: "/printify.png",
    githubLink: "https://github.com/adityathodsare/project-Printify",
    demoLink:
      "https://www.linkedin.com/posts/aditya-thodsare-475366289_webapp-printify-springboot-activity-7284180807630368768-WPDF",
    categories: ["fullstack"],
    cardColor: "#C5E8FF",
  },
  {
    id: "usermanagement",
    title: "User Management with JWT",
    description:
      "JWT auth, role-based access, encrypted passwords, refresh token rotation, and audit logging via REST APIs.",
    technologies: ["Spring Security", "Spring Boot", "JWT", "REST APIs", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    githubLink:
      "https://github.com/adityathodsare/spring-security-user-management-with-JWT",
    demoLink:
      "https://www.linkedin.com/posts/aditya-thodsare-475366289_springboot-springsecurity-jwt-activity-7308605498835054596-ANP8",
    categories: ["backend"],
    cardColor: "#FFD6C9",
  },
  {
    id: "develevate",
    title: "DevElevate",
    description:
      "Course platform built with Next.js and TypeScript — progress tracking, interactive exercises, and community discussions.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/develevate.png",
    githubLink: "https://github.com/adityathodsare/devElevate-nexjs-frontend",
    demoLink: "https://dev-elevate-nexjs-frontend.vercel.app/",
    categories: ["frontend"],
    cardColor: "#B8F5D4",
  },
];

function matchesTab(project, tab) {
  if (tab === "all") return true;
  return project.categories?.includes(tab);
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedProject, setExpandedProject] = useState(null);
  const filtered = projects.filter((p) => matchesTab(p, activeTab));

  return (
    <BrutalSection id="projects" bg="#FFD6C9">
      <SectionHeader
        eyebrow="Portfolio"
        title="Featured Projects"
        subtitle="Tap a category — SAFE-V shows up in both IoT & Full Stack!"
        accent="#FF8A7A"
      />

      <div
        className="mb-10 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Project categories"
      >
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={activeTab === id}
            onClick={() => setActiveTab(id)}
            className={cn(
              "font-display inline-flex items-center gap-1.5 rounded-xl brutal-border px-4 py-2 text-sm font-extrabold transition-transform brutal-hover brutal-active",
              activeTab === id && "brutal-shadow -translate-y-0.5"
            )}
            style={{
              backgroundColor:
                activeTab === id ? TAB_COLORS[id] : "#ffffff",
            }}
          >
            {Icon && <Icon className="h-4 w-4" />}
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {filtered.length === 0 ? (
          <p className="col-span-full py-12 text-center font-bold">
            No projects in this category yet.
          </p>
        ) : (
          filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              expanded={expandedProject === project.id}
              onToggle={() =>
                setExpandedProject(
                  expandedProject === project.id ? null : project.id
                )
              }
            />
          ))
        )}
      </div>
    </BrutalSection>
  );
}

function ProjectCard({ project, expanded, onToggle }) {
  const isExternal = project.image.startsWith("http");

  return (
    <BrutalCard
      bg={project.cardColor}
      className={cn(
        "overflow-hidden",
        project.featured && "lg:col-span-2"
      )}
    >
      <div
        className={cn(
          "flex flex-col",
          project.featured && "lg:flex-row"
        )}
      >
        <div
          className={cn(
            "relative h-44 shrink-0 overflow-hidden brutal-border border-x-0 border-t-0 sm:h-48",
            project.featured && "lg:h-auto lg:min-h-[220px] lg:w-2/5"
          )}
        >
          {isExternal ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          )}
        </div>

        <div
          className={cn(
            "flex flex-1 flex-col p-5 sm:p-6",
            project.featured && "lg:w-3/5"
          )}
        >
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <h3 className="font-display text-xl font-extrabold">
              {project.title}
            </h3>
            {project.categories?.length > 1 && (
              <BrutalBadge color="#ffffff">IoT + Full Stack</BrutalBadge>
            )}
          </div>

          <div className="mb-3 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <BrutalBadge key={tech} color="#ffffff">
                {tech}
              </BrutalBadge>
            ))}
          </div>

          <p
            className={cn(
              "mb-3 flex-1 text-sm font-semibold leading-relaxed",
              !expanded && "line-clamp-3"
            )}
          >
            {project.description}
          </p>

          <button
            type="button"
            onClick={onToggle}
            className="font-display mb-4 w-fit text-sm font-extrabold underline decoration-2 underline-offset-2"
          >
            {expanded ? "Show less" : "Read more"}
          </button>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.githubLinks
              ? project.githubLinks.map((link) => (
                  <BrutalButton
                    key={link.label}
                    href={link.url}
                    external
                    variant="secondary"
                    className="!px-3 !py-2 text-xs"
                  >
                    <FiGithub /> {link.label}
                  </BrutalButton>
                ))
              : (
                <BrutalButton
                  href={project.githubLink}
                  external
                  variant="secondary"
                  className="!px-3 !py-2 text-xs"
                >
                  <FiGithub /> Code
                </BrutalButton>
              )}

            {project.demoLink && (
              <BrutalButton
                href={project.demoLink}
                external
                variant="sky"
                className="!px-3 !py-2 text-xs"
              >
                <FiExternalLink />
                {project.id === "safev" ? "Live app" : "Demo"}
              </BrutalButton>
            )}

            {project.architectureLink && (
              <BrutalButton
                href={project.architectureLink}
                external
                variant="violet"
                className="!px-3 !py-2 text-xs"
              >
                <FiCpu /> Arch
              </BrutalButton>
            )}

            {project.id === "printify" && (
              <BrutalButton
                href={project.demoLink}
                external
                variant="mint"
                className="!px-3 !py-2 text-xs"
              >
                <FiMessageSquare /> Chat
              </BrutalButton>
            )}
          </div>
        </div>
      </div>
    </BrutalCard>
  );
}
