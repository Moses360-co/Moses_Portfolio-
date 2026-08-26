import "../styles/Services.scss";

const services = [
  {
    icon: "🐍",
    title: "Python",
    text: "Python programming, OOP, file handling, databases and application development.",
  },
  {
    icon: "⚙️",
    title: "Django",
    text: "Backend development, authentication, APIs, database management and business logic.",
  },
  {
    icon: "💻",
    title: "Front End",
    text: "Responsive interfaces using HTML, CSS, JavaScript and modern UI techniques.",
  },
  {
    icon: "⚛️",
    title: "React JS",
    text: "Modern interfaces using React components, JSX, props, state, hooks and reusable components.",
  },
  {
    icon: "🟨",
    title: "JavaScript",
    text: "ES6+, DOM manipulation, events, asynchronous programming and interactive applications.",
  },
  {
    icon: "🗄️",
    title: "Databases",
    text: "Working with MySQL and PostgreSQL for storing and managing application data.",
  },
  {
    icon: "🧠",
    title: "Machine Learning",
    text: "Learning preprocessing, feature engineering, model training, evaluation and tuning.",
  },
  {
    icon: "🤖",
    title: "Deep Learning",
    text: "Currently learning neural networks, activation functions, CNN, RNN, NLP and image recognition.",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">

      {/* Background Decorations */}
      <span className="services-orb services-orb-one"></span>
      <span className="services-orb services-orb-two"></span>
      <span className="services-orb services-orb-three"></span>

      {/* Header */}
      <div className="services-header reveal">

        <span className="section-label">
          WHAT I DO
        </span>

        <h2 className="sub-title">
          My <span>Services</span>
        </h2>

        <p>
          Technologies and development areas I use
          while building modern web applications
          and exploring AI and Machine Learning.
        </p>

      </div>

      {/* Services Grid */}
      <div className="services-list">

        {services.map((service, index) => (
          <article
            className="service-card reveal"
            key={service.title}
            style={{
              "--card-index": index,
            }}
          >

            {/* Glass Shine */}
            <div className="service-shine"></div>

            {/* Top Reflection */}
            <div className="service-reflection"></div>

            {/* Icon */}
            <div className="service-icon">
              <span>{service.icon}</span>
            </div>

            {/* Number */}
            <span className="service-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Content */}
            <div className="service-content">

              <h2>
                {service.title}
              </h2>

              <p>
                {service.text}
              </p>

              <a href="#contact">
                <span>Learn More</span>

                <span className="arrow-icon">
                  →
                </span>
              </a>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Services;