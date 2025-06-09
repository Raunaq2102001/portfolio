import React from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import SoftSkills from "./sections/SoftSkills";
import { HorizontalCard } from "./sections/HorizontalCard";
import EmailComposer from "./sections/EmailComposer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact /> 
      
     
    </div>
  );
}
