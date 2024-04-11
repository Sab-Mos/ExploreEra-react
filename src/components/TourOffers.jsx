import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { sliderData } from "../serviceData";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/Chevron_Right.png";

const TourOffers = () => {
  const swiperRef = React.useRef(null);

  const slideToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="w-full container mx-auto mt-[27px] md:mt-8 lg:mt-[60px] px-10">
      <h2 className="text-[roboto] font-medium text-[22px] md:text-[40px] text-[#424244] mb-[15px] md:mb-[20px] lg:mb-0">
        Popular Tour Offers
      </h2>
      <div className="lg:flex justify-between mt-8 mb-[10px] hidden">
        <button onClick={slideToPrev} className="px-4 py-2">
          <img src={arrowLeft} />
        </button>
        <button onClick={slideToNext} className="px-4 py-2">
          <img src={arrowRight} />
        </button>
      </div>
      <Swiper
        slidesPerView={
          window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 2 : 1
        }
        loop={true}
        navigation
        spaceBetween={20}
        ref={swiperRef}
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="bg-gray-200 p-0 flex justify-center flex-col bg-transparent">
              <img
                src={slide.imgSrc}
                className="max-w-full"
                alt="slider card image"
              />
              <div className="mt-2 lg:mt-[10px] flex flex-col gap-2">
                <h3 className="font-[roboto] text-[#424244] font-medium text-xl lg:text-[32px]">
                  {slide.city}, {slide.country}
                </h3>
                <p className="font-[roboto] text-[#424244] font-medium text-[18px] md:text-2xl">
                  {slide.adultCount} adults, {slide.days} days
                </p>
                <p className="[roboto] text-[#424244] font-medium text-[18px] md:text-2xl">
                  {slide.price}$
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TourOffers;
