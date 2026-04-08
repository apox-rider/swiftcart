import React from 'react'
import { Title } from './text'
import { Category } from '@/sanity.types'

interface Props{
    categories:Category,
    className?:string,
}

export default function HomeCategories({categories,className}:Props) {
  return (
    <div className='bg-white border border-shop-dark-purple/60 my-10 md:my-20 p-5 md:p-7 rounded-md'>
        <Title className='border-b p-3'>Popular Categories</Title>
        <div>
            
        </div>
    </div>
  )
}
