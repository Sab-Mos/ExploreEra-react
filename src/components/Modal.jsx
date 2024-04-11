import React from "react";
import { modalServiceData } from "../serviceData";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 text-center flex flex-col gap-3 items-center">
        <h2 className="text-xl font-bold mb-4">All services</h2>
        <div className="grid lg:grid-cols-4 gap-[20px] md:grid-cols-2 grid-cols-3 md:gap-x-5 ">
          {modalServiceData.map((service) => (
            <div key={service.id} className="lg:w-[200px] ">
              <img
                src={service.imgSrc}
                alt="service-image"
                className="max-w-full md:w-[200px] "
              />
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-[#FF6700] text-white font-[roboto] rounded-xl font-normal w-1/4"
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default Modal;
