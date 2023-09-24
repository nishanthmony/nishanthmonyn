import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/projects'
import Demo from './components/Demo'
import Footer from './components/Footer'
import { Education } from './components/education'
import { Skills } from './components/skills'
import { Internships } from './components/internships'
import { Workshops } from './components/workshops'
import Cocurricular from './components/cocurricular'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Internships />
      <Projects />
      <Workshops />
      <Cocurricular />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;