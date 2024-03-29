import React from "react";
import "./Contact.css";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="row">
          <div className="col-sm-6 contact_options">
            <article className="contact_option">
              <MdOutlineMarkEmailRead className="contact_option-icon" />
              <h4 id="h4">Email</h4>
              <h5 id="h5">haseebzafar9832@gmail.com</h5>
              <a href="mailto:dummygetor@gmail.com" target="_blank" id="a">
                Send a message
              </a>
            </article>
            <article className="contact_option">
              <CiLinkedin className="contact_option-icon" />
              <h4 id="h4">LinkDin</h4>
              <h5 id="h5">Haseeb Zafar</h5>
              <a
                href="https://www.linkedin.com/in/thehaseebzafar9832/"
                target="_blank"
                id="a">
                Send a message
              </a>
            </article>
            <article className="contact_option">
              <FaWhatsapp className="contact_option-icon" />
              <h4 id="h4">Whatsapp</h4>
              <h5 id="h5">+923075441121</h5>
              <a
                href="https://api.whatsapp.com/send?phone+923075441121
"
                target="_blank"
                id="a">
                Send a message
              </a>
            </article>
          </div>
          {/*End Of Contact Option */}
          <div className="col-sm-6">
            <form action="">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
                id="inp"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Full Email Dress"
                required
              />
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                required></textarea>
            </form>
            <button type="submit" className="btn mt-3" id="btn-pri">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
