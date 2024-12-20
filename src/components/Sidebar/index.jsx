import React, { useState } from 'react';
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
import selectedSettings from '../../assets/icons/Selected Icon/settings.svg'


const Sidebar = () => {
  const listOfMenu = [
    {route: '/', imageSelect: SelectHome, image: Home, title: "Dashboard"},
    {route: '/transactions', imageSelect: transaction, image: transaction, title: "transactions"},
    {route: '/accounts', imageSelect: user, image: user, title: "Accounts"},
    {route: '/investments', imageSelect: investment, image: investment, title: "Investments"},
    {route: '/credit-cards', imageSelect: credit_card, image: credit_card, title: "Credit Cards"},
    {route: '/loans', imageSelect: loan, image: loan, title: "Loans"},
    {route: '/services', imageSelect: service, image: service, title: "Services"},
    {route: '/my-privileges', imageSelect: privillege, image: privillege, title: "My Privileges"},
    {route: '/setting', imageSelect: selectedSettings, image: settings, title: "Setting"}
  ];
  const [activeMenu, setActiveMenu] = useState(0);

  const handleActiveMenu = (index) => {
    setActiveMenu(index)
    // if (index === 0) {
    //   window.location.pathname = '/'
    // } if (index === 8) {
    //   window.location.pathname = '/settings'
    // }
  }

  return (
    <>
      <div className='sidebar fixed top-0 left-0 z-[100] w-[18%]'>
        <Link to='/'>
          <div className='logoWrapper py-3 px-3'>
            <img src={Logo} alt='Company Logo' className='w-40 h-8' />
          </div>
        </Link>
        <div className='sidebarTabs px-3'>
          {listOfMenu?.map((menu, index) =>
            <Link to={menu?.route}>
              <Button className={`w-100 ${activeMenu === index ? "active" : ''}`} onClick={() => handleActiveMenu(index)}><span className='icon w-[25px] h-[25px] flex items-center justify-center rounded-md'>
                {activeMenu === index ? <img src={menu?.imageSelect} alt='home icon' /> : <img src={menu?.image} alt='home icon' />}</span>{" "}{menu?.title}
              </Button>
            </Link>
          )}
          {/* <Link to='/'>
            <Button className={`w-100 ${activeMenu === 0 ? "active" : ''}`} onClick={() => handleActiveMenu(0)}><span className='icon w-[25px] h-[25px] flex items-center justify-center rounded-md'>
              {activeMenu === 0 ? <img src={SelectHome} alt='home icon' /> : <img src={Home} alt='home icon' />}</span>{" "}Dashboard
            </Button>
          </Link>
          <Link to='/transactions'>
            <Button className={`w-100 ${activeMenu === 1 ? "active" : ''}`} onClick={() => handleActiveMenu(1)}><span className='icon w-[25px] h-[25px] flex items-center justify-center rounded-md'>
              <img src={transaction} alt='transaction icon' /></span>{" "}Transactions
            </Button>
          </Link>
          <Button className={`w-100 ${activeMenu === 2 ? "active" : ''}`} onClick={() => handleActiveMenu(2)}><span className='icon w-[25px] h-[25px] flex items-center justify-center rounded-md'>
            <img src={user} alt='user icon' /></span>{" "}Accounts
          </Button>
          <Button className={`w-100 ${activeMenu === 3 ? "active" : ''}`} onClick={() => handleActiveMenu(3)}><span className='icon w-[25px] h-[25px] flex items-center justify-center rounded-md'>
            <img src={investment} alt='investment icon' /></span>{" "}Investments
          </Button>
          <Button className={`w-100 ${activeMenu === 4 ? "active" : ''}`} onClick={() => handleActiveMenu(4)}><span className='icon w-[25px] h-[25px] flex items-center justify-center rounded-md'>
            <img src={credit_card} alt='credit card icon' /></span>{" "}Credit Cards
          </Button>
          <Button className={`w-100 ${activeMenu === 5 ? "active" : ''}`} onClick={() => handleActiveMenu(5)}><span className='icon w-[25px] h-[25px] flex items-center justify-center rounded-md'>
            <img src={loan} alt='loan icon' /></span>{" "}Loans
          </Button>
          <Button className={`w-100 ${activeMenu === 6 ? "active" : ''}`} onClick={() => handleActiveMenu(6)}><span className='icon w-[25px] h-[25px] flex items-center justify-center rounded-md'>
            <img src={service} alt='service icon' /></span>{" "}Services
          </Button>
          <Button className={`w-100 ${activeMenu === 7 ? "active" : ''}`} onClick={() => handleActiveMenu(7)}><span className='icon w-[25px] h-[25px] flex items-center justify-center rounded-md'>
            <img src={privillege} alt='privillege icon' /></span>{" "}My Privileges
          </Button>
          <Link to='/settings'>
            <Button className={`w-100 ${activeMenu === 8 ? "active" : ''}`} onClick={() => handleActiveMenu(8)}><span className='icon w-[25px] h-[25px] flex items-center justify-center rounded-md'>
              {activeMenu === 8 ? <img src={selectedSettings} alt='settings icon' /> : <img src={settings} alt='settings icon' />}</span>{" "}Setting
            </Button>
          </Link> */}
        </div>
      </div>
    </>
  )
}

export default Sidebar;