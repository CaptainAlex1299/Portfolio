import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import AboutMe from './components/AboutMe.tsx'
import ProjectsComp from './components/ProjectsComp.tsx'
import SkillsSection from './components/SkillsSection.tsx'
import ContactSection from './components/ContactSection.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <AboutMe />
    <SkillsSection />
    <ProjectsComp />
    <ContactSection />
  </StrictMode>,
)
