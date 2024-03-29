import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function HeaderSocials() {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/thehaseebzafar9832/" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="https://facebook.com" target="_blank">
        <FaFacebook />
      </a>
    </div>
  );
}

export default HeaderSocials;
