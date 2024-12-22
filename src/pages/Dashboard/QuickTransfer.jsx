import React, { useRef, useState } from 'react';
import designerThree from '../../assets/quick transfer/designer3.svg';
import designerTwo from '../../assets/quick transfer/designer2.svg';
import designerOne from '../../assets/quick transfer/designer1.svg';
import ceo from '../../assets/quick transfer/ceo.svg';
import director from '../../assets/quick transfer/director.svg';
import { FaPaperPlane } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



function QuickTransfer() {
  const scrollContainer = useRef(null);
  const [listOfMember, setListOfMember] = useState([
    {
      image: ceo,
      title: 'Livia Bator',
      designation: 'CEO'
    },
    {
      image: director,
      title: 'Randy Press',
      designation: 'Director'
    },
    {
      image: designerOne,
      title: 'Workman',
      designation: 'Designer'
    },
    {
      image: designerTwo,
      title: 'Workman',
      designation: 'Designer'
    },
    {
      image: designerThree,
      title: 'Workman',
      designation: 'Designer'
    }
  ]);


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
      <h2 className="text-base md:text-[22px] text-customBlack font-semibold font-inter mt-[16px] md:mt-[0] mb-[16px] md:mb-4">Quick Transfer</h2>
      <div className='bg-white w-[314px] md:w-[445px] h-[195px] md:h-[276px] rounded-[15px] md:rounded-3xl relative'>
        <div className="py-[.5rem] md:py-10 px-[15px] md:px-[30px] max-w-md mx-auto">
          <div className="flex overflow-x-auto hide-scrollbar space-x-4 pb-4 md:pb-4 w-[247px] md:w-[335px]" ref={scrollContainer}>
            {listOfMember.map((list) =>
              <div className="flex flex-col items-center w-[4.1rem] md:w-24 shrink-0">
                <div className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-full overflow-hidden mb-2">
                  <img
                    src={list.image}
                    alt="Livia Bator"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs md:text-sm text-[#232323] font-normal">{list.title}</p>
                <p className="text-xs md:text-sm text-[#718EBF] font-normal">{list.designation}</p>
              </div>)}
          </div>

          {/* Scroll Button */}
          <button
            onClick={scrollNext}
            className="absolute right-4 top-20 transform -translate-y-12 md:-translate-y-1/2 w-[40px] md:w-[50px] h-[40px] md:h-[50px] flex items-center justify-center bg-white shadow-md rounded-full">
            <MdOutlineKeyboardArrowRight className='text-[#718EBF] text-[32px] !important' />
          </button>

          {/* Write Amount Section */}
          <div className="mt-2 md:mt-6 flex items-center justify-between md:justify-normal space-x-2">
            <p className='text-xs md:text-base text-[#718EBF] font-normal font-inter'>Write Amount</p>
            <div className='relative'>
              <input
                type="number"
                placeholder="Write Amount"
                className="w-[187px] md:w-[265px] h-[40px] md:h-[50px] bg-[#EDF1F7] px-[10px] md:px-[1.5rem] py-2 text-[#718EBF] text-xs md:text-base rounded-full focus:outline-none"
              />
              <button className="flex items-center justify-center gap-2 bg-[#232323] text-white rounded-full text-[13px] md:text-base font-medium absolute top-0 right-0 h-[40px] md:h-[50px] w-[100px] md:w-[125px] font-inter">
                Send
                <FaPaperPlane className='text-[13px] md:text-[26px]' />

              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default QuickTransfer