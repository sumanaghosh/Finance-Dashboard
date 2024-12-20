import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import Profile from '../../assets/Profile Image/profileImage.svg';
import { FiSearch } from "react-icons/fi";


export const Header = () => {
  return (
    <header className='fixed top-0 right-0 bg-white w-[82%] z-10 border-b border-[#E6EFF5]'>
      <div className='flex justify-between items-center px-4 py-2'>
        <div>
          <p className='text-customBlack text-2xl font-semibold'>Overview</p>
        </div>
        <div className='flex items-center gap-5'>
          <div className="relative">
            <FiSearch className='absolute translate-x-4 translate-y-4 text-customBlue' />
            <input type='text' placeholder='Search for something' className='bg-customGray h-12 rounded-3xl px-5 outline-none' />
          </div>
          <div className='bg-customGray rounded-full h-14 w-14 flex justify-center items-center'>
            <IoSettingsOutline className='text-2xl text-customBlue' />
          </div>
          <div className='bg-customGray rounded-full h-14 w-14 flex justify-center items-center'>
            <VscBellDot className='text-2xl text-customBlueDark' />
          </div>
          <div >
            <img src={Profile} alt='User Image' className='rounded-full' />
          </div>
        </div>
      </div>

    </header>
  )
}
