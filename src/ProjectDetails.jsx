import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./global.css";

const projectData = {
  3: {
    title: "Weather App",
    challenge:
      "Provide real-time weather information with a clean, responsive interface and fast API response.",
    solution:
      "Integrated OpenWeather API with React. Implemented dynamic UI updates, loading states, and error handling for real-world usage.",
    tools: ["React", "REST API", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/Ayyappan002/weather-app",
  },

  4: {
    title: "Text To Voice Converter",
    challenge:
      "Allow users to convert written text into natural-sounding speech directly in the browser without external software.",
    solution:
      "Used Web Speech API to generate speech from user input with selectable voices and real-time playback.",
    tools: ["React", "Web Speech API", "JavaScript", "CSS3"],
    github: "https://github.com/Ayyappan002/text-to-voice-converter",
  },

  5: {
    title: "My Portfolio Website",
    challenge:
      "Build a professional portfolio to showcase projects, skills, and experience while maintaining performance and responsiveness.",
    solution:
      "Developed using React with modular components, responsive layout, smooth scrolling, and modern UI design.",
    tools: ["React", "CSS3", "JavaScript", "Vite", "Responsive UI"],
    github: "https://github.com/Ayyappan002/my-portfolio",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id];

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="project-details">
        <h2>Project Not Found</h2>
      </div>
    );
  }

  return (
    <section className="project-details">
     <div className="back-container">
    <button className="back-btn" onClick={() => navigate("/")}>
      ← Back to Portfolio
    </button>
  </div>

      {/* Title */}
      <h1 className="project-title">{project.title}</h1>

      {/* Challenge */}
      <div className="project-block">
        <h2>The Challenge</h2>
        <p>{project.challenge}</p>
      </div>

      {/* Solution */}
      <div className="project-block">
        <h2>The Solution</h2>
        <p>{project.solution}</p>
      </div>

      {/* Tools */}
      <div className="project-block">
        <h2>Tools & Technologies</h2>
        <div className="tools">
          {project.tools.map((tool, index) => (
            <span key={index}>{tool}</span>
          ))}
        </div>
      </div>

      {/* GitHub Button */}
      <a href={project.github} target="_blank" className="view-btn">
        View Code on GitHub
      </a>
    </section>
  );
};

export default ProjectDetails;