import { motion } from 'framer-motion'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Bharat Darshan",
      description: "Developed a website that helps tourists explore India's rich cultural heritage. Provides detailed information on Indian culture, festivals, and historical sites. Integrated interactive UI for an engaging user experience.",
      image: "/web-logo.jpeg",
      github: "https://github.com/Dishant-Singh7654/Bharat-Darshan",
      live: "https://bharat-darshan-xs32.onrender.com/",
      tech: ["HTML", "CSS", "JavaScript", "React", "Firebase"]
    },
    {
      title: "Weather App",
      description: "This is a fully functional Weather App built using Kotlin and XML in Android Studio, integrating the OpenWeather API. It displays real-time weather data including temperature, humidity, wind speed, and sunrise/sunset timings for any city.",
      image: "/app-logo.png",
      github: "https://github.com/Dishant-Singh7654/Weather-App",
      live: "https://mega.nz/file/DINzRRqa#RVZncimQz_EUF-GzK3hlEmSdyCOuuYiWZEcXl3BB7Cg",
      tech: ["Kotlin", "XML", "Android Studio", "API"]
    }
  ]

  return (
    <section id="projects" className="py-5">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center mb-5"
        >
          Featured Projects
        </motion.h2>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={project.title} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="project-card h-100 border-0 position-relative overflow-hidden">
                  <div className="image-container position-relative" style={{ paddingTop: '56.25%' }}>
                    <Card.Img 
                      variant="top" 
                      src={project.image} 
                      style={{ 
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '8px 8px 0 0',
                        transition: 'transform 0.3s ease-in-out'
                      }}
                      className="project-image"
                    />
                  </div>
                  <Card.Body className="p-4">
                    <Card.Title 
                      className="h4 mb-3" 
                      style={{ 
                        fontSize: '1.75rem',
                        color: '#FFFFFF',
                        fontWeight: '600'
                      }}
                    >
                      {project.title}
                    </Card.Title>
                    <Card.Text className="text-secondary mb-3">
                      {project.description}
                    </Card.Text>
                    <div className="d-flex gap-2 flex-wrap mb-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="badge"
                          style={{ background: 'var(--secondary-color)', color: 'var(--primary-color)' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects;