import React from 'react';
import Chip_Card from '../../assets/my card/Chip_Card.svg';
import master_card from '../../assets/my card/master_card.svg';


function MyCard() {
  return (
    <>
      <div className='flex justify-between items-center mb-4 text-customBlack font-inter'>
        <p className='text-[22px] font-semibold'>My Cards</p>
        <p className='text-base font-semibold'>See All</p>
      </div>
      <div className='flex items-center gap-9 font-lato'>
        <div className="w-[350px] h-[235px] bg-gradient-to-l from-black to-[#5B5A6F] rounded-3xl p-6 text-white font-sans flex flex-col relative">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-white">Balance</p>
              <p className="text-xl font-semibold">$5,756</p>
            </div>
            <div>
              {/* Simulated Chip */}
              <img src={Chip_Card} alt='Chip Card' />
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex gap-16 text-sm mt-4">
            <div>
              <p className="text-gray-400 text-xs">CARD HOLDER</p>
              <p className="font-medium mt-1">Eddy Cusuma</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">VALID THRU</p>
              <p className="font-medium mt-1">12/22</p>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="flex items-center justify-around bg-[#5e5d6e] absolute bottom-0 w-[100%] left-0 rounded-bl-3xl rounded-br-3xl py-3">
            <div className="text-[22px] tracking-wider">
              3778 **** **** <span className="font-semibold">1234</span>
            </div>
            {/* Placeholder for Logo */}
            <div className="flex items-center justify-center">
              <img src={master_card} alt='Master Card' />
            </div>
          </div>
        </div>

        <div className="w-[350px] h-[235px] bg-white rounded-3xl p-6 text-white font-sans flex flex-col relative border border-[#DFEAF2]">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-[#718EBF]">Balance</p>
              <p className="text-xl font-semibold text-[#3a3c6a]">$5,756</p>
            </div>
            <div>
              {/* Simulated Chip */}
              <img src={Chip_Card} alt='Chip Card' />
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex gap-16 text-sm mt-4">
            <div>
              <p className="text-[#718EBF] text-xs">CARD HOLDER</p>
              <p className="font-medium mt-1 text-[#3a3c6a]">Eddy Cusuma</p>
            </div>
            <div>
              <p className="text-[#718EBF] text-xs">VALID THRU</p>
              <p className="font-medium mt-1 text-[#3a3c6a]">12/22</p>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="flex items-center justify-around bg-white absolute bottom-0 w-[100%] left-0 border-t border-[#DFEAF2] rounded-bl-3xl rounded-br-3xl py-3">
            <div className="text-[22px] tracking-wider text-[#3a3c6a]">
              3778 **** **** <span className="font-semibold">1234</span>
            </div>
            {/* Placeholder for Logo */}
            <div className="flex items-center justify-center">
              <img src={master_card} alt='Master Card' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyCard