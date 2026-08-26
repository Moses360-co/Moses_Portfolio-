import { useState } from "react";
import "../styles/Contact.scss";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = `
Name: ${form.name}

Email: ${form.email}

Message:
${form.message}
`;

    window.location.href =
      `mailto:handersonmoses360@gmail.com` +
      `?subject=${encodeURIComponent(
        form.subject || "Portfolio Contact"
      )}` +
      `&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact-section" id="contact">

      {/* Background Decorations */}
      <span className="contact-orb contact-orb-one"></span>
      <span className="contact-orb contact-orb-two"></span>
      <span className="contact-orb contact-orb-three"></span>

      <div className="contact">

        {/* =================================================
            CONTACT INFORMATION
        ================================================= */}

        <div className="contact-text">

          {/* Label */}
          <div className="contact-label">
            <span className="contact-label-line"></span>
            <span>GET IN TOUCH</span>
          </div>

          {/* Heading */}
          <h2>
            Contact <span>Me</span>
          </h2>

          <h4>
            Let's Work Together
          </h4>

          <p>
            I am looking for opportunities where I can
            contribute as a Web Developer, Python Developer,
            or AI/ML Developer.
          </p>


          {/* =================================================
              CONTACT DETAILS
          ================================================= */}

          <div className="contact-list">

            {/* Email */}
            <a
              href="mailto:handersonmoses360@gmail.com"
              className="contact-item"
            >

              <div className="contact-item-icon">

                <svg viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />

                  <path d="M3 7l9 6 9-6" />
                </svg>

              </div>

              <div className="contact-item-content">
                <small>Email</small>

                <span>
                  handersonmoses360@gmail.com
                </span>
              </div>

            </a>


            {/* Phone */}
            <a
              href="tel:9361730447"
              className="contact-item"
            >

              <div className="contact-item-icon">

                <svg viewBox="0 0 24 24">
                  <path d="M6 3h4l2 5-2.5 1.5a14 14 0 0 0 5 5L16 12l5 2v4c0 1.1-.9 2-2 2C10.7 20 4 13.3 4 5c0-1.1.9-2 2-2z" />
                </svg>

              </div>

              <div className="contact-item-content">
                <small>Phone</small>

                <span>
                  +91 93617 30447
                </span>
              </div>

            </a>

          </div>


          {/* =================================================
              SOCIAL ICONS
          ================================================= */}

          <div className="contact-icon">

            {/* Email */}
            <a
              href="mailto:handersonmoses360@gmail.com"
              aria-label="Email"
              title="Email"
            >

              <svg viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                />

                <path d="M3 7l9 6 9-6" />
              </svg>

            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/moses-raj-b10525233/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >

              <svg viewBox="0 0 24 24">

                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="2"
                />

                <path d="M8 10v6" />
                <path d="M8 7.5v.01" />

                <path d="M12 16v-3.5a2.5 2.5 0 0 1 5 0V16" />

                <path d="M12 10v6" />

              </svg>

            </a>


            {/* GitHub */}
            <a
              href="https://github.com/Moses360-co"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >

              <svg viewBox="0 0 24 24">

                <path d="M9 19c-4.5 1.5-5-2-7-2" />

                <path
                  d="M15 22v-3.5c0-1 .1-1.5-.5-2.5
                  3.3-.4 6.8-1.6 6.8-7
                  A5.5 5.5 0 0 0 19.8 5
                  c.2-.6.5-1.8-.1-3.8
                  0 0-1.2-.4-4 1.5
                  a13.8 13.8 0 0 0-7.4 0
                  C5.5.8 4.3 1.2 4.3 1.2
                  c-.6 2-.3 3.2-.1 3.8
                  A5.5 5.5 0 0 0 2.7 9
                  c0 5.4 3.5 6.6 6.8 7
                  -.5.5-.8 1.2-.8 2.5V22"
                />

              </svg>

            </a>

          </div>

        </div>


        {/* =================================================
            CONTACT FORM
        ================================================= */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          {/* Form Header */}
          <div className="form-header">

            <div className="form-icon">

              <svg viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z" />
                <path d="m4 5 8 7 8-7" />
              </svg>

            </div>

            <div>
              <h3>Send Me a Message</h3>

              <p>
                Have a project or opportunity in mind?
                Let's connect.
              </p>
            </div>

          </div>


          {/* Name */}
          <div className="input-group">

            <label htmlFor="name">
              Your Name
            </label>

            <div className="input-box">

              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.2 3.6-7 8-7s8 2.8 8 7" />
              </svg>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          {/* Email */}
          <div className="input-group">

            <label htmlFor="email">
              Email Address
            </label>

            <div className="input-box">

              <svg viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                />

                <path d="M3 7l9 6 9-6" />
              </svg>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          {/* Subject */}
          <div className="input-group">

            <label htmlFor="subject">
              Subject
            </label>

            <div className="input-box">

              <svg viewBox="0 0 24 24">
                <path d="M4 5h16v14H4z" />
                <path d="M8 9h8" />
                <path d="M8 13h5" />
              </svg>

              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="What would you like to discuss?"
                value={form.subject}
                onChange={handleChange}
              />

            </div>

          </div>


          {/* Message */}
          <div className="input-group">

            <label htmlFor="message">
              Message
            </label>

            <div className="input-box textarea-box">

              <svg viewBox="0 0 24 24">
                <path d="M4 5h16v14H4z" />
                <path d="M8 9h8" />
                <path d="M8 13h6" />
              </svg>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          {/* Submit */}
          <button type="submit">

            <span>Send Message</span>

            <svg viewBox="0 0 24 24">
              <path d="M4 4l17 8-17 8 4-8z" />
              <path d="M4 12h12" />
            </svg>

          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;