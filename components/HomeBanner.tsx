import React from 'react'
import { Subtitle, Title } from './text'
import Link from 'next/link'
import Image from 'next/image'
import banner from '@/images/banners/banner.png'

export default function HomeBanner() {
  return (
    <div className=' py-9 md:py-0 bg-pink-100/40 rounded-lg px-10 lg:px-24 flex items-center justify-between gap-6 md:gap-12 lg:gap-16'>
      <div className='py-10 space-y-5'>
        <Title>Shop Now At SwiftCart <br />
        And save big with our price offers on <br />
        Quality Goods.</Title>
        <Link
        href='/shop'
        className='inline-block mt-6 px-6 py-3 bg-shop-dark-green/90 text-white font-semibold rounded-lg hover:bg-shop-dark-green hover:cursor-pointer hoverEffect'
        >Shop Now</Link>
      </div>
      <div >
        <Image 
        src={banner}
        alt="Home Banner" 
        className='hidden w-96 md:inline-flex shadow-lg rounded-3xl ' />
      </div>
    </div>
  )
}
