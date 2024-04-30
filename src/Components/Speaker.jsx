import React, { Component } from "react";
import speaker from "../assets/stinfo.jpg";


export default class Slider extends Component {
  render() {
    return (
      <div className=" mt-14 2xl:w-[80%] mx-auto ">
        <div className="slider bg-[#e7e7e7] lg:flex-row-reverse lg:flex lg:items-center  lg:justify-center">
          <div className="left  ">
            <img src={speaker} alt="slider" />
          </div>
          <div className="right bg-white pl-6 lg:ml-24 lg:bg-[#e7e7e7] p-1  space-y-6 lg:mr-24">
            <div >
              <h1 className="text-2xl font-medium pb-4 ">Xbox Series S</h1>
              <span  >Next-gen performance in the smallest Xbox ever</span>
            </div>
            <div className="button ">
              <button className="bg-[#0067b8] py-2  text-nowrap px-4 lg:hover:bg-[#005896] rounded-sm text-white">
              Shop Xbox Series S
              </button>
            </div>
          </div>
          <hr />
        </div>
        <hr />
      </div>
    );
  }
}
