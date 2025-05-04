import { Container } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-4 mt-5">
      <Container className="text-center">
        <div className="d-flex justify-content-center gap-4 mb-4">
          <a
            href="https://github.com/Dishant-Singh7654"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dishant-singh504"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/DishantSingh504"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaTwitter />
          </a>
        </div>
        <p className="text-secondary mb-0">
          &copy; {new Date().getFullYear()} Dishant. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default Footer