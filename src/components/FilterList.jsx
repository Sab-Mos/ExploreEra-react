import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Line from "../images/Line1.png";
import downArrow from "../images/Chevron_Down.png";
import upArrow from "../images/Chevron_Up.png";
import sliderLine from "../images/sliderLine.png";
import ellipse from "../images/ellipse.png";
import bag from "../images/bag.png";
import handBag from "../images/Handbag.png";
import card from "../images/Credit_Card_01.png";

const FilterList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });

    if (!value) {
      setSearchParams((prevParams) => {
        prevParams.delete(key);
        return prevParams;
      });
    }
  }

  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown((prev) => !prev);
  };
  const [timesDropDown, setTimesDropDown] = useState(false);

  const handleTimesDropDown = () => {
    setTimesDropDown((prev) => !prev);
  };
  const [durationDropDown, setDurationDropDown] = useState(false);

  const handleDurationDropDown = () => {
    setDurationDropDown((prev) => !prev);
  };

  const [priceDropDown, setPriceDropDown] = useState(false);

  const handlePriceDropDown = () => {
    setPriceDropDown((prev) => !prev);
  };

  const [priceCalcDropDown, setPriceCalcDropDown] = useState(false);

  const handlePriceCalcDropDown = () => {
    setPriceCalcDropDown((prev) => !prev);
  };

  return (
    <section className="pt-0 pb-0 md:pb-20 md:mt-10 px-8 md:px-0 mt-24 flex flex-col gap-6 lg:w-[238px] lg:mt-0">
      <div className="md:flex md:justify-center">
        <Link
          className="font-[inter] font-medium text-xl hover:bg-[#C85100] bg-[#FF6700] rounded-[10px] text-white p-[10px] md:text-xl w-full mt-0 md:mt-20 md:w-[90%] text-center lg:hidden block"
          to=".."
          relative="path"
          state={{ search: `?${searchParams.toString()}` }}
        >
          {" "}
          filters
        </Link>{" "}
      </div>

      <div className="flex flex-col gap-6 md:container md:mx-auto">
        <div className=" bg-white  rounded-xl p-5">
          <div className=" flex flex-col gap-2">
            <p className="font-[roboto] text-2xl text-[#424244]">Cheapest</p>
            <div>
              <img src={Line} />
            </div>
            <p className="font-[roboto] text-2xl text-[#424244]">Quickest</p>
            <div>
              <img src={Line} />
            </div>
            <p className="font-[roboto] text-2xl text-[#424244]">best</p>
            <div>
              <img src={Line} />
            </div>
          </div>
        </div>
        <div className=" bg-white  rounded-xl p-5 flex flex-col gap-6">
          <div>
            <div className="flex justify-between">
              <button className="font-[roboto] text-2xl text-[#424244]">
                Stops
              </button>
              <img
                src={dropDown ? upArrow : downArrow}
                onClick={handleDropDown}
              />
            </div>
            {dropDown && (
              <div className="flex flex-col gap-5 mt-5">
                <div className="flex gap-5 items-center">
                  <input
                    type="checkbox"
                    id="direct"
                    className="h-10 w-10 accent-orange-500"
                    onChange={(e) =>
                      handleFilterChange(
                        "stop",
                        e.target.checked ? "direct" : null
                      )
                    }
                  />
                  <label
                    className="font-[roboto] text-2xl text-[#424244]accent-orange-500"
                    htmlFor="direct"
                  >
                    Direct
                  </label>
                </div>
                <div className="flex gap-5 items-center">
                  <input
                    type="checkbox"
                    id="oneStop"
                    className="h-10 w-10 accent-orange-500"
                    onChange={(e) =>
                      handleFilterChange(
                        "stop",
                        e.target.checked ? "oneStop" : null
                      )
                    }
                  />
                  <label
                    className="font-[roboto] text-2xl text-[#424244]"
                    htmlFor="oneStop"
                  >
                    One stop
                  </label>
                </div>
                <div className="flex gap-5 items-center">
                  <input
                    type="checkbox"
                    id="twoStops"
                    className="h-10 w-10 accent-orange-500"
                    onChange={(e) =>
                      handleFilterChange(
                        "stop",
                        e.target.checked ? "twoStop" : null
                      )
                    }
                  />
                  <label
                    className="font-[roboto] text-2xl text-[#424244]"
                    htmlFor="twoStops"
                  >
                    Two stops
                  </label>
                </div>
              </div>
            )}
          </div>
          <div>
            <div className="flex justify-between">
              <button className="font-[roboto] text-2xl text-[#424244]">
                Times
              </button>
              <img
                src={timesDropDown ? upArrow : downArrow}
                onClick={handleTimesDropDown}
              />
            </div>
            {timesDropDown && (
              <div className="flex flex-col gap-5 mt-5">
                <div className="flex flex-col gap-2">
                  <p className="font-[roboto] text-2xl text-[#424244]">
                    Take off - Tbilisi
                  </p>
                  <div className="flex justify-between">
                    <p className="font-[roboto]  text-xl text-[#424244] text-opacity-60">
                      12:00
                    </p>
                    <p className="font-[roboto] text-xl text-[#424244] text-opacity-60">
                      24:00
                    </p>
                  </div>
                  <div className="flex items-center md:justify-between">
                    <div>
                      <img src={ellipse} />
                    </div>

                    <div>
                      <img src={sliderLine} className="md:w-[700px]" />
                    </div>

                    <div>
                      <img src={ellipse} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-[roboto] text-2xl text-[#424244]">
                    Take off - Paris
                  </p>
                  <div className="flex justify-between">
                    <p className="font-[roboto] text-xl text-[#424244] text-opacity-60">
                      12:00
                    </p>
                    <p className="font-[roboto] text-xl  text-[#424244] text-opacity-60">
                      24:00
                    </p>
                  </div>
                  <div className="flex items-center md:justify-between">
                    <div>
                      <img src={ellipse} />
                    </div>

                    <div>
                      <img src={sliderLine} className="md:w-[700px]" />
                    </div>

                    <div>
                      <img src={ellipse} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-between">
            <button className="font-[roboto] text-2xl text-[#424244]">
              Airlines
            </button>
            <img src={downArrow} />
          </div>
          <div className="flex justify-between">
            <button className="font-[roboto] text-2xl text-[#424244]">
              Airports
            </button>
            <img src={downArrow} />
          </div>
          <div>
            <div className="flex justify-between">
              <button className="font-[roboto] text-2xl text-[#424244]">
                Duration
              </button>
              <img
                src={durationDropDown ? upArrow : downArrow}
                onClick={handleDurationDropDown}
              />
            </div>
            {durationDropDown && (
              <div className="flex flex-col gap-5 mt-5">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p className="font-[roboto] text-xl  text-[#424244] text-opacity-60">
                      7 Hours
                    </p>
                    <p className="font-[roboto] text-xl text-[#424244] text-opacity-60">
                      30 Hours
                    </p>
                  </div>
                  <div className="flex items-center md:justify-between">
                    <div>
                      <img src={ellipse} />
                    </div>

                    <div>
                      <img src={sliderLine} className="md:w-[700px]" />
                    </div>

                    <div>
                      <img src={ellipse} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <div className="flex justify-between">
              <button className="font-[roboto] text-2xl text-[#424244]">
                Price
              </button>
              <img
                src={priceDropDown ? upArrow : downArrow}
                onClick={handlePriceDropDown}
              />
            </div>
            {priceDropDown && (
              <div className="flex flex-col gap-5 mt-5">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p className="font-[roboto] text-xl  text-[#424244] text-opacity-60">
                      700$
                    </p>
                    <p className="font-[roboto] text-xl  text-[#424244] text-opacity-60">
                      3000$
                    </p>
                  </div>
                  <div className="flex items-center md:justify-between">
                    <div>
                      <img src={ellipse} />
                    </div>

                    <div>
                      <img src={sliderLine} className="md:w-[700px]" />
                    </div>

                    <div>
                      <img src={ellipse} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <div className="flex justify-between">
              <button className="font-[roboto] text-2xl text-[#424244]">
                Price Calculator
              </button>
              <div>
                <img
                  src={priceCalcDropDown ? upArrow : downArrow}
                  onClick={handlePriceCalcDropDown}
                />
              </div>
            </div>
            {priceCalcDropDown && (
              <div className="flex flex-col gap-5 mt-5">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-[10px] items-center ">
                    <div>
                      <img src={card} />
                    </div>
                    <p className="font-[roboto] font-normal text-xl text-[#424244]">
                      Payment method
                    </p>
                  </div>
                  <p className="font-[roboto] font-normal text-xl text-[#424244] text-opacity-60 border border-black  py-2 px-3">
                    Choose payment method
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-[10px] items-center ">
                    <div>
                      <img src={handBag} />
                    </div>
                    <p className="font-[roboto] font-normal text-xl text-[#424244]">
                      Carry-on bag
                    </p>
                  </div>
                  <p className="font-[roboto] font-normal text-xl text-[#424244] text-opacity-60 border border-black  py-2 px-3">
                    Select bags (0)
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-[10px] items-center ">
                    <div>
                      <img src={bag} />
                    </div>
                    <p className="font-[roboto] font-normal text-xl text-[#424244]">
                      Select bags (0)
                    </p>
                  </div>
                  <p className="font-[roboto] font-normal text-xl text-[#424244] text-opacity-60 border border-black  py-2 px-3">
                    Choose payment method
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterList;
