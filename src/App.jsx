import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";

import Projects from "./Projects";
import Contact from "./Contact";
import "./global.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact/>
      <SpeedInsights />
    </>
  );
}

export default App;