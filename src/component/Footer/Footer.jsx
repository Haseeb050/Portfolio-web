import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Haseeb Zafar
      </a>
      <ul className="permalinks">
        <li>
          <a href="#" id="ft">
            Home
          </a>
        </li>
        <li>
          <a href="#about" id="ft">
            About
          </a>
        </li>
        <li>
          <a href="#experience" id="ft">
            Experience
          </a>
        </li>
        <li>
          <a href="#services" id="ft">
            Services
          </a>
        </li>
        <li>
          <a href="#testimoniles" id="ft">
            Testimoniles
          </a>
        </li>
        <li>
          <a href="#portfolio" id="ft">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" id="ft">
            Contact
          </a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/thehaseebzafar9832/">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com">
          <FaInstagramSquare />
        </a>
        <a href="https://twitter.com">
          <FaGithub />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Haseeb Ahmad : All right reservices</small>
      </div>
    </footer>
  );
}

export default Footer;
