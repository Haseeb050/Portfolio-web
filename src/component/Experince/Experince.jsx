import React from "react";
import "./Experince.css";
import { SiFlutter } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

function Experince() {
  return (
    <center>
      <section id="experience">
        <h5>What Skill I Have</h5>
        <h2>My Experince</h2>
        <div className="container experince_container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <article className="experince_card">
                <SiFlutter className="experince_icon" />
                <h5>Flutter</h5>
              </article>
            </div>
            <div className="col-md-3 col-sm-6">
              <article className="experince_card">
                <IoLogoFirebase className="experince_icon" />
                <h5>Firebase</h5>
              </article>
            </div>
            <div className="col-md-3 col-sm-6">
              <article className="experince_card">
                <FaGithub className="experince_icon" />
                <h5>Git & GitHub</h5>
              </article>
            </div>
            <div className="col-md-3 col-sm-6">
              <article className="experince_card">
                <RiTeamFill className="experince_icon" />
                <h5>Team Lead</h5>
              </article>
            </div>
          </div>
        </div>
      </section>
    </center>
  );
}

export default Experince;
