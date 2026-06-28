"use client";

import { useEffect, useRef } from "react";

const experiences = [
  {
    type: "work",
    title: "QA Engineer Trainee",
    company: "Testrig Technologies Pvt Ltd",
    period: "Jan 2026 – Present",
    color: "var(--color-neo-blue)",
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
    color: "var(--color-neo-pink)",
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
    color: "var(--color-neo-yellow)",
    highlights: [
      "Coursework in IoT, embedded systems, and modern web technologies",
      "Participated in hackathons and technical competitions",
    ],
  },
];

export default function ExperienceSection() {
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
    <section id="experience" className="py-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter text-center font-display">
        Experience<span className="text-[var(--color-neo-red)]">_Log</span>
      </h2>

      <div className="relative border-l-4 border-black ml-4 md:ml-10 space-y-12">
        {experiences.map((item, index) => (
          <div ref={addToRefs} key={index} className="reveal relative pl-8 md:pl-16">
            <div
              className="absolute -left-[14px] top-2 w-6 h-6 border-4 border-black"
              style={{ backgroundColor: item.color }}
            />
            <div className="bg-white border-4 border-black p-6 brutal-shadow hover:brutal-shadow-xl transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-dashed border-gray-300 pb-4 mb-4">
                <h3 className="text-3xl font-black uppercase font-display">{item.title}</h3>
                <span className="font-mono font-bold bg-black text-white px-2 py-1 mt-2 md:mt-0">
                  {item.period}
                </span>
              </div>
              <p
                className="font-mono text-xl mb-2 font-bold"
                style={{ color: item.color === "var(--color-neo-yellow)" ? "#C08B3E" : item.color }} // Yellow can be hard to read on white
              >
                @ {item.company}
              </p>
              <ul className="list-disc list-inside font-mono text-gray-700 space-y-1">
                {item.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
