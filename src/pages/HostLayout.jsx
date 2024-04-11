import React from "react";
import { Navigate, NavLink, Outlet, useLocation } from "react-router-dom";

const HostLayout = () => {
  const location = useLocation();
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  const activeStyles = `font-[roboto] font-normal md:text-2xl text-white md:px-8 bg-[#FF6700] md:py-4 tracking-wider md:rounded-[20px] text-xl text-center px-5 py-3 flex items-center justify-center rounded-lg`;

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="bg-[#f6f6f6]">
      {location.pathname !== "/host/filters" && (
        <nav className=" lg:mt-32 md:container  text-xl mt-16 mx-5 ">
          <div className=" md:p-3 p-5 flex gap-14 md:gap-0  px-0 items-center">
            <NavLink
              end
              className={({ isActive }) =>
                isActive
                  ? activeStyles
                  : `font-[roboto] font-normal md:text-2xl text-[#424244] md:px-8 md:py-4 tracking-wider text-xl`
              }
              to="."
            >
              Flights
            </NavLink>
            <NavLink
              to="stays"
              className={({ isActive }) =>
                isActive
                  ? activeStyles
                  : `font-[roboto] font-normal md:text-2xl text-[#424244] md:px-8 md:py-4 tracking-wider text-xl`
              }
            >
              Stays
            </NavLink>
            <NavLink
              to=""
              className={`font-[roboto] font-normal md:text-2xl text-[#424244] md:px-8 md:py-4 tracking-wider text-xl `}
            >
              Car rentals
            </NavLink>
            <NavLink
              to=""
              className={`font-[roboto] font-normal md:text-2xl text-[#424244] md:px-8 md:py-4 tracking-wider text-xl hidden md:inline`}
            >
              Cruises
            </NavLink>
            <NavLink
              to=""
              className={`font-[roboto] font-normal md:text-2xl text-[#424244] md:px-8 md:py-4 tracking-wider text-xl hidden md:inline`}
            >
              Attractions
            </NavLink>
          </div>
        </nav>
      )}

      <Outlet />
    </div>
  );
};

export default HostLayout;
