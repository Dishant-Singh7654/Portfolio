import { motion } from 'framer-motion'
import { Container, Row, Col } from 'react-bootstrap'
import { FaHtml5, FaCss3Alt, FaJs, FaCode } from 'react-icons/fa'
import { SiCplusplus } from 'react-icons/si'

const IndustrialTraining = () => {
  const trainings = [
    {
      title: 'Web Designing',
      company: 'Excellence Technology, Mohali',
      period: '6/2024 - 8/2024',
      skills: [
        { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' }
      ]
    },
    {
      title: 'C++ & OOPS',
      company: 'Harton Skill Centre, Charkhi Dadri',
      period: '8/2023 - 10/2023',
      skills: [
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
        { name: 'OOPS', icon: FaCode, color: '#6464FF' }
      ]
    }
  ]

  return (
    <section id="industrial-training" className="py-5">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center mb-5"
        >
          Industrial Training
        </motion.h2>
        <Row className="g-4">
          {trainings.map((training, index) => (
            <Col key={training.title} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="tech-card h-100"
              >
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h3 className="h4">{training.title}</h3>
                  <span className="text-secondary">{training.period}</span>
                </div>
                <p className="text-secondary mb-4">{training.company}</p>
                <h4 className="h5 mb-3">Skills Acquired:</h4>
                <div className="d-flex flex-wrap gap-4">
                  {training.skills.map((skill) => (
                    <div key={skill.name} className="text-center">
                      <skill.icon size={30} style={{ color: skill.color }} className="mb-2" />
                      <p className="mb-0">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default IndustrialTraining