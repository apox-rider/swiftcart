import { Product } from '@/sanity.types'
import React from 'react'

export default function AddToWishlistButoon({product,className}:{product:Product,className?:string}) {
  return (
    <div className='absolute top-2 right-2 '>
      Add
    </div>
  )
}
