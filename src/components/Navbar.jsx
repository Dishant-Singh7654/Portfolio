import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      className={`py-3 ${scrolled ? 'bg-dark shadow' : 'bg-transparent'}`}
      variant="dark"
    >
      <Container>
        <BootstrapNavbar.Brand
          as={motion.div}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fs-4 fw-bold"
          style={{ color: 'var(--secondary-color)' }}
        >
          &lt;Portfolio/&gt;
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
        <BootstrapNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {['Home', 'About', 'Education', 'Industrial Training', 'Skills', 'Certificates', 'Projects', 'Contact'].map((item, index) => (
              <Nav.Item key={item}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    className="nav-link px-3"
                    to={item === 'Industrial Training' ? 'industrial-training' : item.toLowerCase()}
                    smooth
                    duration={500}
                    offset={-70}
                  >
                    {item}
                  </Link>
                </motion.div>
              </Nav.Item>
            ))}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar