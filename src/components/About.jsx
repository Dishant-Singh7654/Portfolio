import { motion } from 'framer-motion'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center mb-5"
        >
          About Me
        </motion.h2>
        <Row className="align-items-center">
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-secondary mb-4">
                B.Tech (CSE) fresher with solid coding and problem-solving skills, eager to start a career in software development. Passionate about building efficient solutions and continuously learning new technologies.
              </p>
              <p className="text-secondary mb-4">
                Here are a few technologies I've been working with recently:
              </p>
              <Row className="g-2">
                <Col xs={6}>
                  <div className="d-flex align-items-center gap-2">
                    <span style={{ color: 'var(--secondary-color)' }}>▹</span>
                    Android Development
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="d-flex align-items-center gap-2">
                    <span style={{ color: 'var(--secondary-color)' }}>▹</span>
                    Web Development
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="d-flex align-items-center gap-2">
                    <span style={{ color: 'var(--secondary-color)' }}>▹</span>
                    DSA
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="d-flex align-items-center gap-2">
                    <span style={{ color: 'var(--secondary-color)' }}>▹</span>
                    Java
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="d-flex align-items-center gap-2">
                    <span style={{ color: 'var(--secondary-color)' }}>▹</span>
                    C/C++
                  </div>
                </Col>
              </Row>
            </motion.div>
          </Col>
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-5 mt-lg-0"
            >
              <div className="position-relative d-inline-block">
                <div className="position-absolute w-100 h-100 border border-2 border-secondary rounded translate-middle-custom"></div>
                <img
                  src="/your-name.jpg"
                  alt="Profile"
                  className="rounded img-fluid"
                  style={{ maxWidth: '300px' }}
                />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About