import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

const Education = () => {
  return (
    <section id="education" className="py-5">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center mb-5"
        >
          Education
        </motion.h2>
        <Row className="align-items-center">
          <Col lg={12}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>B.Tech, Computer Science & Engineering</h3>
              <p>JMIT Radaur, 2022 - Present</p>
              <p>Current CGPA Score of 7.5</p>
              <h3>Intermediate</h3>
              <p>Shree Ram Public School, 2021 - 2022</p>
              <p>Completed with score of 90 percentage.</p>
              <h3>Matriculate</h3>
              <p>Shree Ram Public School, 2019 - 2020</p>
              <p>Completed with score of 88 percentage.</p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education; 