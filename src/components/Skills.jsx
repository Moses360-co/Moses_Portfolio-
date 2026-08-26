import "../styles/Skills.scss";

const skills = [
  {
    name: "HTML",
    value: "88%",
    type: "html",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 2h18l-1.6 18.2L12 22l-7.4-1.8L3 2Z" />
        <path d="M7 6h10l-.3 2.2H9.5l.2 2h6.8l-.8 7.2-3.7 1-3.7-1-.3-3h2.2l.2 1.2 1.6.4 1.6-.4.3-2.3H8.2L7 6Z" />
      </svg>
    ),
  },

  {
    name: "CSS",
    value: "84%",
    type: "css",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 2h18l-1.6 18.2L12 22l-7.4-1.8L3 2Z" />
        <path d="M7 6h10v2.2H9.5l.2 2h7l-.7 6.8-4 1-4-1-.3-2.8H10l.1 1 1.9.5 1.9-.5.2-2H8.8L7 6Z" />
      </svg>
    ),
  },

  {
    name: "JavaScript",
    value: "72%",
    type: "javascript",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M7 17.2c.5.8 1.2 1.2 2.1 1.2 1 0 1.6-.5 1.6-1.3 0-.7-.4-1-1.5-1.5l-.5-.2c-1.5-.7-2.5-1.5-2.5-3.1 0-1.5 1.2-2.6 3-2.6 1.3 0 2.2.5 2.9 1.6l-1.5 1c-.3-.5-.7-.8-1.4-.8-.6 0-1 .3-1 .8 0 .6.4.8 1.3 1.2l.5.2c1.7.7 2.7 1.6 2.7 3.3 0 1.9-1.5 2.9-3.5 2.9-1.9 0-3.1-.9-3.7-2.1L7 17.2Z" />
        <path d="M15 10h4v1.6h-1.2v5.3c0 1-.7 1.6-1.8 1.6-.8 0-1.5-.4-1.8-1l1.3-.8c.1.3.3.4.5.4.3 0 .4-.2.4-.5v-5h-1.4V10Z" />
      </svg>
    ),
  },

  {
    name: "Python",
    value: "88%",
    type: "python",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C8.9 2 7.2 3.1 7.2 5.7v2.1h4.9v.8H5.7C3.2 8.6 2 10.2 2 13s1.2 4.4 3.7 4.4h2.1v-2.5c0-2.5 1.5-4.2 4.2-4.2h4.2c2.4 0 3.8-1.6 3.8-4V5.7C20 3.2 18.1 2 15.6 2H12Z" />
        <circle cx="9.2" cy="5.3" r="1" />
        <path d="M12 22c3.1 0 4.8-1.1 4.8-3.7v-2.1h-4.9v-.8h6.4c2.5 0 3.7-1.6 3.7-4.4s-1.2-4.4-3.7-4.4h-2.1v2.5c0 2.5-1.5 4.2-4.2 4.2H7.8c-2.4 0-3.8 1.6-3.8 4v1c0 2.5 1.9 3.7 4.4 3.7H12Z" />
        <circle cx="14.8" cy="18.7" r="1" />
      </svg>
    ),
  },

  {
    name: "React JS",
    value: "82%",
    type: "react",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="2.2" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.7" />
        <ellipse
          cx="12"
          cy="12"
          rx="9.5"
          ry="3.7"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="9.5"
          ry="3.7"
          transform="rotate(120 12 12)"
        />
      </svg>
    ),
  },

  {
    name: "Machine Learning",
    value: "76%",
    type: "machine-learning",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <circle cx="12" cy="13" r="2" />

        <path d="M12 7v4" />
        <path d="M10.5 14.2 6.7 17" />
        <path d="M13.5 14.2 17.3 17" />
        <path d="M7 18h10" />
      </svg>
    ),
  },

  {
    name: "Deep Learning",
    value: "68%",
    type: "deep-learning",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />

        <path d="M7.5 7.2 10.5 11" />
        <path d="M16.5 7.2 13.5 11" />
        <path d="M10.5 13 7.5 16.8" />
        <path d="M13.5 13 16.5 16.8" />
      </svg>
    ),
  },

  {
    name: "Scikit-learn",
    value: "75%",
    type: "scikit",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 15c-2-2.5-.5-6.2 2.7-7.1 1.3-3.1 5.5-4.1 7.8-1.5 3.5-.2 5.8 3.5 4.1 6.6-1.2 2.2-3.7 3.2-6.1 2.5" />
        <path d="M7 16.5c1.8 2.4 5.5 2.8 7.7.8" />
        <circle cx="7" cy="16.5" r="1.2" />
        <circle cx="15" cy="17.5" r="1.2" />
      </svg>
    ),
  },

  {
    name: "Data Preprocessing",
    value: "80%",
    type: "preprocessing",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16" />
        <path d="M7 12h10" />
        <path d="M10 19h4" />

        <circle cx="8" cy="5" r="1.5" />
        <circle cx="15" cy="12" r="1.5" />
        <circle cx="12" cy="19" r="1.5" />
      </svg>
    ),
  },

  {
    name: "Model Evaluation",
    value: "72%",
    type: "evaluation",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 3-4 3 2 5-7" />

        <circle cx="7" cy="15" r="1" />
        <circle cx="10" cy="11" r="1" />
        <circle cx="13" cy="13" r="1" />
        <circle cx="18" cy="6" r="1" />
      </svg>
    ),
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">

      {/* Background Orbs */}
      <span className="skills-orb skills-orb-one"></span>
      <span className="skills-orb skills-orb-two"></span>
      <span className="skills-orb skills-orb-three"></span>

      {/* Header */}
      <div className="skills-header reveal">

        <span className="section-label">
          MY EXPERTISE
        </span>

        <h2 className="sub-title">
          My <span>Skills</span>
        </h2>

        <p>
          A combination of web development,
          programming and growing Artificial
          Intelligence and Machine Learning skills.
        </p>

      </div>

      {/* Heading */}
      <div className="skills-heading reveal">

        <h3>
          <span className="heading-line"></span>

          Technical Skills

          <span className="heading-line"></span>
        </h3>

      </div>

      {/* Skills */}
      <div className="technical-bars">

        {skills.map((skill, index) => {

          const percentage = Number.parseInt(skill.value, 10);

          const level =
            percentage >= 80
              ? "Advanced"
              : percentage >= 70
              ? "Intermediate"
              : "Learning";

          return (
            <article
              className={`skill-card glass-card skill-${skill.type} reveal`}
              key={skill.name}
              style={{
                "--skill-index": index,
                "--skill-width": skill.value,
              }}
            >

              <div className="skill-reflection"></div>

              <div className="skill-shine"></div>

              {/* Skill Top */}
              <div className="skill-top">

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <div className="skill-info">

                  <span className="skill-name">
                    {skill.name}
                  </span>

                  <span className="skill-value">
                    {skill.value}
                  </span>

                </div>

              </div>

              {/* Progress */}
              <div className="progress-wrapper">

                <div className="progress-line">
                  <span></span>
                </div>

              </div>

              {/* Bottom */}
              <div className="skill-bottom">

                <span>
                  Proficiency
                </span>

                <span>
                  {level}
                </span>

              </div>

            </article>
          );
        })}

      </div>

    </section>
  );
}

export default Skills;