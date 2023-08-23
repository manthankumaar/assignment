'use client'
import {
  ScheduledIcon,
  dashboardIcon,
  settingsIcon,
  transactionIcon,
  userIcon,
} from '@/asset/dashboard_icons'
import React, { useState } from 'react'
import { NavLink } from '../utility/NavLink'

function Sidebar() {
  return (
    <aside className='z-20 flex-shrink-0 hidden w-60 pl-2  overflow-y-auto rounded-xl bg-black md:m-[30px] md:block'>
      <div className='flex flex-col justify-between h-full'>
        <div>
          <div className='text-white px-5'>
            <div className='flex justify-left'>
              <div className=''>
                <p className='font-bold text-left text-3xl mt-8 text-white pt-2  w-24'>
                  Board.
                </p>
              </div>
            </div>
            <ul className='mt-6 leading-10'>
              <li className='relative px-2 py-1 '>
                <NavLink
                  className='inline-flex items-center w-full text-sm font-semibold text-white '
                  href='/dashboard'
                >
                  {dashboardIcon}
                  <span className='ml-4'>DASHBOARD</span>
                </NavLink>
              </li>
              <li className='relative px-2 py-1'>
                <NavLink
                  href='#'
                  className='inline-flex items-center w-full text-sm font-semibold text-white '
                >
                  {transactionIcon}
                  <span className='ml-4'>Transaction</span>
                </NavLink>
                <NavLink
                  href='#'
                  className='inline-flex items-center w-full text-sm font-semibold text-white '
                >
                  {ScheduledIcon}
                  <span className='ml-4'>Schedule</span>
                </NavLink>
                <NavLink
                  href='#'
                  className='inline-flex items-center w-full text-sm font-semibold text-white '
                >
                  {userIcon}
                  <span className='ml-4'>Users</span>
                </NavLink>
                <NavLink
                  href='#'
                  className='inline-flex items-center w-full text-sm font-semibold text-white '
                >
                  {settingsIcon}
                  <span className='ml-4'>Settings</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-auto h-full flex  flex-col-reverse justify-'>
          <ul className='mt-6 leading-10 space-y-20'>
            <li className='relative px-2 py-1'>
              <NavLink
                href='#'
                className='inline-flex items-center w-full text-sm font-semibold text-white '
              >
                <span className='ml-4 font-extralight'>Help</span>
              </NavLink>
              <NavLink
                href='#'
                className='inline-flex items-center w-full text-sm font-semibold text-white '
              >
                <span className='ml-4 font-extralight'>Contact Us</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
