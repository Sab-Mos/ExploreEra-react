import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import lineImg from "../images/loginLine.png";
import socialImg1 from "../images/authSocials-1.png";
import socialImg2 from "../images/authSocials-2.png";
import socialImg3 from "../images/authSocials-3.png";
import socialImg4 from "../images/authSocials-4.png";
import ModalLogin from "../components/ModalLogin";

const Login = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const onSubmit = (data) => {
    const savedUserData = JSON.parse(localStorage.getItem("user"));

    if (!savedUserData || savedUserData.email !== data.email) {
      return;
    }

    if (!data.email.includes("@")) {
      return;
    }

    if (savedUserData.password !== data.password) {
      return;
    }

    sessionStorage.setItem("isLoggedIn", true);
    navigate("/host");
  };

  const emailErrorMessage = errors.email ? errors.email.message : "";
  const passwordErrorMessage = errors.password ? errors.password.message : "";

  return (
    <section className="bg-[#f6f6f6] pt-24 pb-6 md:pb-20 md:mt-10 ">
      {showModal && <ModalLogin onClose={toggleModal} />}
      <div className=" mx-7 bg-white  h-[500px] p-6 rounded-xl m-10 md:w-[500px] LG:W-[540px] md:container md:mx-auto">
        <form
          className="  grid justify-center gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" flex flex-col gap-[10px] ">
            <label
              htmlFor="email"
              className=" text-[#424244] font-[roboto] font-normal text-[14px] md:text-[16px] opacity-70 ml-3"
            >
              Email
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email must be valid",
                },
              })}
              id="email"
              placeholder="Enter your email address"
              className={`placeholder-[#424244] font-[roboto] font-normal text-[14px] border border-[#FF6700] rounded-[10px] p-3 w-72 md:w-full outline-none md:text-[16px] ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {emailErrorMessage && (
              <p className="font-[roboto] font-normal text-[16px] text-[#FF0000] ml-3">
                {emailErrorMessage}
              </p>
            )}
          </div>
          <div className=" flex flex-col gap-[10px] ">
            <label
              htmlFor="password"
              className=" text-[#424244] font-[roboto] font-normal text-[14px] opacity-70 ml-3 md:text-[16px]"
            >
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              id="password"
              placeholder="Enter your password"
              className={`placeholder-[#424244] font-[roboto] font-normal text-[14px] border border-[#FF6700] rounded-[10px] p-3 w-72 outline-none md:w-full  md:text-[16px] ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {passwordErrorMessage && (
              <p className="font-[roboto] font-normal text-[16px] text-[#FF0000] ml-3">
                {passwordErrorMessage}
              </p>
            )}
          </div>
          <button className="block text-[roboto] font-normal text-[16px] bg-[#FF6700] rounded-[10px] hover:bg-[#C85100] text-white p-[10px] md:text-xl">
            Continue
          </button>
          <div className=" flex items-center justify-center gap-4">
            <div>
              <img src={lineImg} alt="line" className=" w-[73px]" />
            </div>
            <p className=" text-[#424244] font-[roboto] font-normal text-[14px] opacity-70">
              Or continue with
            </p>
            <div>
              <img src={lineImg} alt="line" className=" w-[73px]" />
            </div>
          </div>
          <div className="flex justify-around items-center gap-4">
            <div className="border border-[#424244] rounded-md p-[13px] md:p-5">
              <img src={socialImg1} alt="social media image" />
            </div>
            <div className="border border-[#424244] rounded-md p-[13px] md:p-5">
              <img src={socialImg2} alt="social media image" />
            </div>
            <div className="border border-[#424244] rounded-md p-[13px] md:p-5">
              <img src={socialImg3} alt="social media image" />
            </div>
            <div className="border border-[#424244] rounded-md p-[16px] md:p-6">
              <img src={socialImg4} alt="social media image" />
            </div>
          </div>
          <div className="text-center border-t border-[#424244] border-opacity-70  pt-2">
            <p className="text[roboto] font-normal text-[14px] text-[#424244]">
              <span className="opacity-70">
                {" "}
                By signing in or creating an account, you agree with our{" "}
              </span>
              <span
                className="text-[#C85100] cursor-pointer "
                onClick={toggleModal}
              >
                Terms & conditions
              </span>{" "}
              <span className="opacity-70">and </span>
              <span className="text-[#C85100] opacity-100">Privacy policy</span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
