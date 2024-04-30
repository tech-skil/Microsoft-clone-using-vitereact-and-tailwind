import React from "react";
import lp1 from "../assets/lp1.webp";
import lp2 from "../assets/lp2.webp";
import lp3 from "../assets/lp3.webp";
import lp4 from "../assets/lp4.avif";
const Shop = () => {
  return (
    <div className="md:flex md:flex-row sm:flex sm:flex-wrap   sm:mx-2   space-x-4 space-y-8  md:flex-wrap  flex flex-col items-center justify-center">
      <div className="mt-8 h-full   w-[95vw]  sm:w-full   relative md:w-72 text-wrap shadow-slate-300 shadow-lg border-2 border-[#f2f2f2] ">
        <div className="">
          <img className="bg-cover bg-no-repeat w-full" src={lp1} alt="" />
        </div>
        <div className="pb-4 pt-5 ml-6 ">
          <h1 className="font-semibold text-lg pb-2">Surface Laptop 5</h1>
          <p className=" text-sm ">
            Sophisticated style and multitasking speed powered by 12th Gen
            Intel® Core, with Windows 11.
          </p>
          <div className="button mt-14">
            <button className="bg-[#0067b8] sm:py-1 sm:text  sm:px-2  py-1  px-2  text-lg hover:bg-[#005896] rounded-sm text-white">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8  h-full  w-[95vw] sm:w-full  relative md:w-72 text-wrap shadow-slate-300 shadow-lg border-2 border-[#f2f2f2] ">
        <div>
          <img className="bg-cover bg-no-repeat w-full" src={lp2} alt="" />
        </div>
        <div className="pb-4  pt-5 ml-6">
          <h1 className="font-semibold text-lg pb-2">Surface Laptop Studio</h1>
          <p className=" text-sm ">
            {" "}
            Flex your creative muscle on the most powerful Surface Laptop. Now
            available with Windows 11.{" "}
          </p>
          <div className="button mt-10">
          <div className="button mt-14">
            <button className="bg-[#0067b8] sm:py-1 sm:text  sm:px-2  py-1  px-2  text-lg hover:bg-[#005896] rounded-sm text-white">
              Learn more
            </button>
          </div>
          </div>
        </div>
      </div>
      <div className="mt-8  h-full  w-[95vw]  sm:w-full relative md:w-72 text-wrap shadow-slate-300 shadow-lg border-2 border-[#f2f2f2] ">
        <div>
          <img className="bg-cover bg-no-repeat w-full" src={lp3} alt="" />
        </div>
        <div className="pb-4 pt-5 ml-6">
          <h1 className="font-semibold text-lg pb-2">Xbox Series X</h1>
          <p className=" text-sm mb-10  "> The fastest, most powerful Xbox ever. </p>
          <div className="button mt-4 sm:mt-24  ">
            <button className="bg-[#0067b8] sm:py-1 sm:text  sm:px-2  py-1  px-2  text-lg hover:bg-[#005896] rounded-sm text-white">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8  h-full  w-[95vw] sm:w-full  relative md:w-72 text-wrap shadow-slate-300 shadow-lg border-2 border-[#f2f2f2] ">
        <div>
          <img className="bg-cover bg-no-repeat w-full" src={lp4} alt="" />
        </div>
        <div className="pb-4 pt-5 ml-6">
          <h1 className="font-semibold text-lg pb-2">
            Maximise the everyday with Microsoft 365
          </h1>
          <p className=" text-sm ">
            {" "}
            Get online protection, secure cloud storage and innovative apps
            designed to fit your needs – all in one plan.{" "}
          </p>
          <div className="button mt-8">
            <button className="bg-[#0067b8] sm:py-1 sm:text  sm:px-2  py-1  px-2  text-lg hover:bg-[#005896] rounded-sm text-white">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
