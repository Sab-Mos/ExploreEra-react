import React, { useState } from "react";
import { serviceData } from "../serviceData";
import Modal from "./Modal";

const Services = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <section>
      <div className="container mx-auto mt-16 flex flex-col gap-10 px-11">
        <div className="flex flex-col gap-4">
          <h1
            className="font-[roboto], font-medium lg:text-[40px] md:text-[32px] text-2xl  text-[#424244] 
"
          >
            Discover Our Services
          </h1>

          <p className=" font-[roboto] text-[14px] md:text-xl font-normal text-[#424244] mb-3 md:mb-0">
            ExploreEra provides a one-stop solution for individuals seeking
            well-planned journeys. These services include expert advice on
            destination selection, flight and accommodation bookings, and
            customized itineraries to individual preferences.
          </p>
        </div>
        <div>
          <a
            className=" cursor-pointer hidden md:block text-end font-[roboto] font-medium text-xl text-[#C85100] underline mb-[10px]"
            onClick={toggleModal}
          >
            see all
          </a>

          {showModal && <Modal onClose={toggleModal} />}
          <div className="grid lg:grid-cols-4 gaa-[20px] md:grid-cols-2 grid-cols-1 md:gap-x-5 ">
            {serviceData.map((service) => (
              <div
                key={service.id}
                className="flex flex-col gap-3 mb-3 lg:mb-0"
              >
                <img
                  src={service.imgSrc}
                  alt="service-image"
                  className="max-w-full"
                />
                <div className="flex flex-col gap-3">
                  <h2 className="  font-[roboto] font-medium text-[#424244] text-xl md:text-[28px] lg:text-[32px]">
                    {service.heading}
                  </h2>
                  <p className=" font-[roboto] leading-5 text-[#424244] font-normal md:font-medium text-[16px] lg:text-[18px] mb-5 lg:mb-0">
                    {service.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <a
            className="block md:hidden text-start font-[roboto] font-medium text-xl text-[#C85100] underline mb-0"
            onClick={toggleModal}
          >
            see all
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
