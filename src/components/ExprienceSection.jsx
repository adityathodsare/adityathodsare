"use client";

import { FiBriefcase, FiBookOpen } from "react-icons/fi";
import { BrutalSection, SectionHeader, BrutalCard, BrutalButton } from "./ui/BrutalUI";

const experiences = [
  {
    type: "work",
    title: "QA Engineer Trainee",
    company: "Testrig Technologies Pvt Ltd",
    period: "Jan 2026 – Present",
    color: "#FFF8ED",
    iconBg: "#C08B3E",
    highlights: [
      "Automated software testing workflows and improved release confidence across product suites",
      "Contributed to AI-powered analytics dashboards inspired by Allure — chat with test data via an integrated chatbot",
      "Built visualizations for build trend analysis, run summaries, and actionable quality insights",
      "Gained hands-on experience with Jenkins and end-to-end CI/CD pipeline design and maintenance",
    ],
  },
  {
    type: "work",
    title: "Java Full Stack Developer Intern",
    company: "Shorat Innovations Pvt Ltd",
    period: "Jan 2025 – Feb 2025",
    color: "#F0F5FF",
    iconBg: "#6A80B8",
    highlights: [
      "Developed a content distribution platform using Spring Boot and React with real-time features via WebSockets",
      "Implemented Spring Security for robust authentication and authorization of REST APIs",
      "Built React-based course distribution interfaces with optimized data fetching and state management",
      "Designed and optimized backend architectures for seamless frontend integration",
    ],
  },
  {
    type: "education",
    title: "Bachelor of Engineering",
    company: "Electronics & Telecommunication · CGPA 9.25/10",
    period: "2022 – 2026",
    color: "#F5F0FA",
    iconBg: "#8A74C0",
    highlights: [
      "Coursework in IoT, embedded systems, and modern web technologies",
      "Participated in hackathons and technical competitions",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <BrutalSection id="experience" bg="#F2F1F6">
      <SectionHeader
        eyebrow="Career"
        title="Professional Journey"
        subtitle="From full-stack internships to test automation & AI quality dashboards"
        accent="#8A74C0"
      />

      <ul className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
        {experiences.map((item, index) => {
          const Icon = item.type === "education" ? FiBookOpen : FiBriefcase;
          const isLast = index === experiences.length - 1;
          return (
            <li key={index} className="relative pl-14 sm:pl-16">
              <span
                className="absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-xl brutal-border brutal-shadow-sm text-white sm:h-11 sm:w-11"
                style={{ backgroundColor: item.iconBg }}
              >
                <Icon className="h-5 w-5" />
              </span>
              {!isLast && (
                <div className="absolute left-[1.35rem] top-16 bottom-0 w-0.5 bg-[#2D2D2D]/15 sm:left-[1.6rem]" aria-hidden />
              )}
              <BrutalCard bg={item.color} className="p-5 sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-extrabold sm:text-xl">{item.title}</h3>
                    <p className="mt-0.5 text-sm font-bold text-[#2D2D2D]/65">{item.company}</p>
                  </div>
                  <span className="font-display shrink-0 w-fit rounded-full brutal-border bg-white px-3 py-1 text-xs font-extrabold">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {item.highlights.map((point, i) => (
                    <li key={i} className="flex gap-2.5 text-sm font-semibold leading-relaxed sm:text-[0.9375rem]">
                      <span className="mt-1 shrink-0 text-[#C08B3E] text-base leading-none">●</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </BrutalCard>
            </li>
          );
        })}
      </ul>

      <div className="mt-12 text-center">
        <BrutalButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} variant="primary">
          Get in touch →
        </BrutalButton>
      </div>
    </BrutalSection>
  );
}
