import React, { Component } from 'react';
import laptops from "../assets/lpimg.jpg";
import laptops2 from "../assets/img2.jpg";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <div className="slider bg-[#f2f2f2] md:flex md:items-center ">
          <div className="left  ">
            <img src={laptops}  alt="slider" className='hidden md:block'/>
            <img src={laptops2}  alt="slider" className=' md:hidden'/>
          </div>
          <div className="right bg-white md:bg-[#f2f2f2] p-6 space-y-6 md:mr-24">
            <div>
            <h1 className='text-2xl font-medium pb-4'>
              Surface Pro 9
            </h1>
            <span>
              Tablet versatility and laptop power — all in one ultra-portable device
            </span>
            </div>
            <div className="button">
            <button className='bg-[#0067b8] py-2  px-4 md:hover:bg-[#005896] rounded-sm text-white'>
              Learn more
            </button>
            </div>
          </div>
          <hr />
        </div>
        <hr />
      </div>
    )
  }
}
