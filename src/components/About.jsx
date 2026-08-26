import "../styles/About.scss";
import aboutBackground from "../assets/about-background.jpg";
import profileImage from "../assets/Profile.jpg";

function About() {
  return (
    <section
      className="about-section"
      id="about"
      style={{ "--about-bg": `url(${aboutBackground})` }}
    >
      {/* Background Decorations */}
      <span className="about-orb about-orb-one"></span>
      <span className="about-orb about-orb-two"></span>

      <div className="about">

        {/* =========================
            PROFILE IMAGE
        ========================= */}
        <div className="about-img">
          <div className="image-glass">

            <div className="image-shine"></div>

            <img
              src={profileImage}
              alt="Moses Raj - Web Developer and AI/ML Learner"
            />

            {/* Floating Profile Badge */}
            <div className="profile-badge">
              <span className="badge-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 7L10 17l-5-5" />
                </svg>
              </span>

              <div>
                <strong>Developer</strong>
                <small>Available for work</small>
              </div>
            </div>

          </div>
        </div>


        {/* =========================
            ABOUT CONTENT
        ========================= */}
        <div className="about-content">

          {/* Label */}
          <div className="about-label">
            <span className="label-line"></span>
            <span>ABOUT ME</span>
          </div>


          {/* Title */}
          <h2 className="sub-title">
            Building Digital
            <span> Experiences</span>
          </h2>


          {/* Role */}
          <h4>
            Web Developer
            <b>|</b>
            Python Full Stack Developer
            <b>|</b>
            AI &amp; ML Learner
          </h4>


          {/* Description */}
          <p>
            I am <strong>Moses Raj</strong>, a passionate Web Developer
            with a strong foundation in Python, React.js, Django,
            JavaScript, and database technologies.
          </p>

          <p>
            I enjoy creating responsive, user-friendly web applications
            with clean interfaces and smooth user experiences. I work
            across frontend and backend technologies to build complete
            web solutions.
          </p>

          <p>
            Alongside web development, I am continuously learning
            Artificial Intelligence, Machine Learning, and Deep Learning
            to build smarter and more intelligent applications.
          </p>


          {/* =========================
              SKILLS
          ========================= */}
          <div className="about-skills">

            <span>
              <i>🐍</i>
              Python
            </span>

            <span>
              <i>⚛</i>
              React.js
            </span>

            <span>
              <i>◆</i>
              Django
            </span>

            <span>
              <i>🧠</i>
              Machine Learning
            </span>

            <span>
              <i>◈</i>
              Deep Learning
            </span>

          </div>


          {/* =========================
              CONNECT BUTTON
          ========================= */}
          <a
            href="#contact"
            className="about-btn"
          >
            <span>Let's Connect</span>

            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>

        </div>

      </div>
    </section>
  );
}

export default About;