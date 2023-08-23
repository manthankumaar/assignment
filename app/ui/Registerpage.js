'use client'
import Button from './Button'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useRouter } from 'next/navigation'

const Register = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const router = useRouter()

  const { data: session } = useSession()
  if (session) router.push('/dashboard')
  return (
    <div className='flex items-center h-screen'>
      <aside
        className={`bg-black h-screen w-[35rem] ${
          isDesktop ? 'flex ' : 'hidden '
        } items-center justify-center `}
      >
        <span className='text-white text-5xl font-bold'>Board.</span>
      </aside>
      <div className=' m-auto'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col'>
            <p className='font-semibold text-xl'>Sign In</p>
            <p>Sign in to your account</p>
          </div>
          <div className='flex gap-3'>
            <Button
              onClick={() => {
                signIn('google')
              }}
              className='bg-white text-[#858585]'
            >
              <FcGoogle />
              <span>Sign in with Google</span>
            </Button>
            <Button className='bg-white text-[#858585]'>
              <BsApple /> Sign in with Apple
            </Button>
          </div>
          <div className='bg-white rounded-xl  p-5 shadow-lg'>
            <form className=' flex flex-col gap-1 p-2 overflow-hidden text-base w-auto border-gray-300 rounded-md'>
              <label>Email Address</label>
              <input
                placeholder='jhon@gmail.com'
                className='p-2 shadow rounded bg-[#F5F5F5]'
                type='email'
              />
              <label htmlFor=''>Password</label>
              <input
                className='p-2 shadow rounded bg-[#F5F5F5]'
                placeholder='Enter password'
                type='password'
              />
              <button>Forgot Password?</button>
              <Button className='bg-black text-stone-50 transition-all duration-300'>
                Sign in
              </Button>
            </form>
          </div>
          <p className='text-center'>
            <span>Don&apos;t have a account? </span>
            <span className='text-blue-700'>Register here</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
