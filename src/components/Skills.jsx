import { motion } from 'framer-motion'
import { Container, Row, Col } from 'react-bootstrap'
import { FaAndroid, FaCode, FaJava } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { SiCplusplus } from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'Android Development', icon: FaAndroid, color: '#3DDC84' },
    { name: 'Web Development', icon: FaCode, color: '#1572B6' },
    { name: 'DSA', icon: BiCodeAlt, color: '#F7DF1E' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'C/C++', icon: SiCplusplus, color: '#00599C' }
  ]

  return (
    <section id="skills" className="py-5">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center mb-5"
        >
          Technical Skills
        </motion.h2>
        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col key={skill.name} xs={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="tech-card text-center h-100"
              >
                <skill.icon size={50} style={{ color: skill.color }} className="mb-3" />
                <h3 className="h5">{skill.name}</h3>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Skills;