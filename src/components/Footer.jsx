import React from "react";
import social1 from "../images/social1.png";
import social2 from "../images/social2.png";
import social3 from "../images/social3.png";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const locationPath = useLocation().pathname;
  return (
    <footer
      className={
        locationPath !== "/login" && locationPath !== "/signUp" && ` mt-16 `
      }
    >
      <div className=" bg-[#EAE9E9] py-10  px-12 lg:grid lg:grid-cols-3 lg:gap-x-[200px] lg:items-baseline">
        <div
          className=" grid grid-cols-1 md:grid-cols-2  
        gap-y-4 lg:col-span-2
        lg:gap-[250px]
        "
        >
          <div className=" flex flex-col gap-5">
            <div className=" flex flex-col gap-5">
              <h3 className=" text-[28px] font-medium font-[kalnia] text-[#424244] lg:text-5xl">
                ExploreEra
              </h3>
              <p className=" text-[roboto] text-[#424244] text-xl">
                Travel agency which helps you to plan your perfect holidays
              </p>
            </div>
            <div className=" flex flex-col gap-5">
              <h2 className=" text-[roboto]  text-[#424244] text-[28px]">
                Follow us
              </h2>
              <div className=" flex gap-5">
                <img src={social1} alt="instagram" />
                <img src={social2} alt="facebook" />
                <img src={social3} alt="linkedin" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-5 md:gap-3">
            <h2 className=" font-[roboto] font-normal text-[28px] text-[#424244]">
              Links
            </h2>
            <ul className=" flex flex-col gap-5 md:gap-[10px]">
              <a
                href="#"
                className=" font-[roboto] font-normal text-xl text-[#424244]"
              >
                Home
              </a>
              <a
                href="#"
                className=" font-[roboto] font-normal text-xl text-[#424244]"
              >
                About us
              </a>
              <a
                href="#"
                className=" font-[roboto] font-normal text-xl text-[#424244]"
              >
                Blogs
              </a>
              <a
                href="#"
                className=" font-[roboto] font-normal text-xl text-[#424244]"
              >
                Our services
              </a>
              <a
                href="#"
                className=" font-[roboto] font-normal text-xl text-[#424244]"
              >
                Our offers
              </a>
            </ul>
          </div>
        </div>
        <div className=" md:grid md:grid-cols-2 lg:grid-cols-1 lg:col-span-1">
          <div className=" flex flex-col gap-4">
            <h2 className=" font-[roboto] font-normal  text-[#424244] text-[28px] mt-4">
              Contact us
            </h2>
            <p className=" font-[roboto] font-normal  text-[#424244] text-xl">
              exploreeera@gmail.com
            </p>
            <p className=" font-[roboto] font-normal  text-[#424244] text-xl">
              555111222
            </p>
          </div>
          <div>
            <h2 className=" font-[roboto] font-normal  text-[#424244] text-[28px] mt-4">
              Subscribe news
            </h2>
            <input
              type="email"
              className="py-3 px-4 block w-full
              rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none outline-none bg-transparent border border-black text-[18px] font-[roboto] font-normal md:w-2/3 lg:w-3/4"
              placeholder="Email"
            />
          </div>
        </div>
        <div className=" lg:col-span-3">
          <h2 className=" font-[roboto] font-normal text-2xl text-center text-[#424244] mt-4 ">
            Copyright 2024
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
