import { resume, profile } from "../data/resumeData";

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="section__inner">
        <p className="eyebrow">03 / Resume</p>
        <h2 className="section__title">Resume</h2>
        <p className="section__lede">{resume.summary}</p>

        <div className="resume__actions">
          <a
            className="btn btn--primary"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Download résumé (PDF)
          </a>
        </div>

        {/* Education */}
        <div className="resume__block">
          <h3 className="resume__heading">Education</h3>
          <div className="resume__card">
            <p className="resume__card-meta">{resume.education.duration}</p>
            <h4 className="resume__card-title">{resume.education.degree}</h4>
            <p className="resume__card-meta">
              {resume.education.school} · {resume.education.location}
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="resume__block">
          <h3 className="resume__heading">Professional Experience</h3>

          <div className="experience__header">
            <span className="experience__company">{resume.experience.company}</span>
            <span className="experience__meta">
              {resume.experience.location} · {resume.experience.duration}
            </span>
          </div>

          <div className="timeline">
            {resume.experience.roles.map((role) => (
              <div className="timeline__item" key={role.title}>
                <div className="timeline__head">
                  <span className="timeline__role">{role.title}</span>
                  <span className="timeline__duration">{role.duration}</span>
                </div>
                <ul className="timeline__points">
                  {role.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Project */}
        <div className="resume__block">
          <h3 className="resume__heading">Featured Project</h3>
          <div className="resume__card">
            <h4 className="resume__card-title">{resume.project.title}</h4>
            <div className="tag-row">
              {resume.project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <ul className="timeline__points">
              {resume.project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Achievements */}
        <div className="resume__block">
          <h3 className="resume__heading">Achievements</h3>
          <div className="achievements">
            {resume.achievements.map((item, i) => (
              <div className="achievement-card" key={item.title}>
                <span className="achievement-card__index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="achievement-card__title">{item.title}</h4>
                  <p className="achievement-card__description">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
