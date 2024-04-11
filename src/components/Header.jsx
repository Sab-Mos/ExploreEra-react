import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import iconlogo from "../images/User.png";
import { Link, useLocation } from "react-router-dom";
import iconLogoDark from "../images/VectorBlack.png";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
  const isLoggedOut = sessionStorage.getItem("isLoggedIn") === "false";
  const handleLogout = () => {
    sessionStorage.setItem("isLoggedIn", "false");
    navigate("/");
  };

  const [dropDown, setDropDown] = useState(false);

  const [dropDownLarge, setDropDownLarge] = useState(false);

  const [navScroll, setNavScroll] = useState(false);

  const handleDropDown = () => {
    setDropDown((prev) => !prev);
  };

  const handleDropDownLarge = () => {
    setDropDownLarge((prev) => !prev);
  };

  const handleScroll = () => {
    if (window.scrollY >= 60) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <nav
      className={
        location.pathname !== "/"
          ? `headerNav scrolled`
          : navScroll
          ? `headerNav scrolled`
          : `headerNav`
      }
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="."
          className={
            navScroll || location.pathname !== "/" ? "logo scrolled" : "logo"
          }
        >
          ExploreEra
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm ${
            navScroll || location.pathname !== "/"
              ? `text-[#424244]`
              : `text-white`
          } rounded-lg lg:hidden `}
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={handleDropDownLarge}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {dropDownLarge && (
          <div className="absolute  top-5 right-5 mt-0 md:w-[250px] bg-white rounded-lg shadow-lg z-10 md:py-5 md:px-7 px-10">
            <ul className="py-2">
              {!isLoggedIn && (
                <li className=" flex items-center justify-between">
                  <Link
                    to="login"
                    className="block px-4 py-2 text-[#424244] font-[roboto] font-normal text-2xl "
                  >
                    Sign in
                  </Link>
                </li>
              )}
              <li className="flex items-center justify-between">
                <Link
                  className="block px-4 py-2 text-[#424244] font-[roboto] font-normal text-2xl "
                  to="signUp"
                >
                  Sign up
                </Link>
                {isLoggedIn && (
                  <i
                    className="fa-solid fa-x cursor-pointer"
                    onClick={handleDropDownLarge}
                  ></i>
                )}
              </li>
              <li className=" border-b border-black w-2/3"></li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-[#424244] font-[roboto] font-normal text-2xl "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-[#424244] font-[roboto] font-normal text-2xl "
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-[#424244] font-[roboto] font-normal text-2xl "
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-[#424244] font-[roboto] font-normal text-2xl "
                >
                  Our services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-[#424244] font-[roboto] font-normal text-2xl "
                >
                  Our offers
                </Link>
              </li>
            </ul>
          </div>
        )}

        <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-10 md:mt-0 md:border-0  ">
            {location.pathname !== "/login" &&
              location.pathname !== "/signUp" && (
                <>
                  <li>
                    <Link
                      href="#"
                      className={
                        navScroll || location.pathname !== "/"
                          ? `navLink scrolled`
                          : `navLink`
                      }
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={
                        navScroll || location.pathname !== "/"
                          ? `navLink scrolled`
                          : `navLink`
                      }
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={
                        navScroll || location.pathname !== "/"
                          ? `navLink scrolled`
                          : `navLink`
                      }
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={
                        navScroll || location.pathname !== "/"
                          ? `navLink scrolled`
                          : `navLink`
                      }
                    >
                      Our services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={
                        navScroll || location.pathname !== "/"
                          ? `navLink scrolled`
                          : `navLink`
                      }
                    >
                      Our offers
                    </Link>
                  </li>
                </>
              )}
            <li>
              <button
                to="login"
                className="block   text-[28px] text-white font-[roboto] font-normal"
                onClick={handleDropDown}
              >
                <img
                  src={
                    navScroll || location.pathname !== "/"
                      ? iconLogoDark
                      : iconlogo
                  }
                  alt="avatar icon"
                />
              </button>
              {dropDown && (
                <div className="absolute top-full right-10 mt-2 lg:w-[270px] bg-white rounded-lg shadow-lg z-10">
                  <ul className="py-2">
                    {!isLoggedIn && (
                      <li>
                        <Link
                          to="login"
                          className="block px-4 py-2 text-[#424244] font-[roboto] font-normal text-2xl border-b border-[#FF6700]"
                        >
                          Sign in
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link
                        to="signUp"
                        className="block px-4 py-2 text-[#424244] font-[roboto] font-normal text-2xl border-b border-[#FF6700]"
                      >
                        Sign up
                      </Link>
                    </li>
                    {!isLoggedOut && (
                      <li>
                        <button
                          onClick={handleLogout}
                          className="block px-4 py-2 text-[#424244] font-[roboto] font-normal text-2xl border-b border-[#FF6700]"
                        >
                          Sign out
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
