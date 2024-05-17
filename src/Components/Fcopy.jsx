import React from 'react'
import togel from "../assets/togel.svg";
import globe from "../assets/globe.svg";
const Fcopy = () => {
  return (
    <div className='bg-[#f2f2f2] w-full mt-0 p-4  lg:flex lg:flex-row lg:justify-between lg:px-12 lg:items-center '>
      <div className='space-y-2 lg:flex lg:flex-row lg:space-x-4 lg:items-center'>
      <div className='flex space-x-3 text-xs items-center text-gray-700 hover:decoration-0 hover:underline-offset-[2px] hover:underline cursor-pointer' >
      <img src={globe} className='w-5  cursor-pointer' alt="globe" />
      <span >English (India)</span>
      </div>
      <div className='flex space-x-3  text-xs text-gray-700 hover:decoration-0 hover:underline-offset-[2px] hover:underline cursor-pointer'>
      <img src={togel} className='w-8  cursor-pointer' alt="togel" />
      <span >Your Privacy Choices</span>
      </div>
      <div className='text-xs text-gray-700 cursor-pointer hover:decoration-0 hover:underline-offset-[2px] hover:underline'>
      Consumer Health Privacy
      </div>
      </div>
      <div>
        <ul className=" flex text-xs flex-wrap space-x-4 space-y-2">
          <li className='mt-2'><a href="#"  className='hover:decoration-0 hover:underline-offset-[2px] hover:underline cursor-pointer' >Contact Microsoft</a></li>
          <li><a href="#"  className='hover:decoration-0 hover:underline-offset-[2px] hover:underline'>Privacy</a></li>
          <li><a href="#"  className='hover:decoration-0 hover:underline-offset-[2px] hover:underline'>Manage cookies</a></li>
          <li><a href="#"  className='hover:decoration-0 hover:underline-offset-[2px] hover:underline'>Terms of use</a></li>
          <li><a href="#"  className='hover:decoration-0 hover:underline-offset-[2px] hover:underline'>Trademarks</a></li>
          <li><a href="#"  className='hover:decoration-0 hover:underline-offset-[2px] hover:underline'>About our ads</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Fcopy
