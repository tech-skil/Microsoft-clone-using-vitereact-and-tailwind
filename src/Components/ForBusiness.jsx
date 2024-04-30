import React from "react";

import fb from "../assets/fb.avif";
import X from "../assets/xicon.webp";
import yt from "../assets/yt.webp";
import b1 from "../assets/b1.avif";
import b2 from "../assets/b2.avif";
import b3 from "../assets/b3.webp";
import b4 from "../assets/b4.avif";
const Shop = () => {
  return (
    <>
      <h1 className="text-4xl  font-semibold ml-2  lg:ml-10 2xl:ml-40 mt-16 -mb-4" >For business</h1>
    <div className="md:flex md:flex-row sm:flex sm:flex-wrap   sm:mx-2   space-x-4 space-y-8  md:flex-wrap  flex flex-col items-center justify-center">
      <div className="mt-8 h-full   w-[95vw]  sm:w-full   relative md:w-72 text-wrap shadow-slate-300 shadow-lg border-2 border-[#f2f2f2] ">
        <div className="">
          <img className="bg-cover bg-no-repeat w-full" src={b1} alt="" />
        </div>
        <div className="pb-4 pt-5 ml-6 ">
          <h1 className="font-semibold text-lg pb-2">Surface for Business</h1>
          <p className=" text-sm ">
          No matter what you do, there’s a Surface to help you do it.
          </p>
          <div className="button mt-20">
            <button className="bg-[#0067b8] sm:py-1 sm:text  sm:px-2  py-1  px-2  text-lg hover:bg-[#005896] rounded-sm text-white">
              Shop now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8  h-full  w-[95vw] sm:w-full  relative md:w-72 text-wrap shadow-slate-300 shadow-lg border-2 border-[#f2f2f2] ">
        <div>
          <img className="bg-cover bg-no-repeat w-full" src={b2} alt="" />
        </div>
        <div className="pb-4  pt-5 ml-6">
          <h1 className="font-semibold text-lg pb-2"> Copilot for Microsoft 365</h1>
          <p className=" text-sm ">
            Save time and focus on the things that matter most with AI in Microsoft 365 for business.{" "}
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
          <img className="bg-cover bg-no-repeat w-full" src={b3} alt="" />
        </div>
        <div className="pb-4 pt-5 ml-6">
          <h1 className="font-semibold text-lg pb-2"> Visual Studio 2022</h1>
          <p className=" text-sm mb-10  "> Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services and games. </p>
          <div className="button mt-4 sm:mt-2 ">
            <button className="bg-[#0067b8] sm:py-1 sm:text  sm:px-2  py-1  px-2  text-lg hover:bg-[#005896] rounded-sm text-white">
            Download Visual Studio 2022
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8  h-full  w-[95vw] sm:w-full  relative md:w-72 text-wrap shadow-slate-300 shadow-lg border-2 border-[#f2f2f2] ">
        <div>
          <img className="bg-cover bg-no-repeat w-full" src={b4} alt="" />
        </div>
        <div className="pb-4 pt-5 ml-6">
          <h1 className="font-semibold text-lg pb-2">
          Join the era of AI
          </h1>
          <p className=" text-sm ">
          Create, communicate, and code with the latest Microsoft AI solutions.{" "}
          </p>
          <div className="button mt-20">
            <button className="bg-[#0067b8] sm:py-1 sm:text  sm:px-2  py-1  px-2  text-lg hover:bg-[#005896] rounded-sm text-white">
            Explore AI solutions
            </button>
          </div>
        </div>
      </div>
    </div>

      <div className="flex flex-row space-x-5 items-center ml-4 flex-wrap 2xl:ml-44 text-sm py-24">
        <div>
          <h1>Follow Microsoft</h1>
        </div>
        <div className="flex flex-row space-x-5 items-center " >

        <div className="img1 w-8">
          <img src={fb}  alt="" />
        </div>
        <div className="img2 w-8">
          <img src={X} alt="" />
        </div>
        <div className="img3 w-8">
          <img src={yt} alt="" />
        </div>
      </div>
      </div>

    </>
  );
};

export default Shop;
