import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Certificates = () => {
  const certificates = [
    {
      title: 'Web Designing',
      description: 'Certificate in Web Designing from Excellence Technology.',
      image: '/web-designing.jpg'
    },
    {
      title: 'Gen AI',
      description: 'Certificate in Gen AI.',
      image: '/gen-ai.jpg'
    },
    {
      title: 'SIH 2024',
      description: 'Participated in Internal Hackathon for Smart India Hackathon 2024',
      image: '/sih2024.jpg'
    },
    {
      title: 'C++ & OOPS',
      description: 'Certificate in C++ & OOPS from Harton Skill Centre.',
      image: '/c++&oops.jpg'
    }
  ];

  return (
    <section id="certificates" className="py-5">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center mb-5"
        >
          Certificates
        </motion.h2>
        <Row className="g-4">
          {certificates.map((certificate, index) => (
            <Col key={certificate.title} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="certificate-card h-100 border-0">
                  <Card.Img variant="top" src={certificate.image} />
                  <Card.Body className="p-4" style={{ background: '#0D0D2B', color: '#FFFFFF' }}>
                    <Card.Title className="h5 mb-3">{certificate.title}</Card.Title>
                    <Card.Text className="text-secondary mb-3" style={{ color: '#c9d1d9', padding: '10px', borderRadius: '5px' }}>
                      {certificate.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certificates; 