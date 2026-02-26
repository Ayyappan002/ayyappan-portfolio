import "./global.css";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project6 from "./assets/project5.png";

const projects = [
  {
    title: "Tuberculosis Detection (AI)",
    description:
      "AI model using Chest X-Ray imaging for tuberculosis screening and early detection.",
    image: project1,
    tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
  },
  {
    title: "Face Recognition Attendance",
    description:
      "Automated student attendance system using computer vision and face recognition.",
    image: project2,
    tech: ["Python", "OpenCV", "Machine Learning"],
  },
  {
    title: "Weather App",
    description:
      "React app with API integration and live weather updates with dynamic UI.",
    image: project3,
    tech: ["React", "API", "CSS", "JavaScript"],
  },
  {
    title: "Text To Voice Converter",
    description:
      "Web application that converts written text into speech using speech synthesis API.",
    image: project4,
    tech: ["JavaScript", "Web Speech API", "HTML", "CSS"],
  },
  {
    title: "My Portfolio Website",
    description:
      "Personal portfolio website built with React showcasing skills, projects, and experience.",
    image: project6,
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-title">
        <h2>
          My <span>Projects</span>
        </h2>
        <p>Here are some of my recent works and projects</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;