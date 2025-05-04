import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Container, Row, Col } from 'react-bootstrap'

const Hero = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col lg={8} className="mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-secondary mb-3"
              style={{ color: 'var(--secondary-color)' }}
            >
              {/* Removed Hello World */}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="display-3 fw-bold mb-4"
            >
              I'm <span className="glow-text">Dishant</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h3 mb-4 text-secondary"
            >
              <TypeAnimation
                sequence={[
                  'Android Developer',
                  2000,
                  'Frontend Developer',
                  2000,
                  'Problem Solver',
                  2000
                ]}
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="lead mb-5 text-secondary"
            >
              Transforming ideas into elegant digital solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="d-flex justify-content-center gap-3"
            >
              <a href="#projects" className="btn-glow">
                View My Work
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1mOai4dEEG_IROEMtHK_ChN-cGXvoh1NN" download className="btn-glow">
                Download Resume
              </a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero