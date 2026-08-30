import "../styles/Projects.scss";
import CarDekho from "../assets/CarDhakoproject.png";
import Deeplearig from "../assets/DeepNN.png";
import Googleshop from "../assets/GoolgleShop.png";
import Shopkart from "../assets/ShopKart.png";
import Brezora from "../assets/Brezora.png";
import Mahimai from "../assets/Mahimaicabsproject.png";
import Angel from "../assets/Angels.png";

const projects = [
  {
    image: CarDekho,
    title: "CarDekho Price Prediction",
    category: "Machine Learning",
    text:
      "Machine Learning project for predicting used-car selling prices using preprocessing, feature engineering, model training and hyperparameter tuning.",
    link: "https://github.com/Moses360-co/cardho",
  },
  {
    image: Deeplearig,
    title: "Deep Learning & Neural Networks",
    category: "Deep Learning",
    text:
      "Current learning project covering activation functions, neural networks, CNN, RNN, NLP, image recognition and speech recognition.",
    link: "#contact",
  },
  {
    image: Googleshop,
    title: "Python Django E-commerce",
    category: "Python / Django",
    text:
      "E-commerce application developed using Python and Django with product management, authentication, cart and database functionality.",
    link: "#contact",
  },
  {
    image: Shopkart,
    title: "React & Django E-commerce",
    category: "Full Stack",
    text:
      "Full-stack application using ReactJS frontend and Django backend with APIs, authentication, products and database management.",
    link: "#contact",
  },
  {
    image: Brezora,
    title: "Brezora-Online Room Booking",
    category: "Web Development",
    text:
      "Responsive room booking website using React and SCSS.",
    link: "#contact",
  },
  {
    image: Mahimai,
    title: "Mahimai Cabs-Online Travel Booking",
    category: "Web Development",
    text:
      "Responsive Travel booking website using React and SCSS.",
    link: "#contact",
  },
  {
    image: Angel,
    title: "Anglels Bulders",
    category: "Web Development",
    text:
      "Responsive Contraction website using React and SCSS.",
    link: "#contact",
  },
];

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="external-icon"
    >
      <path d="M14 5h5v5" />
      <path d="M10 14L19 5" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">

      {/* Background Decorations */}

      <span className="projects-orb projects-orb-one"></span>
      <span className="projects-orb projects-orb-two"></span>
      <span className="projects-orb projects-orb-three"></span>


      {/* Section Header */}

      <div className="projects-header reveal">

        <span className="section-label">
          MY WORK
        </span>

        <h2 className="sub-title">
          Latest <span>Projects</span>
        </h2>

        <p>
          A collection of web development, machine
          learning and deep learning projects that
          showcase my learning journey and practical
          experience.
        </p>

      </div>


      {/* Projects Grid */}

      <div className="portfolio-content">

        {projects.map((project, index) => {

          const isExternal = project.link.startsWith("http");

          return (
            <article
              className="project-card reveal"
              key={project.title}
              style={{
                "--card-index": index,
              }}
            >

              {/* Project Image */}

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="image-shine"></div>

              </div>


              {/* Glass Content */}

              <div className="layer">

                <span className="project-category">
                  {project.category}
                </span>

                <h5>
                  {project.title}
                </h5>

                <p>
                  {project.text}
                </p>


                {/* Project Link */}

                <a
                  href={project.link}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={`View ${project.title}`}
                  className="project-link"
                >
                  <ExternalIcon />
                </a>

              </div>

            </article>
          );
        })}

      </div>

    </section>
  );
}

export default Projects;