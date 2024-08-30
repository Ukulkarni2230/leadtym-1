"use client";
import React, { useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Siddharth",
    image: "/assets/landing/marT.jpeg",
    text: "Leadtym has transformed our marketing approach. The automation tools and detailed analytics have boosted our ROI significantly. The platform's intuitive design and robust features have made it easier to plan, execute, and track our campaigns. We can now make data-driven decisions with confidence, which has led to better engagement and higher conversion rates.",
    designation: "Marketing Manager",
  },
  {
    name: "Cashloot",
    image: "/assets/landing/infT.jpeg",
    text: "As an influencer, Leadtym's automation features have saved me so much time and helped me engage with my followers more effectively. The insights into audience demographics and behavior are invaluable, allowing me to tailor my content and strategy to meet the needs of my followers. The platform’s ease of use and comprehensive tools have truly elevated my online presence and influence.",
    designation: "Influencer",
  },
  {
    name: "Ritesh",
    image: "/assets/landing/ageT.jpeg",
    text: "Our agency loves Leadtym’s comprehensive reporting and collaboration tools. It’s made managing multiple campaigns a breeze, from initial planning to final analysis. The platform's ability to integrate with other tools we use daily has streamlined our workflow and improved our team’s productivity. We can now manage client campaigns more efficiently, ensuring we deliver excellent results every time.",
    designation: "Agency Director",
  },
  {
    name: "Rakesh",
    image: "/assets/landing/braT.jpeg",
    text: "Leadtym has been a game-changer for our brand. The platform's insights and automation features have helped us reach a wider audience in India. With detailed analytics and reporting, we can track our campaigns' performance in real-time, allowing us to adjust our strategies as needed. The user-friendly interface and exceptional customer support have made our experience with Leadtym incredibly positive, enabling us to grow our brand presence effectively.",
    designation: "Brand Manager",
  },
];

const TestimonialCarousel = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="mb-12 md:py-10 py-5 overflow-clip relative w-full max-w-screen-2xl">
      <div className="relative w-full px-2 sm:px-6 lg:px-8 mx-auto dark:text-white text-black py-6 pb-10">
        <div className="absolute inset-0 flex left-0 -top-12">
          <span className="text-[200px] dark:text-gray-200 text-black opacity-15 dark:opacity-30">
            "
          </span>
        </div>
        <p className="relative mb-3 font-bold text-lg dark:text-white text-black sm:text-xl z-30">
          Testimonials
        </p>
        <p className="relative text-2xl md:text-[46px] dark:text-white text-black z-30 font-semibold md:text-start text-start">
          What Our Users Say
        </p>
      </div>

      <div className="flex items-center mt-3 justify-center md:justify-end">
        <div className="md:w-[100%] w-full px-2">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            grabCursor={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.3,
                spaceBetween: 30,
              },
              922: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1100: {
                slidesPerView: 1.9,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 1.6,
                spaceBetween: 30,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide className="md:w-[80%] w-full z-50" key={index}>
                <div className="relative bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 md:flex gap-4 p-4 px-5 rounded-2xl border dark:border-white border-black h-full w-full">
                  <div className="md:w-2/5 w-full overflow-hidden py-2 items-center justify-center flex md:h-[300px]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="md:w-3/5 w-full flex flex-col justify-between inter-style font-normal mt-1 text-black dark:text-white pt-2 md:py-1 relative md:h-[300px] overflow-y-auto no-scrollbar">
                    <span className="absolute text-3xl xl:text-6xl dark:text-white text-black font-extralight opacity-80 -left-3 -top-1 xl:-left-0.5 xl:-top-1">
                      "
                    </span>
                    <div className="flex-grow xl:mx-5">
                      <p className="text-xs sm:text-base">{testimonial.text}</p>
                    </div>
                    <div className="mt-4 xl:mx-5">
                      <p className="text-xs sm:text-sm text-black dark:text-white">
                        {testimonial.name}
                      </p>
                      <h3 className="text-xs sm:text-sm text-gray-500">
                        {testimonial.designation}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="items-center flex justify-center gap-4 w-full">
        <div className="flex items-center py-10 justify-center gap-x-4">
          <button
            className="swiper-button-prev text-black dark:text-white items-center justify-center flex"
            onClick={goPrev}
          >
            Prev
          </button>
          <div className="md:w-[150px] w-[100px] h-1 bg-gray-400 rounded-md"></div>
          <button
            className="swiper-button-next text-black dark:text-white items-center justify-center flex"
            onClick={goNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
