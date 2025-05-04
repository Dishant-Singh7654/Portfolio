import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Particles from 'react-particles'
import { loadSlim } from "tsparticles-slim"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Education from './components/Education'
import IndustrialTraining from './components/IndustrialTraining'
import Certificates from './components/Certificates'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const particlesInit = async (engine) => {
    await loadSlim(engine)
  }

  const particlesConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#00ff9d"
      },
      links: {
        enable: true,
        distance: 150,
        color: "#00ff9d",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
        bounce: false,
      }
    }
  }

  return (
    <div className="min-vh-100">
      <Particles
        className="particles-bg"
        init={particlesInit}
        options={particlesConfig}
      />
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Container>
        <Hero />
        <About />
        <Education />
        <IndustrialTraining />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </div>
  )
}

export default App