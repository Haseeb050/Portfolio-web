import React from "react";
import "./Services.css";
import { IoIosCheckmark } from "react-icons/io";
function Services() {
  return (
    <section id="services">
      <h5>What I Offer </h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3 id="h3">Integration Services</h3>
          </div>
          <ul className="service_list">
            <li>
              <IoIosCheckmark className="service_list-icon" />
              <p>Integrating third-party APIs for enhanced functionality.</p>
            </li>
            <li>
              <IoIosCheckmark className="service_list-icon" />
              <p>Seamless integration of essential services.</p>
            </li>
            <li>
              <IoIosCheckmark className="service_list-icon" />
              <p>Incorporating maps, notifications, and social media APIs.</p>
            </li>
            <li>
              <IoIosCheckmark className="service_list-icon" />
              <p>Custom integrations tailored to specific needs</p>
            </li>
            <li>
              <IoIosCheckmark className="service_list-icon" />
              <p>Ensuring compatibility with diverse platforms.</p>
            </li>
          </ul>
        </article>
        {/*End of ui/ux */}
        <article className="service">
          <div className="service_head">
            <h3 id="h3">App Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <IoIosCheckmark className="service_list-icon" />
              <p>Crafting innovative apps for all platforms</p>
            </li>
            <li>
              <IoIosCheckmark className="service_list-icon" />
              <p>Expertise in Java, Swift, Flutter</p>
            </li>
            <li>
              <IoIosCheckmark className="service_list-icon" />
              <p>Complete app development, from design to deployment</p>
            </li>
            <li>
              <IoIosCheckmark className="service_list-icon" />
              <p>Seamless user experience through rigorous testing.</p>
            </li>
          </ul>
        </article>
        {/*End of Web development */}
        <article className="service">
          <div className="service_head">
            <h3 id="h3">UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <IoIosCheckmark className="service_list-icon" />
              <p>Creating intuitive, visually appealing app designs.</p>
            </li>
            <li>
              <IoIosCheckmark className="service_list-icon" />
              <p>User-centric UI/UX for optimal experience.</p>
            </li>
            <li>
              <IoIosCheckmark className="service_list-icon" />
              <p>Crafting sleek interfaces for seamless interaction.</p>
            </li>
            <li>
              <IoIosCheckmark className="service_list-icon" />
              <p>Enhancing usability with elegant design solutions</p>
            </li>
            <li>
              <IoIosCheckmark className="service_list-icon" />
              <p>Optimizing UI/UX for maximum engagement.</p>
            </li>
          </ul>
        </article>
        {/*End of Content Creation*/}
      </div>
    </section>
  );
}

export default Services;
