import "./global.css";
import { FaHome, FaUser, FaGraduationCap, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { FiCode } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="nav">
      {/* Logo */}
      <div className="logo">
        <FiCode className="logo-icon" />
        <h2>
          Ayyappan<span>.</span>
        </h2>
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <li className="active">
          <a href="#home">
            <FaHome /> Home
          </a>
        </li>
        <li>
          <a href="#about">
            <FaUser /> About Me
          </a>
        </li>
        <li>
          <a href="#education">
            <FaGraduationCap /> Education
          </a>
        </li>
        <li>
          <a href="#skills">
            <FaCode /> Skills
          </a>
        </li>
        <li>
          <a href="#projects">
            <FaProjectDiagram /> Projects
          </a>
        </li>
        <li>
          <a href="#contact">
            <FaEnvelope /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;