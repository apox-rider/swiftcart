import React from 'react'
import { Subtitle, Title } from './text'
import Link from 'next/link'
import Image from 'next/image'
import banner from '@/images/banners/banner.png'

export default function HomeBanner() {
  return (
    <div className=' py-9 md:py-0 bg-shop-safety-orange rounded-lg px-10 lg:px-24 flex items-center justify-between gap-6 md:gap-12 lg:gap-16'>
      <div className='py-10 space-y-5'>
        <Title className='line-clamp-4'> 
        Build Faster. Build Better. <br />
        <div className='  text-shop-dark-text dark:text-shop-light-text'> From foundation to finish, 
         get quality materials <br />
          delivered to your site . 
        <p className='hidden md:flex'>Reliable, fast, and <br /> simplified hardware for all your projects across Tanzania.</p>  </div></Title>
        <Link
        href='/shop'
        className='inline-block mt-6 px-6 py-3 bg-shop-dark-green/90 hover:bg-gray-700 text-white dark:text-black font-semibold rounded-lg bg-shop-steel-look hover:cursor-pointer hoverEffect'
        >Shop Now</Link>
      </div>
      <div >
        <Image 
        src={banner}
        alt="Home Banner" 
        className='hidden h-68 w-96 md:inline-flex shadow-lg rounded-3xl md:mt-15 animate-bounce ' />
      </div>
    </div>
  )
}
