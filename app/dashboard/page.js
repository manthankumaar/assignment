'use client'
import { useState } from 'react'
import Sidebar from '../ui/Sidebar'
import Header from '../ui/Header'
import { BiBasket, BiCart, BiCube, BiPackage } from 'react-icons/bi'
import {
  likeIcon,
  totaRevenueIcon,
  totalTransactionIcon,
  userIcon,
} from '@/asset/stat_svg'
import StatsSection from '../ui/StatsSection'
import Chart from '../ui/Chart'
import LineChart from '../ui/LineChart'

const Dashboard = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false)

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen)
  }

  const closeSideMenu = () => {
    setIsSideMenuOpen(false)
  }

  const toggleNotificationsMenu = () => {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen)
  }

  const closeNotificationsMenu = () => {
    setIsNotificationsMenuOpen(false)
  }

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  const closeProfileMenu = () => {
    setIsProfileMenuOpen(false)
  }

  const togglePagesMenu = () => {
    setIsPagesMenuOpen(!isPagesMenuOpen)
  }
  return (
    <div
      className={`flex h-screen bg-[#F5F5F5] ${
        isSideMenuOpen ? 'overflow-hidden' : ''
      }`}
    >
      <Sidebar />
      <div className='flex flex-col flex-1 w-full mt-[30px] overflow-y-auto'>
        <Header toggleSideMenu={toggleSideMenu} />
        <main>
          <div className='grid mb-4 pb-10 px-8 mx-4 '>
            <div className='grid grid-cols-12 gap-6'>
              <div className='grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9'>
                <StatsSection />
                <LineChart />
                <Chart />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
