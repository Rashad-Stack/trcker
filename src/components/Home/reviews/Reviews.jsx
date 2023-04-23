import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import userImg from "../../../assets/images/user.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../../styles/swiperslider.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Review from "./Review";

export default function Reviews() {
  return (
    <section className="bg-light-secondary dark:bg-dark-secondary py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <Review review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
const reviews = [
  {
    id: 1,
    name: "Peter Groves",
    designation: "Head of PR Monkeys",
    image: userImg,
    quote:
      "We use GroupsTracker.com to track mentions of our customers. Thanks to this, we can react quickly and extinguish fires before they break out for good."
  },
  {
    id: 2,
    name: "Peter Groves",
    designation: "Head of PR Monkeys",
    image: userImg,
    quote:
      "We use GroupsTracker.com to track mentions of our customers. Thanks to this, we can react quickly and extinguish fires before they break out for good."
  }
];
