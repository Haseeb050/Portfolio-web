import React from "react";
import "./Testimoniles.css";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "Ernest Achiever",
    review:
      "This developer is outstanding! Their depth of knowledge in the Flutter framework is exceptional. They excel at developing user-friendly and visually appealing mobile applications. Their dedication and problem-solving skills make them a valuable asset. Highly recommend!",
  },
  {
    avatar: AVTR2,
    name: "Ernest Achiever",
    review:
      "This developer has a stellar command over the Flutter framework. Their proficiency and experience are evident. They excel in implementing complex UI designs and writing efficient code. As a reliable and talented Flutter developer, their services are guaranteed.",
  },
  {
    avatar: AVTR3,
    name: "Ernest Achiever",
    review:
      "This developer is a reliable and dependable choice. Their deep understanding of Flutter's architecture and best practices results in robust and scalable code. Their communication skills and timeliness make them an ideal candidate for any project. Definitely worth considering!",
  },
  {
    avatar: AVTR4,
    name: "Ernest Achiever",
    review:
      "This developer possesses exceptional talent. Their expertise in Flutter's concepts sets them apart. They have the ability to develop innovative and high-performance mobile applications. If you're in search of a top-notch Flutter developer, this developer will undoubtedly meet your expectations.",
  },
];

export default function Testimoniles() {
  return (
    <center>
      <section id="testimoniles">
        <h5>Review From Clients</h5>
        <h2>Testimonials</h2>
        <Swiper
          className="container testimonial_container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
          <div>
            {data.map(({ avatar, name, review }, index) => (
              <SwiperSlide key={index}>
                <article className="testimonial">
                  <div className="clients_avatar">
                    <img src={avatar} alt="" />
                  </div>
                  <h5 className="client_name">{name}</h5>
                  <small className="client_review">{review}</small>
                </article>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
    </center>
  );
}
