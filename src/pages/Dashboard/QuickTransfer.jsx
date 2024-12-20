import React, { useRef } from 'react';
import designerThree from '../../assets/quick transfer/designer3.svg';
import designerTwo from '../../assets/quick transfer/designer2.svg';
import designerOne from '../../assets/quick transfer/designer1.svg';
import ceo from '../../assets/quick transfer/ceo.svg';
import director from '../../assets/quick transfer/director.svg';
import { FaPaperPlane } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



function QuickTransfer() {
  const scrollContainer = useRef(null);

  const scrollNext = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: 150,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <h2 className="text-[22px] text-customBlack font-semibold font-inter mb-4">Quick Transfer</h2>
      <div className='bg-white w-[445px] h-[276px] rounded-3xl relative'>
        <div className="pb-10 pt-10 pl-[30px] pr-[30px] max-w-md mx-auto">
          <div className="flex overflow-x-hidden space-x-4 pb-4 w-[335px]" ref={scrollContainer}>
            {/* First Item */}
            <div className="flex flex-col items-center w-24 shrink-0">
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden mb-2">
                <img
                  src={ceo}
                  alt="Livia Bator"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-[#232323] font-semibold">Livia Bator</p>
              <p className="text-sm text-[#718EBF] font-medium">CEO</p>
            </div>

            {/* Second Item */}
            <div className="flex flex-col items-center w-24 shrink-0">
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden mb-2">
                <img
                  src={director}
                  alt="Randy Press"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-[#232323] font-semibold">Randy Press</p>
              <p className="text-sm text-[#718EBF] font-normal">Director</p>
            </div>

            {/* Third Item */}
            <div className="flex flex-col items-center w-24 shrink-0">
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden mb-2">
                <img
                  src={designerOne}
                  alt="Workman"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-[#232323] font-semibold">Workman</p>
              <p className="text-sm text-[#718EBF] font-normal">Designer</p>
            </div>
            {/* Fourth Item */}
            <div className="flex flex-col items-center w-24 shrink-0">
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden mb-2">
                <img
                  src={designerTwo}
                  alt="Workman"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-[#232323] font-semibold">Workman</p>
              <p className="text-sm text-[#718EBF] font-normal">Designer</p>
            </div>
            {/* Fifth Item */}
            <div className="flex flex-col items-center w-24 shrink-0">
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden mb-2">
                <img
                  src={designerThree}
                  alt="Workman"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-[#232323] font-semibold">Workman</p>
              <p className="text-sm text-[#718EBF] font-normal">Designer</p>
            </div>
          </div>

          {/* Scroll Button */}
          <button
            onClick={scrollNext}
            className="absolute right-4 top-20 transform -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center bg-white shadow-md rounded-full">
            <MdOutlineKeyboardArrowRight className='text-[#718EBF] text-[32px] !important' />
          </button>

          {/* Write Amount Section */}
          <div className="mt-6 flex items-center space-x-2">
            <p className='text-base text-[#718EBF] font-normal font-inter'>Write Amount</p>
            <div className='relative'>
              <input
                type="number"
                placeholder="Write Amount"
                className="w-[265px] h-[50px] bg-[#EDF1F7] px-4 py-2 text-[#718EBF] text-base rounded-full focus:outline-none"
              />
              <button className="flex items-center justify-center gap-2 bg-[#232323] text-white rounded-full text-base font-medium absolute top-0 right-0 h-[50px] w-[125px] text-base font-medium font-inter">
                Send
                <FaPaperPlane className='text-[26px]' />
                
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default QuickTransfer