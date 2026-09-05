
import { useEffect, useState } from "react";
import "../styles/Navbar.scss";

const links = [
  ["home", "Home"],
  ["about", "About Me"],
  ["services", "Services"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["contact", "Contact"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      links.forEach(([id]) => {
        const section = document.getElementById(id);

        if (
          section &&
          window.scrollY >= section.offsetTop - 220
        ) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <header className="header">

      {/* =================================================
          LOGO
      ================================================= */}
      <a
        href="#home"
        className="logo"
        onClick={() => handleNavClick("home")}
        aria-label="Moses Raj Home"
      >
        <span className="logo-mark">M</span>

        <strong>Moses Raj</strong>
      </a>

      {/* =================================================
          NAVIGATION
      ================================================= */}
      <nav
        className={`navbar ${menuOpen ? "open" : ""}`}
        aria-label="Main navigation"
      >
        {links.map(([id, name]) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
            onClick={() => handleNavClick(id)}
          >
            <span>{name}</span>
          </a>
        ))}
      </nav>

      {/* =================================================
          MOBILE MENU BUTTON
      ================================================= */}
      <button
        type="button"
        className={`menu-btn ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={
          menuOpen
            ? "Close navigation"
            : "Open navigation"
        }
        aria-expanded={menuOpen}
      >
        {menuOpen ? (
          /* Close SVG */
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12" />
            <path d="M18 6L6 18" />
          </svg>
        ) : (
          /* Menu SVG */
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
        )}
      </button>

    </header>
  );
}

export default Navbar;

