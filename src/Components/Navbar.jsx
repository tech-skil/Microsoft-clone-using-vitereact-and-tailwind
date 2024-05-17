import React, { useState } from "react";
import logo from "../assets/ms_logo.png";
import cart from "../assets/cart.svg";
import profile from "../assets/profile.svg";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <div>
        <nav className="bg-white px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center -ml-6">
              <div></div>

              <div className="space-y-1 m-4 md:hidden hidden">
                <div className="lin bg-black h-[1px] w-6"></div>
                <div className="lin bg-black h-[0.81px] w-6"></div>
                <div className="lin bg-black h-[0.81px] w-6"></div>
              </div>

              <div className="text-gray-500 space-y-1 md:hidden">
                <Hamburger toggled={isOpen} size={20} toggle={toggleMenu} />
              </div>
              <div className="search md:hidden">
                <div>
                  <svg
                    className="w-6 h-4 text-gray-900 dark:text-gray-500 rotate-90"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="logo md:order-first md:m-4 flex space-x-4 items-center">
              <img
                src={logo}
                className="w-[5.5rem] cursor-pointer md:ml-10 md:mr-4"
                alt="logo"
              />
              <div
                className={`mobile-view md:flex md:space-x-0 md:text-xs  sm:hidden  ${
                  isOpen
                    ? "block absolute -left-5 top-12  w-screen bg-[#f2f2f2] z-10 border-t border-gray-200 pt-6 pb-6 px-6"
                    : "hidden sm:hidden"
                }`}
              >
                <div className={isOpen ? "mb-4" : ""}>
                  <a
                    href="#"
                    className={`block py-2 px-3 text-nowrap hover:decoration-1 hover:underline-offset-[4px] hover:underline ${
                      isOpen ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    Microsoft 365
                  </a>
                </div>
                <div className={isOpen ? "mb-4" : ""}>
                  <a
                    href="#"
                    className={`block py-2 px-3 hover:decoration-1 hover:underline-offset-[4px] hover:underline  ${
                      isOpen ? "text-gray-900" : "text-gray-600"
                    }`}
                  //   style={{
                  //     borderBottom: '2px solid black'
                  // }}
                  >
                    Teams
                  </a>
                </div>
                <div className={isOpen ? "mb-4" : ""}>
                  <a
                    href="#"
                    className={`block py-2 px-3  hover:decoration-1 hover:underline-offset-[4px] hover:underline ${
                      isOpen ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    Copilot
                  </a> 
                </div>
                <div className={isOpen ? "mb-4" : ""}>
                  <a
                    href="#"
                    className={`block py-2 px-3  hover:decoration-1 hover:underline-offset-[4px] hover:underline ${
                      isOpen ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    Windows
                  </a> 
                </div>
                <div className={isOpen ? "mb-4" : ""}>
                  <a
                    href="#"
                    className={`block py-2 px-3  hover:decoration-1 hover:underline-offset-[4px] hover:underline ${
                      isOpen ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    Surface
                  </a> 
                </div>
                <div className={isOpen ? "mb-4" : ""}>
                  <a
                    href="#"
                    className={`block py-2 px-3  hover:decoration-1 hover:underline-offset-[4px] hover:underline ${
                      isOpen ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    Xbox
                  </a> 
                </div>
                <div className={isOpen ? "mb-4" : ""}>
                  <a
                    href="#"
                    className={`block py-2 px-3  hover:decoration-1 hover:underline-offset-[4px] hover:underline ${
                      isOpen ? "text-gray-900 " : "text-gray-600"
                    }`}
                  >
                    Support
                  </a> 
                </div>
              </div>
            </div>
            
            <div className=" md:order-none flex md:space-x-4  items-center">
              <div className="text-xs hidden lg:block hover:decoration-2 hover:underline-offset-[4px] hover:underline  cursor-pointer ">All microsoft</div>
              <div className="search hidden  md:items-center md:space-x-1 md:justify-center md:hidden  lg:flex">
                <span className="text-xs  cursor-pointer hover:decoration-1 hover:underline-offset-[4px] hover:underline " > Search</span>
                <div className="md:hidden  lg:flex">
                  <svg
                    class="w-6 h-4 text-gray-900 cursor-pointer dark:text-gray-500 rotate-90"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="cart flex space-x-3  items-center   md:text-xs md:flex md:items-center md:space-x-3  ">
                <div className=" flex   md:hidden  lg:flex ">
                  <span className="hidden md:block cursor-pointer hover:decoration-1 hover:underline-offset-[4px] hover:underline">Cart</span>
                  <img src={cart} className="w-4 mr-4  cursor-pointer" alt="" />
                </div>
                <span className="hidden md:block text-nowrap cursor-pointer">Sign in</span>
                <div className="border border-1 border-gray-700 p-2  rounded-full ">
                  <img src={profile} className="h-3 cursor-pointer" alt="" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;