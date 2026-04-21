import { cn } from '@/lib/utils'
import { Product } from '@/sanity.types'
import { HeartIcon } from 'lucide-react'
import React from 'react'

export default function AddToWishlistButoon({product,className}:{product:Product,className?:string}) {
  return (
    <div className={cn(`absolute top-2 right-2 z-10 `,className)}>
      <button className='bg-white outline-[#8D99AE] dark:outline-[#E0E1DD] rounded-full p-1 hover:text-white hoverEffect'>
        <HeartIcon size={18} fill='white' className='p-0.5'/>
      </button>
    </div>
  )
}
