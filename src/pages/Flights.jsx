import React, { useState } from "react";
import arrowDown from "../images/Chevron_Down.png";
import { flightsData } from "../serviceData";
import pencilImg from "../images/pencil-1.png";
import oneStopImg from "../images/oneStop.png";
import twoStopsImg from "../images/twoStops.png";
import noStopImg from "../images/direct.png";
import blackLine from "../images/blackLine.png";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import FilterList from "../components/FilterList";

const Flights = () => {
  const [showFlights, setShowFlights] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const search = (location.state && location.state.search.slice(6)) || "";

  const stopType = searchParams.get("stop");

  const filteredData = stopType
    ? flightsData.filter((data) => data.stop === stopType)
    : search
    ? flightsData.filter((data) => data.stop === search)
    : flightsData;

  const [selectedDate, setSelectedDate] = useState("");

  const handleShow = () => {
    setShowFlights((prev) => !prev);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const mappedData = filteredData.map((flight) => (
    <div
      key={flight.id}
      className=" bg-white flex flex-col gap-3 px-4 py-3 w-[90%] rounded-lg  lg:w-[900px] lg:flex-row lg:justify-evenly lg:px-20 lg:py-10 lg:gap-16"
    >
      <div className="flex justify-center items-end md:justify-evenly gap-3 lg:gap-16">
        <div className=" w-14 flex flex-col items-center gap-1  ">
          <img
            src={flight.imgSrc}
            className=" w-6 h-6 md:w-[60px] md:h-[60px]  lg:w-[70px]"
          />
          <p className="font-[inter] font-normal text-xs text-[#424244] md:text-xl lg:whitespace-nowrap">
            Georgian airlines
          </p>
        </div>
        <div className=" md:w-[320px] flex flex-col gap-5">
          <div className="flex justify-between">
            <p className="font-[roboto] font-normal text-[18px] text-[#424244] md:text-2xl">
              Take off
            </p>
            <p className="font-[roboto] font-normal text-[18px] text-[#424244] md:text-2xl">
              Landing
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-[roboto] font-medium text-[16px] text-[#424244] md:text-xl  lg:text-2xl">
              {flight.takeoffTime}:00
            </p>
            <div>
              <img
                src={
                  flight.isOneStop
                    ? oneStopImg
                    : flight.isTwoStop
                    ? twoStopsImg
                    : noStopImg
                }
                className=" w-20 md:w-[230px]"
              />
            </div>
            <p className="font-[roboto] font-medium text-[16px] text-[#424244]  md:text-xl lg:text-2xl">
              {flight.landingTime}:00
            </p>
          </div>
        </div>
        <p className="font-[roboto] font-normal text-[16px] text-opacity-60 text-[#424244] md:text-xl lg:text-2xl ">
          {flight.duration} hours{" "}
        </p>
      </div>
      <div className="hidden lg:flex lg:flex-col lg:gap-5">
        <div className="flex justify-between gap-10">
          <h3 className="font-[roboto] font-normal text-2xl text-[#424244]">
            Price
          </h3>
          <p className="font-[roboto] font-medium text-2xl text-[#424244]">
            {flight.price}$
          </p>
        </div>
        <div>
          <img src={blackLine} />
        </div>
        <button className=" font-[roboto] font-medium text-xl  bg-[#FF8C3E] rounded-[10px] text-[#424244] p-[10px]  lg:w-full hover:bg-[#C85100] hover:text-white ">
          View Deal
        </button>
      </div>
      <div className="lg:hidden">
        <h3 className="font-[roboto] font-normal text-[18px] text-center">
          Price: {flight.price}$
        </h3>
        <div className="flex justify-center">
          <button className=" font-[roboto] font-medium text-xl  bg-[#FF8C3E] rounded-[10px] text-[#424244] p-[10px]  w-[90%] hover:bg-[#C85100] hover:text-white ">
            View Deal
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {!showFlights ? (
        <section className="lg:mt-16 ">
          <div className="mx-8 flex flex-col gap-4 md:mx-10">
            <div className="flex gap-5">
              <div className="flex items-center">
                <p className="font-[roboto] font-medium text-[16px] text-[#424244] lg:text-xl">
                  One-way
                </p>
                <div>
                  <img src={arrowDown} alt="arrowDown" />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <p className="font-[roboto] font-medium text-[16px] text-[#424244] lg:text-xl">
                  1 Adult
                </p>
                <div>
                  <img src={arrowDown} alt="arrowDown" />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <p className="font-[roboto] font-medium text-[16px] text-[#424244] lg:text-xl">
                  Economy
                </p>
                <div>
                  <img src={arrowDown} alt="arrowDown" />
                </div>
              </div>
            </div>
            <form
              className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5 lg:grid-cols-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <select
                  name="fromDestination"
                  className="font-[roboto] font-normal text-[14px] border border-[#FF6700] rounded-[10px] p-3 w-full outline-none md:w-full md:text-[16px]"
                  value="Tbilisi"
                >
                  <option value="Tbilisi">Tbilisi</option>
                  <option value="Option 1">Paris</option>
                  <option value="Option 2">Berlin</option>
                  <option value="Option 3">London</option>
                  <option value="Option 4">Rome</option>
                </select>
              </div>
              <div>
                <select
                  name="toDestination"
                  className="font-[roboto] font-normal text-[14px] border border-[#FF6700] rounded-[10px] p-3 w-full outline-none md:w-full md:text-[16px]"
                  value="Paris"
                >
                  <option value="Paris">Paris</option>
                  <option value="Option 1">Paris</option>
                  <option value="Option 2">Berlin</option>
                  <option value="Option 3">London</option>
                  <option value="Option 4">Rome</option>
                </select>
              </div>
              <div>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  name="lastName"
                  placeholder="Enter your last name"
                  className={`placeholder-[#424244] font-[roboto] font-normal text-[14px] border border-[#FF6700] rounded-[10px] p-3 w-full outline-none md:w-full  md:text-[16px]`}
                />
              </div>
              <button
                className="block text-[roboto] font-normal text-[16px] hover:bg-[#C85100] bg-[#FF6700] rounded-[12px] text-white p-[10px] md:text-xl cursor-pointer lg:text-2xl "
                onClick={handleShow}
              >
                Search
              </button>
            </form>
          </div>
        </section>
      ) : showFlights && window.innerWidth >= 1024 ? (
        <>
          <section className="lg:mt-[60px] ">
            <div className="mx-8 flex flex-col gap-4 md:mx-10">
              <div className="flex gap-5">
                <div className="flex items-center">
                  <p className="font-[roboto] font-medium text-[16px] text-[#424244] lg:text-xl">
                    One-way
                  </p>
                  <div>
                    <img src={arrowDown} alt="arrowDown" />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <p className="font-[roboto] font-medium text-[16px] text-[#424244] lg:text-xl">
                    1 Adult
                  </p>
                  <div>
                    <img src={arrowDown} alt="arrowDown" />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <p className="font-[roboto] font-medium text-[16px] text-[#424244] lg:text-xl">
                    Economy
                  </p>
                  <div>
                    <img src={arrowDown} alt="arrowDown" />
                  </div>
                </div>
              </div>
              <form
                className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5 lg:grid-cols-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <select
                    name="fromDestination"
                    className="font-[roboto] font-normal text-[14px] border border-[#FF6700] rounded-[10px] p-3 w-full outline-none md:w-full md:text-[16px]"
                    value="Tbilisi"
                  >
                    <option value="Tbilisi">Tbilisi</option>
                    <option value="Option 1">Paris</option>
                    <option value="Option 2">Berlin</option>
                    <option value="Option 3">London</option>
                    <option value="Option 4">Rome</option>
                  </select>
                </div>
                <div>
                  <select
                    name="toDestination"
                    className="font-[roboto] font-normal text-[14px] border border-[#FF6700] rounded-[10px] p-3 w-full outline-none md:w-full md:text-[16px]"
                    value="Paris"
                  >
                    <option value="Paris">Paris</option>
                    <option value="Option 1">Paris</option>
                    <option value="Option 2">Berlin</option>
                    <option value="Option 3">London</option>
                    <option value="Option 4">Rome</option>
                  </select>
                </div>
                <div>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    name="lastName"
                    placeholder="Enter your last name"
                    className={`placeholder-[#424244] font-[roboto] font-normal text-[14px] border border-[#FF6700] rounded-[10px] p-3 w-full outline-none md:w-full  md:text-[16px]`}
                  />
                </div>
                <button
                  className="block text-[roboto] font-normal text-[16px] hover:bg-[#C85100] bg-[#FF6700] rounded-[12px] text-white p-[10px] md:text-xl cursor-pointer lg:text-2xl"
                  onClick={handleShow}
                >
                  Search
                </button>
              </form>
            </div>
          </section>
          <section className="h-[45px] lg:hidden">
            <div className=" flex justify-between px-5 py-3 bg-[#FFF6F0] md:px-10 ">
              <div>
                <h2 className=" font-medium font-[inter] text-[#424244] text-[18px] md:text-[28px]">
                  Tbilisi-Paris
                </h2>
                <p className=" font-medium font-[inter] text-[#424244] text-[16px] md:text-xl">
                  {selectedDate.split("-").join(".")} 2 adults
                </p>
              </div>
              <div>
                <img src={pencilImg} alt="pencil" className="md:w-[35px]" />
              </div>
            </div>
          </section>
          <div className="flex justify-center">
            <Link
              className=" font-[inter] font-medium text-xl hover:bg-[#C85100] bg-[#FF6700] rounded-[10px] text-white p-[10px] md:text-[28px] md:mt-20 w-[90%] mt-10 text-center lg:hidden"
              to="/host/filters"
            >
              filters
            </Link>
          </div>
          <div className="lg:flex lg:justify-items-start   lg:gap-24  mx-10">
            {window.innerWidth >= 1024 && <FilterList />}
            <div>
              <div className=" mt-6 grid grid-cols-1 justify-items-center gap-9">
                {mappedData}
              </div>
              <div className="flex justify-center">
                <button className=" font-[inter] font-medium text-xl hover:bg-[#C85100] bg-[#FF6700] rounded-[10px] text-white p-[10px] md:text-xl w-[90%] mt-9">
                  Show more results
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <section className="h-[45px] lg:hidden">
            <div className=" flex justify-between px-5 py-3 bg-[#FFF6F0] md:px-10 ">
              <div>
                <h2 className=" font-medium font-[inter] text-[#424244] text-[18px] md:text-[28px]">
                  Tbilisi-Paris
                </h2>
                <p className=" font-medium font-[inter] text-[#424244] text-[16px] md:text-xl">
                  {selectedDate.split("-").join(".")} 2 adults
                </p>
              </div>
              <div>
                <img src={pencilImg} alt="pencil" className="md:w-[35px]" />
              </div>
            </div>
          </section>
          <div className="flex justify-center">
            <Link
              className=" font-[inter] font-medium text-xl hover:bg-[#C85100] bg-[#FF6700] rounded-[10px] text-white p-[10px] md:text-[28px] md:mt-20 w-[90%] mt-10 text-center lg:hidden"
              to="/host/filters"
            >
              filters
            </Link>
          </div>
          <div className="lg:flex lg:mx-44">
            <div>
              <div className=" mt-6 grid grid-cols-1 justify-items-center gap-9">
                {mappedData}
              </div>
              <div className="flex justify-center">
                <button className=" font-[inter] font-medium text-xl hover:bg-[#C85100] bg-[#FF6700] rounded-[10px] text-white p-[10px] md:text-xl w-[90%] mt-9">
                  Show more results
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Flights;
