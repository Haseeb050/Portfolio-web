import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { CiFolderOff } from "react-icons/ci";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
            <div className="about_me-overlay"></div>
          </div>
        </div>
        <div className="about_content">
          <div className="container about_cards">
            <div className="row">
              <div className="col-sm-4">
                <article className="about_card">
                  <FaAward className="about_icon" />
                  <h5>Experince</h5>
                  <small>3+ Year Working</small>
                </article>
              </div>
              <div className="col-sm-4">
                <article className="about_card">
                  <FaUserAlt className="about_icon" />
                  <h5>Client</h5>
                  <small>200+ worldWide</small>
                </article>
              </div>
              <div className="col-sm-4">
                <article className="about_card">
                  <CiFolderOff className="about_icon" />
                  <h5>Work</h5>
                  <small>80+ Complete</small>
                </article>
              </div>
            </div>

            <p>
              As an iOS/Android application developer using Flutter, I work as a
              mobile application developer. I am well aware that building an app
              with Flutter from scratch takes good work, good money, and good
              time, but the results will also be excellent. I can also assist
              you with Flutter.
            </p>
            <a href="#contact" className="btn btn-primarys">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
