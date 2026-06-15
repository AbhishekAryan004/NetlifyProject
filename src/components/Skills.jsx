import { skills } from "../data/resumeData";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__inner">
        <p className="eyebrow">02 / Skills</p>
        <h2 className="section__title">Skills</h2>
        <p className="section__lede">
          A snapshot of the tools and technologies I work with most. Levels
          below are approximate — happy to go deeper on any of these.
        </p>

        <div className="skills__bars">
          {skills.map((skill) => (
            <div className="skill-bar" key={skill.name}>
              <div className="skill-bar__head">
                <span className="skill-bar__name">{skill.name}</span>
                <span className="skill-bar__percent">{skill.percent}%</span>
              </div>
              <div
                className="skill-bar__track"
                role="progressbar"
                aria-label={skill.name}
                aria-valuenow={skill.percent}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="skill-bar__fill"
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
