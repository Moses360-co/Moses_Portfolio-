import "../styles/Home.scss";

function Home() {
  return (
    <section className="home-section" id="home">

      {/* Background Effects */}
      <span className="home-orb home-orb-one"></span>
      <span className="home-orb home-orb-two"></span>
      <span className="home-orb home-orb-three"></span>

      {/* Main Glass Container */}
      <div className="home">

        <div className="home-content">

          {/* Welcome Badge */}
          <div className="home-label">
            <span className="label-dot"></span>
            <span>WELCOME TO MY PORTFOLIO</span>
          </div>

          {/* Greeting */}
          <h3 className="home-greeting">
            Hello 👋 and Thank You for Visiting
          </h3>

          {/* Main Heading */}
          <h1>
            I am <span>Moses Raj</span>
          </h1>

          {/* Role */}
          <h3 className="home-role">
            Web Developer
            <span className="role-divider">&</span>
            <span>AI/ML Learner</span>
          </h3>

          {/* Description */}
          <p className="home-description">
            Web Developer and AI/ML learner building modern,
            responsive web applications and practical machine
            learning projects. Currently expanding my skills in
            <strong> Deep Learning, Neural Networks, and Computer Vision.</strong>
          </p>

          {/* Technology Icons */}
          <div className="home-tech-icons">

            <div className="tech-icon" title="Python">
              <i className="bx bxl-python"></i>
            </div>

            <div className="tech-icon" title="React">
              <i className="bx bxl-react"></i>
            </div>

            <div className="tech-icon" title="JavaScript">
              <i className="bx bxl-javascript"></i>
            </div>

            <div className="tech-icon" title="HTML5">
              <i className="bx bxl-html5"></i>
            </div>

            <div className="tech-icon" title="CSS3">
              <i className="bx bxl-css3"></i>
            </div>

            <div className="tech-icon" title="GitHub">
              <i className="bx bxl-github"></i>
            </div>

            <div className="tech-icon ai-icon" title="Artificial Intelligence">
              <i className="bx bx-brain"></i>
            </div>

          </div>

          {/* Social Links */}
          <div className="home-sci">

            {/* Contact */}
            <a href="#contact" aria-label="Contact">

              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.2 3.6-7 8-7s8 2.8 8 7" />
              </svg>

              <span>Contact</span>

            </a>

            {/* Email */}
            <a
              href="mailto:handersonmoses360@gmail.com"
              aria-label="Email"
            >

              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>

              <span>Email</span>

            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/moses-raj-b10525233/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M8 10v6" />
                <path d="M8 7.5v.01" />
                <path d="M12 16v-3.5a2.5 2.5 0 0 1 5 0V16" />
                <path d="M12 10v6" />
              </svg>

              <span>LinkedIn</span>

            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Moses360-co"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M9 19c-4.5 1.5-5-2-7-2" />
                <path d="M15 22v-3.5c0-1 .1-1.5-.5-2.5 3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.8 5c.2-.6.5-1.8-.1-3.8 0 0-1.2-.4-4 1.5a13.8 13.8 0 0 0-7.4 0C5.5.8 4.3 1.2 4.3 1.2c-.6 2-.3 3.2-.1 3.8A5.5 5.5 0 0 0 2.7 9c0 5.4 3.5 6.6 6.8 7-.5.5-.8 1.2-.8 2.5V22" />
              </svg>

              <span>GitHub</span>

            </a>

          </div>

          {/* Buttons */}
          <div className="home-buttons">

            <a
              href="#about"
              className="btn-box primary-btn"
            >
              <span>About Me</span>

              <svg viewBox="0 0 24 24">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>

            </a>

            <a
              href="#contact"
              className="btn-box secondary-btn"
            >
              <span>Let's Connect</span>

              <svg viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z" />
                <path d="m4 5 8 7 8-7" />
              </svg>

            </a>

          </div>

          {/* Availability */}
          <div className="home-status">
            <span className="status-dot"></span>
            <span>Available for opportunities</span>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="scroll-indicator"
        aria-label="Scroll to About section"
      >
        <span className="scroll-mouse"></span>
        <small>Scroll</small>
      </a>

    </section>
  );
}

export default Home;