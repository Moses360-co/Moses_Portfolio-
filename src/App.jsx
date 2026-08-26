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
      <Navbar />

      <main>
        <Home />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        Developed by Moses © 2026
      </footer>

      <a href="#home" className="top">
        <i className="bx bx-up-arrow-alt"></i>
      </a>
    </>
  );
}

export default App;