import React from "react";
import { modalServiceData } from "../serviceData";

const ModalLogin = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 text-center flex flex-col gap-10  items-center mx-4 md:mx-[90px] md:p-10 md:mt-0 rounded-2xl lg:w-[812px] lg:h-[600px]">
        <div className="flex flex-col gap-3 lg:gap-5">
          <h2 className="font=[roboto] font-normal text-xl md:text-2xl lg:text-[32px] text-[#424244]">
            Terms and conditions
          </h2>
          <p className="font=[roboto] font-normal text-[16px] md:text-[18px] text-[#424244]">
            Before you use our website or services, please carefully read the
            following Terms and Conditions. By accessing or using our platform,
            you agree to comply with and be bound by these terms. If you do not
            agree with any part of these terms, please do not use our services.
            Your privacy is important to us. Please review our Privacy Policy to
            understand how we collect, use, and disclose information about you.
            By using our services, you consent to our privacy practices.
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:gap-5">
          <h2 className="font=[roboto] font-normal text-xl md:text-2xl  text-[#424244] lg:text-[32px]">
            Privacy policy
          </h2>
          <p className="font=[roboto] font-normal text-[16px] md:text-[18px] text-[#424244]">
            We may collect personal information, such as your name, email
            address, and other details, when you register an account, make a
            purchase, or interact with our services. We also automatically
            collect certain information, such as IP addresses, browser type, and
            usage patterns, through cookies and similar technologies. Our
            website may contain links to third-party websites or services.
          </p>
        </div>

        <button
          onClick={onClose}
          className="px-4 py-2 bg-[#FF6700] text-white font-[roboto] rounded-[10px] md:text-xl font-normal w-full lg:w-[400px]"
        >
          I agree
        </button>
      </div>
    </div>
  );
};

export default ModalLogin;
