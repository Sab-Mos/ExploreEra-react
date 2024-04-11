import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { staysData } from "../serviceData";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/Chevron_Right.png";

const Stays = () => {
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
    <section className="lg:mt-16 ">
      <div className="mx-8 flex flex-col gap-4 md:mx-10">
        <form
          className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5 lg:grid-cols-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <select
              name="fromDestination"
              className="font-[roboto] font-normal text-[14px] border border-[#FF6700] rounded-[10px] p-3 w-full outline-none md:w-full md:text-[20px] text-[#424244]"
            >
              <option value="">Choose a City</option>
              <option value="Option 1">Paris</option>
              <option value="Option 2">Berlin</option>
              <option value="Option 3">London</option>
              <option value="Option 4">Rome</option>
            </select>
          </div>
          <div>
            <input
              type="date"
              name="lastName"
              className={`placeholder-[#424244] font-[roboto] font-normal text-[14px] border border-[#FF6700] rounded-[10px] p-3 w-full outline-none md:w-full  md:text-[20px] text-[#424244]`}
            />
          </div>
          <div>
            <select
              name="toDestination"
              className="font-[roboto] font-normal text-[14px] border border-[#FF6700] rounded-[10px] p-3 w-full outline-none md:w-full md:text-[20px] text-[#424244]"
            >
              <option value="2">2 Adults</option>
              <option value="1">1 Adult</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
              <option value="5">5 Adults</option>
            </select>
          </div>

          <button className="block text-[roboto] font-normal text-[16px] hover:bg-[#C85100] bg-[#FF6700] rounded-[12px] text-white p-[10px] md:text-xl cursor-pointer lg:text-2xl ">
            Search
          </button>
        </form>
        <section className="w-full container mx-auto mt-[27px] md:mt-4 lg:mt-[40px] md:px-10">
          <h2 className="text-[roboto] font-medium text-2xl md:text-[28px] text-[#424244] mb-[15px]  lg:mb-0">
            Browse by property type
          </h2>
          <div className="lg:flex justify-between mt-5 md:mb-5 mb-[10px] hidden">
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
            {staysData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="bg-gray-200 p-0 flex justify-center flex-col bg-transparent">
                  <img
                    src={slide.img}
                    className="max-w-full"
                    alt="slider card image"
                  />
                  <div className="mt-2 lg:mt-[10px] flex flex-col gap-2">
                    <h3 className="font-[roboto] text-[#424244] font-medium text-xl lg:text-[32px] tracking-wider">
                      {slide.text}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </section>
  );
};

export default Stays;
