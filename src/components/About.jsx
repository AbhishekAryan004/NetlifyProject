import { about } from "../data/resumeData";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section__inner">
        <p className="eyebrow">01 / About</p>
        <h2 className="section__title">About Me</h2>

        <div className="about__grid">
          <div className="about__body">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="facts">
            {about.facts.map((fact) => (
              <div className="facts__row" key={fact.label}>
                <span className="facts__label">{fact.label}</span>
                <span className="facts__value">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
