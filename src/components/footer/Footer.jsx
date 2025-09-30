import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <a href="#home" className="footer-logo">Kevin Cardoso</a>

      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/kevin-cardoso-/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Kevinzerark" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/kevinzdev/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Raul Kevin {new Date().getFullYear()}. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
