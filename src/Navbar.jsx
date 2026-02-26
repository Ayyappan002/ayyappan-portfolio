import { useState } from "react";
import "./global.css";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { FiCode } from "react-icons/fi";

const Navbar = () => {
  // ✅ Mobile Menu State
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Close menu after clicking (better UX)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      {/* Logo */}
      <div className="logo">
        <FiCode className="logo-icon" />
        <h2>
          Ayyappan<span>.</span>
        </h2>
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Menu */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={handleLinkClick}>
            <FaHome /> Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={handleLinkClick}>
            <FaUser /> About Me
          </a>
        </li>

        <li>
          <a href="#education" onClick={handleLinkClick}>
            <FaGraduationCap /> Education
          </a>
        </li>

        <li>
          <a href="#skills" onClick={handleLinkClick}>
            <FaCode /> Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={handleLinkClick}>
            <FaProjectDiagram /> Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={handleLinkClick}>
            <FaEnvelope /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;