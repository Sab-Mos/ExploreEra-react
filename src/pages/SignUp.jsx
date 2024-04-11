import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalLogin from "../components/ModalLogin";
import lineImg from "../images/loginLine.png";
import socialImg1 from "../images/authSocials-1.png";
import socialImg2 from "../images/authSocials-2.png";
import socialImg3 from "../images/authSocials-3.png";
import socialImg4 from "../images/authSocials-4.png";
import signUpImg from "../images/signUp-img.png";

const SignUp = () => {
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const validationErrors = {};
    if (!userData.firstName) {
      validationErrors.firstName = "First name is required";
    }
    if (!userData.lastName) {
      validationErrors.lastName = "Last name is required";
    }
    if (!userData.email) {
      validationErrors.email = "Email is required";
    }
    if (!userData.password) {
      validationErrors.password = "Password is required";
    }
    if (!userData.confirmPassword) {
      validationErrors.confirmPassword = "Confirm password is required";
    }
    if (userData.password !== userData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }
    if (userData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/login");
  };

  return (
    <section className="bg-[#f6f6f6] pt-24 pb-6 md:pb-20 md:mt-10 px-8 md:px-0">
      {showModal && <ModalLogin onClose={toggleModal} />}
      <div className="mx-auto container  bg-white p-10 rounded-xl w-full max-w-md">
        <form className="  grid justify-center gap-5" onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-[10px] ">
            <label
              htmlFor="firstName"
              className=" text-[#424244] font-[roboto] font-normal text-[14px] md:text-[16px] opacity-70 ml-3"
            >
              First name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
              className={`placeholder-[#424244] font-[roboto] font-normal text-[14px] border border-[#FF6700] rounded-[10px] p-3 w-72 md:w-full outline-none md:text-[16px] ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="font-[roboto] font-normal text-[14px] text-red-500 ml-3">
                {errors.firstName}
              </p>
            )}
          </div>
          <div className=" flex flex-col gap-[10px] ">
            <label
              htmlFor="lastName"
              className=" text-[#424244] font-[roboto] font-normal text-[14px] opacity-70 ml-3 md:text-[16px]"
            >
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name"
              className={`placeholder-[#424244] font-[roboto] font-normal text-[14px] border border-[#FF6700] rounded-[10px] p-3 w-72 outline-none md:w-full  md:text-[16px] ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="font-[roboto] font-normal text-[14px] text-red-500 ml-3">
                {errors.lastName}
              </p>
            )}
          </div>
          <div className=" flex flex-col gap-[10px] ">
            <label
              htmlFor="email"
              className="text-[#424244] font-[roboto] font-normal text-[14px] md:text-[16px] opacity-70 ml-3"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className={`placeholder-[#424244] font-[roboto] font-normal text-[14px] border border-[#FF6700] rounded-[10px] p-3 w-72 md:w-full outline-none md:text-[16px] ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="font-[roboto] font-normal text-[14px] text-red-500 ml-3">
                {errors.email}
              </p>
            )}
          </div>
          <div className=" flex flex-col gap-[10px] ">
            <label
              htmlFor="password"
              className=" text-[#424244] font-[roboto] font-normal text-[14px] md:text-[16px] opacity-70 ml-3"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className={`placeholder-[#424244] font-[roboto] font-normal text-[14px] border border-[#FF6700] rounded-[10px] p-3 w-72 md:w-full outline-none md:text-[16px] ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="font-[roboto] font-normal text-[14px] text-red-500 ml-3">
                {errors.password}
              </p>
            )}
          </div>
          <div className=" flex flex-col gap-[10px] ">
            <label
              htmlFor="confirmPassword"
              className=" text-[#424244] font-[roboto] font-normal text-[14px] md:text-[16px] opacity-70 ml-3"
            >
              Confirm the password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Re-enter your password"
              className={`placeholder-[#424244] font-[roboto] font-normal text-[14px] border border-[#FF6700] rounded-[10px] p-3 w-72 md:w-full outline-none md:text-[16px] ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
            />
            {errors.confirmPassword && (
              <p className="font-[roboto] font-normal text-[14px] text-red-500 ml-3">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <div className="flex">
            <div className=" bg-[#e6ebff] rounded-full flex justify-center items-center p-8  cursor-pointer">
              <label htmlFor="avatar">
                <img src={signUpImg} alt="avatar" />
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>

          <button className="block text-[roboto] font-normal text-[16px] hover:bg-[#C85100] bg-[#FF6700] rounded-[10px] text-white p-[10px] md:text-xl">
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
              <img src={socialImg1} alt="social media" />
            </div>
            <div className="border border-[#424244] rounded-md p-[13px] md:p-5">
              <img src={socialImg2} alt="social media" />
            </div>
            <div className="border border-[#424244] rounded-md p-[13px] md:p-5">
              <img src={socialImg3} alt="social media" />
            </div>
            <div className="border border-[#424244] rounded-md p-[16px] md:p-6">
              <img src={socialImg4} alt="social media" />
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

export default SignUp;
