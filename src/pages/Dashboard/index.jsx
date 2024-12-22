import React from 'react'
import MyCard from './MyCard'
import RecentTransaction from './RecentTransaction'
import WeeklyActivity from './WeeklyActivity'
import ExpenseStatistics from './ExpenseStatistics'
import QuickTransfer from './QuickTransfer'
import BalanceHistory from './BalanceHistory'

function Dashboard() {
  return (
    <>
      <div className='block md:flex gap-6 md-[0] md:mb-[1.25rem]'>
        <div>
          <MyCard />
        </div>
        <div>
          <RecentTransaction />
        </div>
      </div>
      <div className='block md:flex gap-6 md-[0] md:mb-[1.25rem]'>
        <div>
          <WeeklyActivity />
        </div>
        <div>
          <ExpenseStatistics/>
        </div>
      </div>
      <div className='block md:flex gap-6 md-[0] md:mb-[1.25rem]'>
        <div>
          <QuickTransfer />
        </div>
        <div>
          <BalanceHistory />
        </div>
      </div>
    </>
  )
}

export default Dashboard