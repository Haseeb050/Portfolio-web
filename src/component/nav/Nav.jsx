import React, { useState, useEffect } from "react";
import "./Nav.css";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { LuBookmarkMinus } from "react-icons/lu";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveNav(`#${section.id}`);
        }
      });

      if (scrollPosition < 200) {
        setActiveNav("#");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <center>
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}>
          <IoMdHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}>
          <FaUser />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}>
          <LuBookmarkMinus />
        </a>
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}>
          <MdMiscellaneousServices />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}>
          <IoIosContacts />
        </a>
      </nav>
    </center>
  );
}

export default Nav;
