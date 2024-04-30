import React from 'react';
import ms1 from "../assets/mspro1.svg";
import ms2 from "../assets/mspro2.svg";
import ms3 from "../assets/mspro3.svg";

const Promo = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-wrap py-10 px-8 space-x-[2rem]  md:space-x-10 md:text-sm  ">
        <div  className=' flex flex-col items-center justify-center text-wrap w-fit cursor-pointer md:space-y-2    mx-[1.82rem] md:mx-0 my-4 md:my-0'>
          <img src={ms1} className='w-10 items-center text-sm' alt="" />
          <span className=' text-center text-[#0067b8] underline underline-offset-1 font-medium'>Choose your Microsoft 365</span>
        </div>
        <div className=' flex flex-col justify-center text-wrap cursor-pointer md:space-y-2 pr-6 items-center mx-[1.82rem] md:mx-0  my-4 md:my-0'>
          <img src={ms2} className='w-10  text-sm' alt="" />
          <span  className='text-[#0067b8] text-center underline underline-offset-1 font-medium'>Shop Xbox</span>
        </div>
        <div className=' flex flex-col items-center justify-center text-wrap w-fit cursor-pointer md:space-y-2 mx-[1.82rem] md:mx-0 pr-6  my-4 md:my-0'>
          <img src={ms1} className='w-10  text-sm' alt="" />
          <span className='text-[#0067b8] text-center underline underline-offset-1  font-medium'>Get Windows 11</span>
        </div>
        <div className=' flex flex-col  text-wrap cursor-pointer md:space-y-2 items-center pr-8   mx-[1.82rem]   md:mx-0 my-4 md:my-0'>
          <img src={ms3} className='w-10  text-sm' alt="" />
          <span className='text-[#0067b8] underline underline-offset-1 font-medium text-center'>Explore Surface devices</span>
        </div>
      </div>
    </div>
  )
}

export default Promo
