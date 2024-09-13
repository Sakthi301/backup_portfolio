// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Education from './components/Education';
const App = () => {
  const [activeSection, setActiveSection] = useState('hero'); // State to track the active section

  return (
    <Router>
      <Navbar setActiveSection={setActiveSection} />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience/>
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certification">
          <Certification />
        </section>
        <section id="education">
          <Education/>
        </section>
        <section id="contact">
          <Contact />
        </section>
        
      </main>
      <Footer />
    </Router>
  );
};

export default App;
