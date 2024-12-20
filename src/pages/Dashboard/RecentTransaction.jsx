import React from 'react';
import JemiWilson from '../../assets/transaction/jemi_wilson.svg';
import MyCard from '../../assets/transaction/my_card.svg';
import Paypal from '../../assets/transaction/paypal.svg';

function RecentTransaction() {
  return (
    <>
      <p className='text-[22px] text-customBlack font-semibold font-inter mb-4'>Recent Transaction</p>
      <div className='bg-white w-[350px] h-[235px] rounded-3xl p-6'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-3'>
            <div className='bg-[#FFF5D9] rounded-full w-14 h-14 flex justify-center items-center'>
              <img src={MyCard} alt='My Card' />
            </div>
            <div>
              <p className='text-[#232323] font-inter text-base font-semibold mb-[.3rem]'>Deposit from my Card</p>
              <p className='text-[#718EBF] font-inter font-normal text-[15px]'>28 January 2021</p>
            </div>
          </div>

          <p className='text-[#FF4B4A] font-inter text-base font-medium'>-$850</p>
        </div>

        <div className='flex items-center justify-between mt-[14px] mb-[14px]'>
          <div className='flex gap-3'>
            <div className='bg-[#E7EDFF] rounded-full w-14 h-14 flex justify-center items-center'>
              <img src={Paypal} alt='Paypal' />
            </div>
            <div>
              <p className='text-[#232323] font-inter text-base font-semibold mb-[.3rem]'>Deposit Paypal</p>
              <p className='text-[#718EBF] font-inter font-normal text-[15px]'>25 January 2021</p>
            </div>
          </div>
          <p className='text-[#41D4A8] font-inter text-base font-medium'>+$2,500</p>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex gap-3'>
            <div className='bg-[#DCFAF8] rounded-full w-14 h-14 flex justify-center items-center'>
              <img src={JemiWilson} alt='Jemi Wilson' />
            </div>
            <div>
              <p className='text-[#232323] font-inter text-base font-semibold mb-[.3rem]'>Jemi Wilson</p>
              <p className='text-[#718EBF] font-inter font-normal text-[15px]'>21 January 2021</p>
            </div>
          </div>
          <p className='text-[#41D4A8] font-inter text-base font-medium'>+$5,400</p>
        </div>
      </div>
    </>
  )
}

export default RecentTransaction