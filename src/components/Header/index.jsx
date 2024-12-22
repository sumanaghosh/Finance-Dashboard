import React, { useContext } from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
// import Profile from '../../assets/Profile Image/profileImage.svg';
import { FiSearch } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { IoIosMenu } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { SidebarContext } from '../ContextApi/AppContext';


export const Header = ({ pathLabel, isSidebarOpen, setIsSidebarOpen }) => {
  const profile = useSelector((state) => state.profileFormData);
  const { sidebarData, setSidebarData } = useContext(SidebarContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <header className={`fixed top-0 right-0 bg-white w-full md:w-[82%] z-10 border-b border-[#E6EFF5]`}>
        <div className='flex justify-between items-center p-[.5rem] md:px-[1.5rem] md:py-[.5rem]'>
          <div className="md:hidden p-[.5rem] md:p-[1.5rem]">
            <button onClick={toggleSidebar}>
              {isSidebarOpen ? (
                <IoIosCloseCircle className="text-[#343C6A] text-2xl" />
              ) : (
                <IoIosMenu className="text-[#343C6A] text-2xl" />
              )}
            </button>
          </div>
          <div>
            <p className='text-customBlack text-xl md:text-2xl font-semibold ml-0 md:ml-[1.5rem] capitalize'>{sidebarData === 'Dashboard' ? 'Overview' : sidebarData}</p>
          </div>
          <div className='flex items-center gap-5 md:gap-7'>
            <div className="relative hidden md:block">
              <FiSearch className='absolute 
              left-4 top-1/2 transform -translate-y-1/2
               text-customBlue' />
              <input type='text' placeholder='Search for something' className='bg-customGray h-12 rounded-3xl px-5 outline-none' />
            </div>
            <Link to={'/setting'} onClick={() => setSidebarData('Setting')}>
              <div className='hidden md:flex bg-customGray rounded-full h-14 w-14  justify-center items-center'>
                <IoSettingsOutline className='text-2xl text-customBlue' />
              </div>
            </Link>
            <div className='hidden md:flex bg-customGray rounded-full h-14 w-14  justify-center items-center'>
              <VscBellDot className='text-2xl text-customBlueDark' />
            </div>
            <div >
              <img src={profile.profileImage} alt='User Image' className='rounded-full w-[35px] md:w-[60px] h-[35px] md:h-[60px]' />
            </div>
          </div>
        </div>

      </header>
    </>
  )
}
