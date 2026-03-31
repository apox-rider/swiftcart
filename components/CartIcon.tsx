import { ShoppingBag, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CartIcon() {
  return (
    <Link href="/cart" className="group relative text-black">
      <ShoppingBag 
      className='hover:text-shop-dark-green w-5 h-5'/>
      <span className='absolute -top-1 -right-1 w-3.5 h-3.5 bg-shop-dark-green text-white rounded-full justify-center items-center flex text-xs'>0</span>
    </Link>
  )
}
