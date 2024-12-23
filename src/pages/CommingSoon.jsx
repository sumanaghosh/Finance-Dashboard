import React from 'react';
import Logo from '../assets/Logo.svg';

function CommingSoon() {
  return (
    <div className='flex justify-center items-center h-[75vh] bg-white rounded-[15px] md:rounded-[25px]'>
      <div className='flex justify-center items-center flex-col gap-[25px]'>
        <img src={Logo} alt='Company Logo' className='animate-fadeIn shadow-xl w-48 h-48 object-contain rounded-full'/>
        <p className='p-[10px] font-inter text-[#232323] text-5xl animate-bounceText'>We will Come Soon!!!</p>
      </div>
    </div>
  )
}

export default CommingSoon