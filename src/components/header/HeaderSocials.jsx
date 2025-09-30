import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";
import "./Header.css";

function HeaderSocials() {
  return (
    <div className="header-socials">
      <a
        href="https://www.linkedin.com/in/kevin-cardoso-/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Kevinzerark"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/kevinzdev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  );
}

export default HeaderSocials;
