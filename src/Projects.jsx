import "./global.css";
import { useNavigate } from "react-router-dom";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";

const projects = [
  {
    id: 1,
    title: "Tuberculosis Detection (AI)",
    description: "AI model using Chest X-Ray imaging.",
    image: project1,
  },
  {
    id: 2,
    title: "Face Recognition Attendance",
    description: "Automated attendance using face recognition.",
    image: project2,
  },
  {
    id: 3,
    title: "Weather App",
    description: "Live weather updates with API.",
    image: project3,
  },
  {
    id: 4,
    title: "Text To Voice Converter",
    description: "Convert text into speech.",
    image: project4,
  },
  {
    id: 5,
    title: "My Portfolio Website",
    description: "Personal React portfolio.",
    image: project5,
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="projects-section" id="projects">
      <h2>My <span>Projects</span></h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <img src={project.image} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;