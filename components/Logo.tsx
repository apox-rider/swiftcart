import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export default function Logo({className, spanDesign}:{className?:string, spanDesign?:string}) {
  return (
      <Link href="/"  className='inline-flex'>
        <h2 className={cn('font-black tracking-wider text-shop-dark-green hover:text-shop-light-green uppercase  text-2xl hoverEffect group font-sans:',className)}>
        Swiftcar<span className={cn('text-shop-light-green group-hover:text-shop-dark-green hoverEffect', spanDesign)}>t</span>
        </h2>
      </Link>
  )
}
