'use client'
import { cn } from '@/lib/utils'
import { AlignLeft, Menu } from 'lucide-react'
import React, { useState } from 'react'
import SideMenu from './SideMenu'

export default function MobileMenu({className}:{className?:string}) {
  const [isOpen, setIsOpen] =useState(false);
  return (
    <>
    <button 
    onClick={()=>setIsOpen(!isOpen)}
    className='md:hidden hover:cursor-pointer'>
      <AlignLeft className={cn("w-5 h-5 text-darkColor", className)} />
    </button>
    <div className='md:hidden'>
      <SideMenu 
      isopen={isOpen}
      onclose={()=>setIsOpen(false)}  
      />
    </div>
    </>
  )
}
