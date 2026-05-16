"use client";

import Image from "next/image";
import { FiMapPin, FiMail, FiPhone, FiBook } from "react-icons/fi";
import {
  FaReact,
  FaJava,
  FaDocker,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiJenkins,
} from "react-icons/si";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";
import {
  BrutalSection,
  SectionHeader,
  BrutalCard,
  BrutalBadge,
} from "./ui/BrutalUI";

const skillIcons = {
  "Spring Boot": <SiSpringboot className="text-emerald-600" />,
  Java: <FaJava className="text-red-600" />,
  "React.js": <FaReact className="text-sky-600" />,
  "Next.js": <SiNextdotjs />,
  Jenkins: <SiJenkins className="text-rose-600" />,
  "CI/CD": <FaDocker className="text-blue-600" />,
  MySQL: <SiMysql className="text-blue-700" />,
  MongoDB: <SiMongodb className="text-green-600" />,
};

const details = [
  { icon: FiMapPin, title: "Location", content: SITE.location },
  { icon: FiMail, title: "Email", content: SITE.email },
  { icon: FiPhone, title: "Phone", content: SITE.phone },
  {
    icon: FiBook,
    title: "Education",
    content: "B.E. E&TC (2022–2026) · CGPA 9.25/10",
  },
];

const skills = [
  "Spring Boot",
  "Java",
  "React.js",
  "Next.js",
  "Jenkins",
  "CI/CD",
  "MySQL",
  "MongoDB",
];

const skillColors = [
  "#FFD43B",
  "#FFD6C9",
  "#C5E8FF",
  "#E4D4FF",
  "#B8F5D4",
  "#FF8A7A",
  "#FFE566",
  "#D0EBFF",
];

export default function AboutSection() {
  return (
    <BrutalSection id="about" bg="#B8F5D4">
      <SectionHeader
        eyebrow="About me"
        title="Who is Aditya?"
        subtitle="Full stack developer & test automation engineer — I love turning ideas into bold, usable products."
        accent="#7AE582"
      />

      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, rotate: -2 }}
          whileInView={{ opacity: 1, rotate: -1 }}
          viewport={{ once: true }}
          className="relative mx-auto w-full max-w-md"
        >
          <BrutalCard bg="#FFD43B" tilt className="p-3 sm:p-4">
            <div className="relative aspect-square overflow-hidden rounded-xl brutal-border">
              <Image
                src="/1.png"
                alt="Aditya Thodsare"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </BrutalCard>
          <BrutalBadge color="#FF8A7A" className="absolute -bottom-3 -right-2 sm:right-4">
            Pune, India
          </BrutalBadge>
        </motion.div>

        <div className="space-y-6">
          <BrutalCard bg="#ffffff" className="p-5 sm:p-6">
            <h3 className="font-display mb-4 text-xl font-extrabold">
              Personal details
            </h3>
            <ul className="space-y-3">
              {details.map(({ icon: Icon, title, content }) => (
                <li
                  key={title}
                  className="flex items-start gap-3 rounded-xl bg-[#E8FFF0] p-3 brutal-border"
                >
                  <span className="rounded-lg bg-[#FFD43B] p-2 brutal-border">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-extrabold">{title}</p>
                    <p className="text-sm font-semibold text-[#0f0f0f]/80">
                      {content}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </BrutalCard>

          <BrutalCard bg="#ffffff" className="p-5 sm:p-6">
            <h3 className="font-display mb-4 text-xl font-extrabold">Skills</h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {skills.map((skill, i) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 rounded-xl brutal-border p-2.5 font-display text-xs font-bold sm:text-sm"
                  style={{ backgroundColor: skillColors[i % skillColors.length] }}
                >
                  <span className="text-lg">{skillIcons[skill]}</span>
                  {skill}
                </div>
              ))}
            </div>
          </BrutalCard>
        </div>
      </div>
    </BrutalSection>
  );
}
