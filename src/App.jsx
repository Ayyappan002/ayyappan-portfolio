import { Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Tools from "./Tools";
import Projects from "./Projects";
import ProjectDetails from "./ProjectDetails";
import Contact from "./Contact";

import "./global.css";


// This is your Home Page (Portfolio Sections)
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Tools />
      <Projects />
      <Contact />
    </>
  );
};

function App() {
  return (
    <>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>

      <SpeedInsights />
    </>
  );
}

export default App;