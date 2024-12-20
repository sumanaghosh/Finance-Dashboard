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
      <div className='flex gap-6 mb-5'>
        <div>
          <MyCard />
        </div>
        <div>
          <RecentTransaction />
        </div>
      </div>
      <div className='flex gap-6 mb-5'>
        <div>
          <WeeklyActivity />
        </div>
        <div>
          <ExpenseStatistics/>
        </div>
      </div>
      <div className='flex gap-6 mb-5'>
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