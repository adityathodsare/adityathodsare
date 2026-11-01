import Image from "next/image";
import { FaDocker, FaEnvelope, FaGithub, FaJava, FaLinkedin, FaPython, FaReact, FaYoutube } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { SiFastapi, SiGrafana, SiJenkins, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiPostgresql, SiRabbitmq, SiRaspberrypi, SiSpringboot, SiTerraform, SiTypescript } from "react-icons/si";
import { PROFILE } from "@/lib/profile";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: PROFILE.name,
      url: PROFILE.canonicalUrl,
      jobTitle: "Full Stack Developer",
      address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "India" },
      alumniOf: { "@type": "CollegeOrUniversity", name: PROFILE.education.institution },
      knowsAbout: ["Java", "Spring Boot", "Next.js", "React", "FastAPI", "microservices", "test automation"],
      sameAs: [PROFILE.github, PROFILE.linkedin],
    },
    { "@type": "WebSite", name: PROFILE.name, url: PROFILE.canonicalUrl },
  ],
};

const technologyIcons = {
  Java: FaJava,
  Python: FaPython,
  "Spring Boot": SiSpringboot,
  FastAPI: SiFastapi,
  "Next.js": SiNextdotjs,
  React: FaReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  RabbitMQ: SiRabbitmq,
  Docker: FaDocker,
  Jenkins: SiJenkins,
  Grafana: SiGrafana,
  Terraform: SiTerraform,
  "Raspberry Pi": SiRaspberrypi,
};

function ServiceIcon({ href }) {
  const Icon = href.includes("github.com") ? FaGithub : href.includes("youtu") ? FaYoutube : href.includes("linkedin.com") ? FaLinkedin : FiExternalLink;
  return <Icon aria-hidden="true" />;
}

function monthDuration(startDate) {
  const start = new Date(`${startDate}T00:00:00`);
  const now = new Date();
  const months = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
  return `${months} ${months === 1 ? "month" : "months"}`;
}

export default function Portfolio() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar />
    <main id="main">
      <section id="home" className="hero section-wrap">
        <p className="section-label">Pune, India</p>
        <h1>{PROFILE.name}<span className="accent">.</span></h1>
        <p className="hero-role">{PROFILE.headline}</p>
        <p className="hero-summary">{PROFILE.summary}</p>
        {PROFILE.openToRoles && <p className="status-badge">Open to internships / full-time roles</p>}
        <div className="actions">
          <a className="button primary" href="#projects">View projects</a>
          <a className="button" href={PROFILE.resumeUrl} download={PROFILE.resumeFilename}>Download resume</a>
          <a className="button" href="#contact">Contact me</a>
        </div>
      </section>

      <section id="about" className="section-wrap">
        <h2 className="section-title">About</h2>
        <div className="about-layout">
          <Image className="portrait" src={PROFILE.photoUrl} alt="Portrait of Aditya Thodsare" width={467} height={535} sizes="(max-width: 700px) 70vw, 280px" />
          <p className="prose">{PROFILE.about}</p>
        </div>
      </section>

      <section id="experience" className="section-wrap">
        <h2 className="section-title">Experience</h2>
        {PROFILE.experience.map((item) => <article className="card" key={item.company + item.title}>
          <div className="card-heading"><div><h3>{item.title}</h3><p className="muted">{item.company} · Pune, India</p></div><time>{item.period}{item.periodStart && <span className="duration">{monthDuration(item.periodStart)}</span>}</time></div>
          <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
        </article>)}
        <h2 className="section-title education-title">Education</h2>
        <article className="card"><div className="card-heading"><div><h3>{PROFILE.education.degree}</h3><p className="muted">{PROFILE.education.institution}</p></div><time>{PROFILE.education.period}</time></div><p>{PROFILE.education.description}</p><p><strong>CGPA:</strong> {PROFILE.education.cgpa}</p></article>
        {PROFILE.education.earlierEducation.map((item) => <article className="card education-card" key={item.qualification}><div className="card-heading"><div><h3>{item.qualification}</h3><p className="muted">{item.institution}</p></div><time>{item.period}</time></div><p><strong>Result:</strong> {item.result}</p></article>)}
      </section>

      <section id="projects" className="section-wrap">
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">{PROFILE.projects.map((project) => <article className="card project-card" key={project.id}>
          {project.image && <Image src={project.image} alt={project.imageAlt} width={760} height={420} sizes="(max-width: 760px) 100vw, 50vw" />}
          <h3>{project.title}</h3><p className="muted">{project.problem}</p><p>{project.contribution}</p><p><strong>Evidence:</strong> {project.evidence}</p>
          <ul className="chips">{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
          <div className="link-row">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer"><ServiceIcon href={link.href} /> {link.label}</a>)}</div>
        </article>)}</div>
      </section>

      <section id="skills" className="section-wrap">
        <h2 className="section-title">Skills</h2>
        <p className="muted">Used in projects and work</p>
        <div className="skill-grid">{PROFILE.skills.map((group) => <article className="card skill-card" key={group.group}><h3>{group.group}</h3><ul className="skill-list">{group.items.map((skill) => { const Icon = technologyIcons[skill]; return <li key={skill}>{Icon && <Icon aria-hidden="true" />}<span>{skill}</span></li>; })}</ul></article>)}</div>
      </section>
      <ContactSection />
    </main>
    <footer className="footer"><p>{PROFILE.name} · © {new Date().getFullYear()}</p><div className="link-row"><a href={PROFILE.github}><FaGithub aria-hidden="true" /> GitHub</a><a href={PROFILE.linkedin}><FaLinkedin aria-hidden="true" /> LinkedIn</a><a href={`mailto:${PROFILE.email}`}><FaEnvelope aria-hidden="true" /> Email</a><a href="#home">Back to top ↑</a></div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
  </>;
}
