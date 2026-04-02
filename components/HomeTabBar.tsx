import { productTypes } from '@/constants/Headerdata'
import Link from 'next/link'
import React from 'react'

interface Props{
  selectedTab:string;
  onTabselect:(tab:string)=>void;
}

export default function HomeTabBar({selectedTab,onTabselect}:Props) {
  console.log(selectedTab)
  return (
    <div className='flex justify-between items-center flex-wrap gap-5'>
      <div className='flex gap-1.5  items-center font-semibold text-sm justify-between'>
        {productTypes.map((type,index)=>(
                <button
                onClick={()=>onTabselect(type?.title)}
                key={index}
                className={`border border-shop-dark-green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop-light-green hover:border-shop-dark-green ${selectedTab===type?.title?'bg-shop-light-green ':'bg-shop-light-green/15'}` }
                >
                {type.title}
                </button>
        ))}
      </div>
      <Link
      href={"/shop"}
      className=' rounded-4xl justify-end'>
      See All
      </Link>
    </div>
  )
}
