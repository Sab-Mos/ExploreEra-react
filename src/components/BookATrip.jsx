import React from "react";

const BookATrip = () => {
  return (
    <section className=" my-6 md:my-8 lg:my-16 lg:bg-[#E0E0E0] bg-transparent w-full h-[336px] md:h-[248px] lg:h-[400px] px-auto">
      <div>
        <h2 className=" font-[roboto] font-medium   md:text-4xl text-2xl lg:p-10 text-[#424244] ml-11 md:ml-10 lg:ml-0 p-0 md:my-8 lg:my-0">
          Ready To Book A Trip?
        </h2>
        <div className="lg:bg-transparent bg-[#E0E0E0] px-11 py-4">
          <form>
            <div className="grid md:grid-cols-2 md:gap-x-5  gap-y-4 lg:gap-x-16 lg:gap-y-7 items-start">
              <select
                className="py-3 px-4 pe-9 block 
            border-gray-200 
             rounded-lg text-xl lg:text-[28px] font-[roboto] font-normal outline-none mx-auto w-full"
              >
                <option selected="">Your starting location</option>
                <option className=" text-[18px]">Rome, Italy</option>
                <option className=" text-[18px]">Luxor City, Egypt</option>
                <option className=" text-[18px]">Paris, France</option>
                <option className=" text-[18px]">Barcelona, Spain</option>
                <option className=" text-[18px]">Tsavo, Kenya</option>
                <option className=" text-[18px]">Prague, Chequia</option>
                <option className=" text-[18px]">Shanghai China</option>
                <option className=" text-[18px]">Hanauma, Hawaii</option>
              </select>
              <select
                className="py-3 px-4 pe-9 block 
              border-gray-200 
               rounded-lg text-xl lg:text-[28px] font-[roboto] font-normal outline-none mx-auto w-full"
              >
                <option selected="">Choose a tour offer</option>
                <option className=" text-[18px] lg:text-[28px]">1</option>
                <option className=" text-[18px] lg:text-[28px]">2</option>
                <option className=" text-[18px] lg:text-[28px]">3</option>
              </select>
              <select
                className="py-3 px-4 pe-9 block 
              border-gray-200 
               rounded-lg text-xl lg:text-[28px] font-[roboto] font-normal outline-none mx-auto w-full"
              >
                <option selected="">Choose date</option>
                <option className=" text-[18px] lg:text-[28px]">1</option>
                <option className=" text-[18px] lg:text-[28px]">2</option>
                <option className=" text-[18px] lg:text-[28px]">3</option>
              </select>
              <select
                className="py-3 px-4 pe-9 block 
            border-gray-200 
             rounded-lg text-xl lg:text-[28px] font-[roboto] font-normal outline-none mx-auto w-full"
              >
                <option selected="">Persons</option>
                <option className=" text-[18px] lg:text-[28px]">1</option>
                <option className=" text-[18px] lg:text-[28px]">2</option>
                <option className=" text-[18px] lg:text-[28px]">3</option>
              </select>
            </div>
          </form>
          <button
            className=" mt-3 border-none bg-[#FF6700] w-full  text-white font-[roboto]  text-center text-2xl rounded-lg  py-3 px-12
             lg:mt-8 hover:bg-[#C85100]
"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookATrip;
