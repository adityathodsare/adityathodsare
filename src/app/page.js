import Image from "next/image";
import {
  FaAward,
  FaBrain,
  FaCloud,
  FaCubes,
  FaDatabase,
  FaEnvelope,
  FaExchangeAlt,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaProjectDiagram,
  FaRobot,
  FaRoute,
  FaSearch,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import {
  SiBitbucket,
  SiCypress,
  SiDocker,
  SiFastapi,
  SiGithub,
  SiGrafana,
  SiJenkins,
  SiJira,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiSpringboot,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { PROFILE } from "@/lib/profile";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import ExperienceDuration from "@/components/ExperienceDuration";
import ProjectCarousel from "@/components/ProjectCarousel";
import ResumeLink from "@/components/ResumeLink";
import ResumeClickCount from "@/components/ResumeClickCount";

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: PROFILE.name,
      url: PROFILE.canonicalUrl,
      jobTitle: PROFILE.role,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "India",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: PROFILE.education.institution,
      },
      knowsAbout: [
        "Java",
        "Spring Boot",
        "Next.js",
        "React",
        "FastAPI",
        "microservices",
        "test automation",
        "RAG",
        "IoT",
      ],
      sameAs: [PROFILE.github, PROFILE.linkedin],
    },
    { "@type": "WebSite", name: PROFILE.name, url: PROFILE.canonicalUrl },
  ],
};

const technologyIcons = {
  AWS: FaCloud,
  Java: FaJava,
  Python: SiPython,
  TypeScript: SiTypescript,
  SQL: FaDatabase,
  "Spring Boot": SiSpringboot,
  FastAPI: SiFastapi,
  "REST APIs": TbApi,
  Microservices: FaCubes,
  "Event-driven architecture": FaProjectDiagram,
  RabbitMQ: SiRabbitmq,
  "Next.js": SiNextdotjs,
  React: SiReact,
  HTML: FiCode,
  CSS: FiCode,
  "Tailwind CSS": FiCode,
  RAG: FaSearch,
  "LLM API integration": FaBrain,
  MCP: FaExchangeAlt,
  "Agentic workflows": FaRobot,
  LanceDB: FaDatabase,
  DuckDB: FaDatabase,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Playwright: FaRoute,
  Cypress: SiCypress,
  "End-to-end testing": FaSearch,
  "Page Object Model": FiCode,
  Allure: FaAward,
  Docker: SiDocker,
  "CI/CD": FaExchangeAlt,
  Jenkins: SiJenkins,
  "Azure DevOps": FaCloud,
  "Bitbucket Pipelines": SiBitbucket,
  Git: FiCode,
  GitHub: SiGithub,
  Terraform: SiTerraform,
  Grafana: SiGrafana,
  Jira: SiJira,
};


export default function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        {/* ── Hero ── */}
        <section id="home" className="hero section-wrap">
          <p className="section-label">
            <FaMapMarkerAlt aria-hidden="true" style={{ display: "inline", marginRight: 6 }} />
            Pune, India
          </p>
          <h1>
            {PROFILE.name}
            <span className="accent">.</span>
          </h1>
          <p className="hero-role">{PROFILE.headline}</p>
          <p className="hero-summary">{PROFILE.summary}</p>
          {PROFILE.openToRoles && (
            <p className="hero-badge">Open to internships &amp; full-time roles</p>
          )}
          <div className="actions">
            <a className="button primary" href="#projects">
              Explore Projects
            </a>
            <ResumeLink
              className="button"
              href={PROFILE.resumeUrl}
              download={PROFILE.resumeFilename}
            >
              Download Resume
            </ResumeLink>
            <a className="button" href="#contact">
              Contact Me
            </a>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="section-wrap">
          <h2 className="section-title">About</h2>
          <div className="about-layout">
            <Image
              className="portrait"
              src={PROFILE.photoUrl}
              alt="Portrait of Aditya Thodsare"
              width={520}
              height={693}
              sizes="(max-width: 700px) 60vw, 260px"
              priority
            />
            <div>
              <p className="prose">{PROFILE.about}</p>
              <div className="focus-areas">
                {PROFILE.focusAreas.map((area) => (
                  <div className="focus-area" key={area.label}>
                    <strong>{area.label}</strong>
                    <p>{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="section-wrap">
          <h2 className="section-title">Experience</h2>
          {PROFILE.experience.map((item) => (
            <article className="card" key={item.company + item.title}>
              <div className="card-heading">
                <div>
                  <h3>{item.title}</h3>
                  <p className="muted" style={{ margin: 0, fontSize: "0.9rem" }}>
                    {item.company} · {item.location}
                  </p>
                </div>
                <time>
                  {item.period}
                  {item.periodStart && (
                    <ExperienceDuration startDate={item.periodStart} />
                  )}
                </time>
              </div>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="section-wrap">
          <h2 className="section-title">Projects</h2>
          <ProjectCarousel projects={PROFILE.projects} />
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="section-wrap">
          <h2 className="section-title">Skills</h2>
          <p className="skills-intro">Technologies and tools used in projects and professional work.</p>
          <div className="skill-grid">
            {PROFILE.skills.map((group) => (
              <article className="card skill-card" key={group.group}>
                <h3>{group.group}</h3>
                <ul className="skill-list">
                  {group.items.map((skill) => {
                    const Icon = technologyIcons[skill] || FiCode;
                    return (
                      <li key={skill}>
                        <Icon aria-hidden="true" />
                        <span>{skill}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ── Education ── */}
        <section id="education" className="section-wrap">
          <h2 className="section-title">Education</h2>
          <article className="card education-primary">
            <div className="card-heading">
              <div>
                <h3>{PROFILE.education.degree}</h3>
                <p className="muted" style={{ margin: 0, fontSize: "0.9rem" }}>
                  {PROFILE.education.institution} · {PROFILE.education.location}
                </p>
              </div>
              <time>{PROFILE.education.period}</time>
            </div>
            <p style={{ margin: 0 }}>
              <strong>CGPA:</strong> {PROFILE.education.cgpa}
            </p>
          </article>
          {PROFILE.education.earlierEducation.map((item) => (
            <article className="card education-earlier" key={item.qualification}>
              <div className="card-heading">
                <div>
                  <h3>{item.qualification}</h3>
                  <p className="muted" style={{ margin: 0, fontSize: "0.9rem" }}>
                    {item.institution}
                  </p>
                </div>
                <time>{item.period}</time>
              </div>
              <p style={{ margin: 0 }}>
                <strong>Result:</strong> {item.result}
              </p>
            </article>
          ))}
        </section>

        <ContactSection />
      </main>

      <footer className="footer">
        <p style={{ margin: 0 }}>
          {PROFILE.name} · © {new Date().getFullYear()}
        </p>
        <ResumeClickCount />
        <nav className="footer-links" aria-label="Footer navigation">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin aria-hidden="true" />
            LinkedIn
          </a>
          <a href={`mailto:${PROFILE.email}`}>
            <FaEnvelope aria-hidden="true" />
            Email
          </a>
          <a href="#home">Back to top ↑</a>
        </nav>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
