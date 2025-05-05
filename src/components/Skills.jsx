import { motion } from 'framer-motion'
import { Container, Row, Col } from 'react-bootstrap'
import { FaAndroid, FaCode, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { SiCplusplus, SiKotlin, SiFirebase, SiAndroidstudio } from 'react-icons/si'
import { VscCode, VscGithub } from 'react-icons/vsc'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
        { name: 'Java', icon: FaJava, color: '#007396' },
        { name: 'C/C++', icon: SiCplusplus, color: '#00599C' },
        { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' }
      ]
    },
    {
      title: 'Technologies/Framework',
      skills: [
        { name: 'Android Development', icon: FaAndroid, color: '#3DDC84' },
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Web Development', icon: FaCode, color: '#1572B6' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        { name: 'API Handling', icon: BiCodeAlt, color: '#6464FF' }
      ]
    },
    {
      title: 'Developer Tools',
      skills: [
        { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
        { name: 'Visual Studio Code', icon: VscCode, color: '#007ACC' },
        { name: 'Git', icon: FaGithub, color: '#F05032' },
        { name: 'GitHub', icon: VscGithub, color: '#FFFFFF' }
      ]
    }
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
        
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-5">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="h4 mb-4 text-center"
              style={{ color: 'var(--secondary-color)' }}
            >
              {category.title}
            </motion.h3>
            
            <Row className="g-4">
              {category.skills.map((skill, index) => (
                <Col key={skill.name} xs={6} md={3}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    className="tech-card text-center h-100"
                  >
                    <skill.icon size={50} style={{ color: skill.color }} className="mb-3" />
                    <h3 className="h5">{skill.name}</h3>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  )
}

export default Skills;