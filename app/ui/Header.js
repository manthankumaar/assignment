'use client'
import React, { useState } from 'react'
import { MdNotifications } from 'react-icons/md'
import {
  BiUser,
  BiSearchAlt2,
  BiMenuAltLeft,
  BiNotification,
  BiBell,
} from 'react-icons/bi'
import { NavLink } from '../utility/NavLink'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

function Header({ toggleSideMenu }) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const route = useRouter()
  const { data, status } = useSession()

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }
  if (status === 'unauthenticated') route.push('/')
  return (
    <header className='z-40 py-4 '>
      <div className='flex items-center justify-between h-8 px-6 mx-auto'>
        <button
          className='p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple'
          onClick={toggleSideMenu}
          aria-label='Menu'
        >
          <BiMenuAltLeft className='w-6 h-6 text-black' />
        </button>
        <div className='mr-4 hidden md:block'>
          <p className='text-2xl font-bold'>Dashboard</p>
        </div>

        <ul className='flex items-center flex-shrink-0 space-x-6'>
          <li className='relative'>
            <div className='flex justify-center  mr-4'>
              <div className='relative flex w-full flex-wrap items-stretch mb-3'>
                <input
                  type='search'
                  placeholder='Search'
                  className='form-input px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded-lg text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10'
                />
                <span className='z-10 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3'>
                  <BiSearchAlt2 className='h-5 w-5 -mt-1' />
                </span>
              </div>
            </div>
          </li>
          {/* Notifications menu */}
          <li className='relative'>
            <button
              className='p-2  align-middle rounded-full hover:bg-black hover:text-white focus:outline-none'
              aria-label='Notifications'
            >
              <BiBell className='w-7 h-7' />
            </button>
          </li>
          <li className='relative'>
            <button
              className=' bg-white text-black align-middle rounded-full hover:text-white hover:bg-black focus:outline-none'
              onClick={toggleProfileMenu}
              aria-label='Account'
              aria-haspopup='true'
            >
              <Image
                className='rounded-full'
                src={data?.user?.image}
                height={35}
                width={35}
                alt='userPhoto'
              ></Image>
            </button>
            {isProfileMenuOpen && (
              <ul className='absolute right-0 w-56 p-2 space-y-2 text-black bg-black border  rounded-md shadow-md'>
                <li class='flex'>
                  <button
                    onClick={() => {
                      signOut()
                    }}
                    className='text-white inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800'
                    href='#'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='w-5 h-5 mr-2'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                      />
                    </svg>
                    <span>Log out</span>
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
