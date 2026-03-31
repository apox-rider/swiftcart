'use client'
import headerData from '@/constants/Headerdata'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function HeaderMenu() {
    const pathname=usePathname();
  return (
    <div className='hidden md:inline-flex items-center gap-10  text-black font-semibold w-1/3 capitalize  '>
       {headerData.map((item) => (
        <Link 
        key={item.name} 
        href={item.link} 
        className={`hover:text-shop-light-green hoverEffect relative group ${pathname === item?.link && 'text-shop-light-green'}`}>
        {item?.name}

        <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop-dark-green group-hover:w-1/2 hoverEffect ${pathname === item?.link && 'w-1/2'}`}/>
        <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop-dark-green group-hover:w-1/2 hoverEffect ${pathname === item?.link && 'w-1/2'}`}/>
        </Link>
      ))}
    </div>
  )
}
