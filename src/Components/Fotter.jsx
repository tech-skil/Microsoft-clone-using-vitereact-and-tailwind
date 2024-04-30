import React from 'react'

const Fotter = () => {
  return (
    <>
      <div className="bg-[#f2f2f2] w-full mx-auto px-4 mt-1 space-y-10 sm:grid sm:grid-cols-3 sm:gap-4  lg:grid lg:grid-cols-6 lg:gap-8 lg:px-14 ">
        <div>
          <div className='pb-3 space-y-4 '>
            <div className='text-[#616161] font-medium text-sm pt-10'>What&#39;s new</div>
            <ul className='text-xs flex space-y-4 flex-col text-gray-500 break-words'>
              <li><a href="#">Games</a></li>
              <li><a href="#">Surface Pro 9</a></li>
              <li><a href="#"> Surface Laptop 5 </a></li>
              <li><a href="#"> Surface Laptop Go 2 </a></li>
              <li><a href="#"> Microsoft Copilot </a></li>
              <li><a href="#"> Microsoft 365 </a></li>
              <li><a href="#"> Windows 11 apps </a></li>
            </ul>
          </div>
        </div>

        <div>
          <div className='pb-3 space-y-4'>
            <div className='text-[#616161] font-medium text-sm'>Microsoft Store</div>
            <ul className='text-xs flex space-y-4 flex-col text-gray-500 break-words'>
              <li><a href="#">Account profile</a></li>
              <li><a href="#">Download Center</a></li>
              <li><a href="#"> Microsoft Store Support </a></li>
              <li><a href="#"> Returns </a></li>
              <li><a href="#"> Order tracking </a></li>
              <li className='hidden sm:block'><a href="#">  </a></li>
              <li className='hidden sm:block'><a href="#">   </a></li>
              <li className='hidden sm:block'><a href="#">  </a></li>
              <li className='hidden sm:block'><a href="#">  </a></li>
              <li className='hidden sm:block'><a href="#">   </a></li>
              <li className='hidden sm:block'><a href="#">   </a></li>
            </ul>
          </div>
        </div>

        <div>
          <div className='pb-3 space-y-4'>
            <div className='text-[#616161] font-medium text-sm'>Education</div>
            <ul className='text-xs flex space-y-4 flex-col text-gray-500 break-words'>
              <li><a href="#">Microsoft in education</a></li>
              <li><a href="#">Devices for education</a></li>
              <li><a href="#"> Microsoft Teams for Education</a></li>
              <li><a href="#"> Microsoft 365 Education </a></li>
              <li><a href="#"> Office Education</a></li>
              <li><a href="#"> Educator training and development</a></li>
              <li><a href="#">Deals for students and parents </a></li>
              <li><a href="#"> Azure for students </a></li>
            </ul>
          </div>
        </div>

        <div>
          <div className='pb-3 space-y-4'>
            <div className='text-[#616161] font-medium text-sm'>Business</div>
            <ul className='text-xs flex space-y-4 flex-col text-gray-500 break-words'>
              <li><a href="#">Microsoft Cloud</a></li>
              <li><a href="#">Microsoft Security</a></li>
              <li><a href="#"> Azure</a></li>
              <li><a href="#"> Dynamics 365 </a></li>
              <li><a href="#"> Microsoft 365</a></li>
              <li><a href="#"> Microsoft Advertising</a></li>
              <li><a href="#">Copilot for Microsoft 365 </a></li>
              <li><a href="#"> Microsoft Teams </a></li>
            </ul>
          </div>
        </div>

        <div>
          <div className='pb-3 space-y-4'>
            <div className='text-[#616161] font-medium text-sm'>Developer &amp; IT</div>
            <ul className='text-xs flex space-y-4 flex-col text-gray-500 break-words'>
              <li><a href="#">Developer Center</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#"> Microsoft Learn  </a></li>
              <li><a href="#">Microsoft Tech Community </a></li>
              <li><a href="#"> Azure Marketplace</a></li>
              <li><a href="#"> AppSource</a></li>
              <li><a href="#">Microsoft Power Platform </a></li>
              <li><a href="#"> Visual Studio </a></li>
              <li className='hidden sm:block'><a href="#">   </a></li>
              <li className='hidden sm:block'><a href="#">   </a></li>
            </ul>
          </div>
        </div>

        <div>
          <div className='pb-3 space-y-4'>
            <div className='text-[#616161] font-medium text-sm'>Company</div>
            <ul className='text-xs flex space-y-4 flex-col text-gray-500 break-words'>
              <li><a href="#">Careers</a></li>
              <li><a href="#">About Microsoft</a></li>
              <li><a href="#">Company news </a></li>
              <li><a href="#">Privacy at Microsoft </a></li>
              <li><a href="#"> Investors</a></li>
              <li><a href="#"> Security</a></li>
              <li><a href="#">Sustainability </a></li>
              <li className='hidden sm:block'><a href="#">   </a></li>
              <li className='hidden sm:block'><a href="#">   </a></li>
              <li className='hidden sm:block'><a href="#">   </a></li>
              <li className='hidden sm:block'><a href="#">   </a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Fotter