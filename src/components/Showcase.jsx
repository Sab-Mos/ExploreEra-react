import React from "react";

const Showcase = () => {
  return (
    <section className="showcase  w-full flex justify-center h-[885px]">
      <div className="  flex flex-col items-center justify-center w-[340px] text-center gap-3">
        <h1 className="text-white lg:text-[40px] text-[32px] font-[roboto] font-medium ">
          Visit Mountains in{" "}
          <span className=" lg:text-6xl md:text-4xl tex ">ITALY</span>
        </h1>
        <button className=" text-white text-2xl font-[roboto] font-medium px-5 py-5 rounded-[20px] bg-[#ff6700] w-[178px]">
          See offer
        </button>
      </div>
    </section>
  );
};

export default Showcase;
