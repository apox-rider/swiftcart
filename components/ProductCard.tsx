'use client'
import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

import React from 'react'

 

export default function ProductCard({product}:{product:Product}) {
  return (
    <div className='text-sm border border-shop-dark-blue/20 min-h-96 bg-lightColor rounded-md group'>
      <div className='relative group overflow-hidden bg-shop-dark-cyan'>
        {product?.image && <Image src={urlFor(product?.image[0]).url()} alt='Product Image' loading='lazy' width={700} height={700}/>}
      </div>
      <div className='p-3 flex flex-col'>Product Details</div>
    </div>
  )
}
