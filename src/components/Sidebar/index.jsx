import React, { useContext, useState } from 'react';
import Logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Home from '../../assets/icons/home.svg';
import SelectHome from '../../assets/icons/Selected Icon/home.svg';
import transaction from '../../assets/icons/transaction.svg'
import user from '../../assets/icons/user.svg'
import investment from '../../assets/icons/investment.svg'
import credit_card from '../../assets/icons/credit_card.svg'
import loan from '../../assets/icons/loan.svg'
import service from '../../assets/icons/service.svg'
import privillege from '../../assets/icons/privillege.svg'
import settings from '../../assets/icons/settings.svg'
import selectedSettings from '../../assets/icons/Selected Icon/settings.svg';
import { IoIosCloseCircle } from "react-icons/io";
import { SidebarContext } from '../ContextApi/AppContext';


const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const listOfMenu = [
    { route: '/', imageSelect: SelectHome, image: Home, title: "Dashboard" },
    { route: '/transactions', imageSelect: transaction, image: transaction, title: "transactions" },
    { route: '/accounts', imageSelect: user, image: user, title: "Accounts" },
    { route: '/investments', imageSelect: investment, image: investment, title: "Investments" },
    { route: '/credit-cards', imageSelect: credit_card, image: credit_card, title: "Credit Cards" },
    { route: '/loans', imageSelect: loan, image: loan, title: "Loans" },
    { route: '/services', imageSelect: service, image: service, title: "Services" },
    { route: '/my-privileges', imageSelect: privillege, image: privillege, title: "My Privileges" },
    { route: '/setting', imageSelect: selectedSettings, image: settings, title: "Setting" }
  ];
  const [activeMenu, setActiveMenu] = useState(0);
  const { setSidebarData } = useContext(SidebarContext);

  const handleActiveMenu = (index, title) => {
    setActiveMenu(index);
    setIsSidebarOpen(false);
    setSidebarData(title);
  }

  return (
    <>
      <div className={`hidden md:block fixed sidebar top-0 left-0 z-[100] w-[18%] h-full bg-gray-800`}>
        <Link to='/'>
          <div className='logoWrapper py-3 px-3'>
            <img src={Logo} alt='Company Logo' className='w-40 h-8' />
          </div>
        </Link>
        <div className='sidebarTabs px-3'>
          {listOfMenu?.map((menu, index) =>
            <Link to={menu?.route} key={index}>
              <button className={`w-full flex items-center px-4 py-2 mt-2 rounded-md ${activeMenu === index ? "active" : ""
                }
                `} onClick={() => handleActiveMenu(index, menu.title)}>
                <span className='icon w-[25px] h-[25px] flex items-center justify-center rounded-md'>
                  {activeMenu === index ? <img src={menu?.imageSelect} alt='icon' /> : <img src={menu?.image} alt='icon' />}</span>{" "}{menu?.title}
              </button>
            </Link>
          )}
        </div>
      </div>

      <div className={`${isSidebarOpen ? "fixed sidebar top-0 left-0 z-[100] w-full md:w-[18%] h-full bg-gray-800" : "hidden"} `}>
        <div className='relative'>
          <Link to='/'>
            <div className='logoWrapper py-3 px-3'>
              <img src={Logo} alt='Company Logo' className='w-40 h-8' />
            </div>
          </Link>
          <div className="md:hidden p-4 absolute top-0 right-0">
            <IoIosCloseCircle className="text-[#343C6A] text-2xl" onClick={() => setIsSidebarOpen(false)} />
          </div>
        </div>
        <div className='sidebarTabs px-3'>
          {listOfMenu?.map((menu, index) =>
            <Link to={menu?.route} key={index}>
              <button className={`w-full flex items-center px-4 py-2 mt-2 rounded-md ${activeMenu === index ? "active" : ""
                }
                `} onClick={() => handleActiveMenu(index)}>
                <span className='icon w-[25px] h-[25px] flex items-center justify-center rounded-md'>
                  {activeMenu === index ? <img src={menu?.imageSelect} alt='home icon' /> : <img src={menu?.image} alt='home icon' />}</span>{" "}{menu?.title}
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Sidebar;