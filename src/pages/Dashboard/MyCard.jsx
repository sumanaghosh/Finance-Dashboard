import React, { useState } from 'react';
import Chip_Card from '../../assets/my card/Chip_Card.svg';
import master_card from '../../assets/my card/master_card.svg';
import Chip_Card_Two from '../../assets/my card/Chip_Card2.svg';
import { BiLogoMastercard } from "react-icons/bi";

function MyCard() {
  const [cardDetails, setCardDetails] = useState([
    {
      balance: '5,756',
      cardHolder: 'Eddy Cusuma',
      validity: '12/22',
      cardNumber: '3778 **** **** 1234',
      chipCard: Chip_Card,
      masterCard: master_card
    },
    {
      balance: '5,756',
      cardHolder: 'Eddy Cusuma',
      validity: '12/22',
      cardNumber: '3778 **** **** 1234',
      chipCard: Chip_Card_Two,
      masterCard: master_card
    }
  ]);

  const cardAboveStyle = (index) => {
    const style = {}    
    if (index % 2 !== 0) {
      style.background = '#fff';
      style.color = '#343C6A';
      style.border = '1px solid #DFEAF2'

    } else {
      style.background = 'linear-gradient(to left, black, #5B5A6F)';
      style.color = '#fff';
    }

    return style;
  }

  const cardTextStyle = (index) => {
    if (index % 2 !== 0) {
      return {
        color: '#718EBF'
      }
    } else {
      return {
        color: '#ffffffb3',
      }
    }
  }

  const cardBelowStyle = (index) => {
    if (index % 2 !== 0) {
      return {
        borderTop: '1px solid #DFEAF2'
      }
    } else {
      return {
        background: '#5e5d6e',
      }
    }
  }

  const masterCardStyle = (index) => {
    if (index % 2 !== 0) {
      return {
        color: '#929ab080',
      }
    } else {
      return {
        color: '#ffffff80'
      }
    }
  }

  return (
    <>
      <div className='flex justify-between items-center mb-[1rem] md:mb-[1.25rem] text-customBlack font-inter'>
        <p className='text-base md:text-[22px] font-semibold'>My Cards</p>
        <p className='text-sm md:text-base font-semibold'>See All</p>
      </div>
      <div className='flex items-center gap-5 md:gap-9 font-lato overflow-x-auto hide-scrollbar scrollbar-hide'>
        {cardDetails?.map((card, index) =>
          <div style={cardAboveStyle(index)} className="w-[244px] md:w-[350px] h-[170px] md:h-[235px] font-lato flex flex-col relative rounded-[15px] md:rounded-3xl p-[15px] md:p-6 flex-shrink-0">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[11px] md:text-xs" style={cardTextStyle(index)}>Balance</p>
                <p className="text-base md:text-xl font-semibold">${card.balance}</p>
              </div>
              <div>
                <img src={card.chipCard} alt='chip' className='w-[29px] md:w-[34.77px] h-[29px] md:h-[34.77px]' />
              </div>
            </div>

            <div className="flex gap-[30px] md:gap-16 text-sm mt-[16px] md:mt-8">
              <div>
                <p className="text-gray-400 text-[11px] md:text-xs" style={cardTextStyle(index)}>CARD HOLDER</p>
                <p className="font-medium mt-1 text-[13px] md:text-[15px]">{card.cardHolder}</p>
              </div>
              <div>
                <p className="text-gray-400 text-[11px] md:text-xs" style={cardTextStyle(index)}>VALID THRU</p>
                <p className="font-medium mt-1 text-[13px] md:text-[15px]">{card.validity}</p>
              </div>
            </div>
            <div className="flex items-center justify-around 
            absolute bottom-0 w-[100%] left-0 rounded-bl-[15px] md:rounded-bl-3xl rounded-br-[15px] md:rounded-br-3xl py-[4px] md:py-3" style={cardBelowStyle(index)}>
              <div className="text-[15px] md:text-[22px] tracking-wider">
                {card.cardNumber}
              </div>
              <div className="flex items-center justify-center">
                <BiLogoMastercard className='text-[27px] md:text-[40px]' style={masterCardStyle(index)} />
              </div>
            </div>
          </div>
        )}
      </div >
    </>
  )
}

export default MyCard