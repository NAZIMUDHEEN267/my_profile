import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import ProjectsSection from './components/ProjectSection'
import SkillsSection from './components/SkillSection'
import ExperienceSection from './components/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <Contact />
      <Footer />
    </>
  )
}

export default App
