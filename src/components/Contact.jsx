import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertVariant, setAlertVariant] = useState('success')
  const [alertMessage, setAlertMessage] = useState('')
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' })
    }
  }

  // Validate form
  const validateForm = () => {
    const errors = {}
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid'
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      
      // Replace these with your actual EmailJS credentials
      const serviceId = 'service_hx1cmgv' // Your EmailJS service ID
      const templateId = 'template_sb0b9vo' // Your EmailJS template ID
      const publicKey = 'kczgX_lQFX3JgcVSf' // Your EmailJS public key
      
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
          console.log('Email sent successfully:', result.text)
          setIsSubmitting(false)
          setAlertVariant('success')
          setAlertMessage('Your message has been sent successfully!')
          setShowAlert(true)
          
          // Reset form
          setFormData({
            name: '',
            email: '',
            message: ''
          })
        })
        .catch((error) => {
          console.error('Error sending email:', error.text)
          setIsSubmitting(false)
          setAlertVariant('danger')
          setAlertMessage('Failed to send message. Please try again later.')
          setShowAlert(true)
        })
    }
  }

  return (
    <section id="contact" className="py-5">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center mb-5"
        >
          Get In Touch
        </motion.h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="tech-card"
            >
              {showAlert && (
                <Alert 
                  variant={alertVariant} 
                  onClose={() => setShowAlert(false)} 
                  dismissible
                  className="mb-4"
                >
                  {alertMessage}
                </Alert>
              )}
              
              <Form ref={form} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="bg-dark text-light border-secondary"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!formErrors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="bg-dark text-light border-secondary"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!formErrors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Your message"
                    className="bg-dark text-light border-secondary"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!formErrors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.message}
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Button 
                  type="submit" 
                  className="btn-glow w-100" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact