import { PROFILE } from "@/lib/profile";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-wrap" aria-labelledby="experience-title">
      <p className="section-label">&gt; experience.log</p>
      <h2 id="experience-title" className="section-title">Experience & education</h2>

      <div className="experience-list">
        {PROFILE.experience.map((item) => (
          <article className="experience-card" key={`${item.company}-${item.title}`}>
            <div className="experience-heading">
              <div>
                <h3>{item.title}</h3>
                <p className="muted">{item.company}</p>
              </div>
              <p className="date-chip">{item.period}</p>
            </div>
            <ul>
              {item.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          </article>
        ))}

        <article className="experience-card">
          <div className="experience-heading">
            <div>
              <h3>{PROFILE.education.degree}</h3>
              <p className="muted">{PROFILE.education.institution}</p>
            </div>
            <p className="date-chip">{PROFILE.education.period}</p>
          </div>
          <p>{PROFILE.education.location} · CGPA {PROFILE.education.cgpa}</p>
        </article>
      </div>
    </section>
  );
}
