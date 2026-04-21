import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function FavouriteButton() {
  return (
    <Link href="/favourite" className="group relative text-shop-light-text dark:text-shop-dark-text ">
      <Heart 
      className='hover:text-shop-dark-green w-5 h-5'/>
      <span className='absolute -top-1 -right-1 w-3.5 h-3.5 bg-shop-dark-green text-white rounded-full justify-center items-center flex text-xs'>0</span>
    </Link>
  )
}
