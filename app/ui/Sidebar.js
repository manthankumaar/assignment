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

function Sidebar({ isSideMenuOpen, closeSideMenu, toggleSideMenu }) {
  return (
    <>
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
      <div>
        {/* Backdrop */}
        {isSideMenuOpen && (
          <div
            className='fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center'
            onClick={closeSideMenu}
          ></div>
        )}

        {/* Mobile sidebar */}
        <aside
          className={`fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-gray-900 ${
            isSideMenuOpen ? 'dark:bg-black' : ''
          } md:hidden`}
          style={{
            transition:
              'opacity 150ms ease-in-out, transform 150ms ease-in-out',
            opacity: isSideMenuOpen ? 1 : 0,
            transform: isSideMenuOpen ? 'none' : 'translateX(-20px)',
          }}
        >
          <div className='text-white'>
            <div
              className='flex flex-col justify-between gap-4 h-full'
              onClick={toggleSideMenu}
            >
              <div className='flex p-2 bg-black'>
                <div className='flex py-3 px-2 items-center'>
                  <p className='ml-2 font-semibold italic'>Board.</p>
                </div>
              </div>
              <div>
                <ul className='mt-6 leading-10'>
                  <li className='relative px-2 py-1'>
                    <a
                      className='inline-flex items-center w-full text-sm font-semibold text-white '
                      href='#'
                    >
                      {dashboardIcon}
                      <span className='ml-4'>Dashboard</span>
                    </a>
                  </li>
                  <li className='relative px-2 py-1'>
                    <a
                      className='inline-flex items-center w-full text-sm font-semibold text-white '
                      href='#'
                    >
                      {transactionIcon}
                      <span className='ml-4'>Transaction</span>
                    </a>
                  </li>
                  <li className='relative px-2 py-1'>
                    <a
                      className='inline-flex items-center w-full text-sm font-semibold text-white '
                      href='#'
                    >
                      {ScheduledIcon}
                      <span className='ml-4'>Schedule</span>
                    </a>
                  </li>
                  <li className='relative px-2 py-1'>
                    <a
                      className='inline-flex items-center w-full text-sm font-semibold text-white '
                      href='#'
                    >
                      {userIcon}
                      <span className='ml-4'>User</span>
                    </a>
                  </li>
                  <li className='relative px-2 py-1'>
                    <a
                      className='inline-flex items-center w-full text-sm font-semibold text-white '
                      href='#'
                    >
                      {settingsIcon}
                      <span className='ml-4'>Setting</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className='relative px-2 py-1'>
                    <a
                      className='inline-flex items-center w-full text-sm font-semibold text-white '
                      href='#'
                    >
                      <span className='ml-4'>SHelp</span>
                    </a>
                  </li>
                  <li className='relative px-2 py-1'>
                    <a
                      className='inline-flex items-center w-full text-sm font-semibold text-white '
                      href='#'
                    >
                      <span className='ml-4'>Contact Us</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}

export default Sidebar
