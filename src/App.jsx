import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./styles/App.scss";

function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Home />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <span>Developed by</span>
        <strong>Moses</strong>
        <span>© 2026</span>
      </footer>

      {/* Back To Top */}
      <a href="#home" className="top" aria-label="Back to top">
        <i className="bx bx-up-arrow-alt"></i>
      </a>
    </>
  );
}

export default App;