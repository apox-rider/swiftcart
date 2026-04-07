import { productTypes } from '@/constants/Headerdata'
import Link from 'next/link'
import React from 'react'

interface Props{
  selectedTab:string;
  onTabselect:(tab:string)=>void;
}

export default function HomeTabBar({selectedTab,onTabselect}:Props) {
  return (
    <div className='flex justify-between items-center flex-wrap gap-3 md:gap-5 lg:gap-6'>
      <div className='flex items-center md:gap-1.5 font-semibold text-sm  '>
        {productTypes.map((type,index)=>(
                <button
                onClick={()=>onTabselect(type?.title)}
                key={index}
                className={`border border-shop-dark-green/20 px-2 py-1 md:px-6 md:py-2 rounded-full hover:bg-shop-dark-green hover:border-shop-dark-green ${selectedTab===type?.title?'bg-shop-dark-green ':'bg-shop-dark-green/20'}` }
                >
                {type.title}
                </button>
        ))}
      </div>
      <Link
      href={"/shop"}
      className='justify-end text-sm border border-shop-dark-green/20 px-2 py-1 md:px-6 md:py-2 rounded-full hover:bg-shop-dark-green hover:border-shop-dark-green'>
      See All
      </Link>
    </div>
  )
}
