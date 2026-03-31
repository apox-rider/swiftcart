import { SignInButton } from '@clerk/nextjs'
import React from 'react'


export default function SignIn() {
  return (
    <SignInButton mode='modal'>
          <button
          className='text-sm text-black font-semibold hover:border-shop-dark-gray hover:cursor-pointer hoverEffect' 
          >Login
          </button>
    </SignInButton>
  )
}
