import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/ME.png";
import HeaderSocials from "./HeaderSocials";
import "../../index.css";

function Header() {
  return (
    <header>
      <div className="container header_container " id="#">
        <h5>Hello I'm</h5>
        <h1>Haseeb Zaffer</h1>
        <h5 className="text-light">Fluter Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} id="img" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
