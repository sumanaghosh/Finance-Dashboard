import React from 'react';
import JemiWilson from '../../assets/transaction/jemi_wilson.svg';
import MyCard from '../../assets/transaction/my_card.svg';
import Paypal from '../../assets/transaction/paypal.svg';

function RecentTransaction() {
  return (
    <>
      <p className='text-base md:text-[22px] text-customBlack font-semibold font-inter mt-[16px] md:mt-[0] mb-[16px] md:mb-4'>Recent Transaction</p>
      <div className='bg-white w-[308px] md:w-[350px] h-[214px] md:h-[235px] rounded-[15px] md:rounded-3xl p-[1rem] md:p-6'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-3'>
            <div className='bg-[#FFF5D9] rounded-full w-[50px] md:w-14 h-[50px] md:h-14 flex justify-center items-center'>
              <img src={MyCard} alt='My Card' />
            </div>
            <div>
              <p className='text-[#232323] font-inter text-sm md:text-base font-medium mb-[.3rem]'>Deposit from my Card</p>
              <p className='text-[#718EBF] font-inter font-normal text-xs md:text-[15px]'>28 January 2021</p>
            </div>
          </div>

          <p className='text-[#FF4B4A] font-inter text-[11px] md:text-base font-medium'>-$850</p>
        </div>

        <div className='flex items-center justify-between mt-[14px] mb-[14px]'>
          <div className='flex gap-3'>
            <div className='bg-[#E7EDFF] rounded-full w-[50px] md:w-14 h-[50px] md:h-14 flex justify-center items-center'>
              <img src={Paypal} alt='Paypal' />
            </div>
            <div>
              <p className='text-[#232323] font-inter text-sm md:text-base font-medium mb-[.3rem]'>Deposit Paypal</p>
              <p className='text-[#718EBF] font-inter font-normal text-xs md:text-[15px]'>25 January 2021</p>
            </div>
          </div>
          <p className='text-[#41D4A8] font-inter text-[11px] md:text-base font-medium'>+$2,500</p>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex gap-3'>
            <div className='bg-[#DCFAF8] rounded-full w-[50px] md:w-14 h-[50px] md:h-14 flex justify-center items-center'>
              <img src={JemiWilson} alt='Jemi Wilson' />
            </div>
            <div>
              <p className='text-[#232323] font-inter text-sm md:text-base font-medium mb-[.3rem]'>Jemi Wilson</p>
              <p className='text-[#718EBF] font-inter font-normal text-xs md:text-[15px]'>21 January 2021</p>
            </div>
          </div>
          <p className='text-[#41D4A8] font-inter text-[11px] md:text-base font-medium'>+$5,400</p>
        </div>
      </div>
    </>
  )
}

export default RecentTransaction