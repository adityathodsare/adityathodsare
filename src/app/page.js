import Image from "next/image";
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

export default function Portfolio() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar />
    <main id="main">
      <section id="home" className="hero section-wrap">
        <p className="section-label">&gt; portfolio.init — Pune, India</p>
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
        <p className="section-label">&gt; about.md</p><h2 className="section-title">About</h2>
        <p className="prose">{PROFILE.about}</p>
      </section>

      <section id="experience" className="section-wrap">
        <p className="section-label">&gt; experience.log</p><h2 className="section-title">Experience & education</h2>
        {PROFILE.experience.map((item) => <article className="card" key={item.company + item.title}>
          <div className="card-heading"><div><h3>{item.title}</h3><p className="muted">{item.company}</p></div><time>{item.period}</time></div>
          <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
        </article>)}
        <article className="card"><div className="card-heading"><div><h3>{PROFILE.education.degree}</h3><p className="muted">{PROFILE.education.institution}</p></div><time>{PROFILE.education.period}</time></div><p>{PROFILE.education.location} · CGPA {PROFILE.education.cgpa}</p></article>
        {PROFILE.needsConfirmation.filter((item) => item.startsWith("Testrig dates")).map((item) => <p className="confirmation" key={item}>Date to confirm: {item}</p>)}
      </section>

      <section id="projects" className="section-wrap">
        <p className="section-label">&gt; projects/</p><h2 className="section-title">Selected projects</h2>
        <div className="project-grid">{PROFILE.projects.map((project) => <article className="card project-card" key={project.id}>
          {project.image && <Image src={project.image} alt={project.imageAlt} width={760} height={420} sizes="(max-width: 760px) 100vw, 50vw" />}
          <h3>{project.title}</h3><p className="muted">{project.problem}</p><p>{project.contribution}</p><p><strong>Evidence:</strong> {project.evidence}</p>
          <ul className="chips">{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
          <div className="link-row">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>
        </article>)}</div>
      </section>

      <section id="skills" className="section-wrap">
        <p className="section-label">&gt; skills.json</p><h2 className="section-title">Skills</h2>
        <p className="muted">Used in projects and work</p><div className="skill-grid">{PROFILE.skills.map((group) => <article className="card" key={group.group}><h3>{group.group}</h3><p>{group.items.join(" · ")}</p></article>)}</div>
        <h3>Certifications</h3><ul>{PROFILE.certifications.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
      <ContactSection />
    </main>
    <footer className="footer"><p>{PROFILE.name} · © {new Date().getFullYear()}</p><div className="link-row"><a href={PROFILE.github}>GitHub</a><a href={PROFILE.linkedin}>LinkedIn</a><a href={`mailto:${PROFILE.email}`}>Email</a><a href="#home">Back to top ↑</a></div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
  </>;
}
