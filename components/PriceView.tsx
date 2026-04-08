import { Product } from '@/sanity.types';
import React from 'react'
import PriceFormatter from './PriceFormatter';

interface Props{
    price:number |undefined;
    discount:number |undefined;
    className:string;
}

export default function PriceView({price,discount,className}:Props) {
  return (
        <div className='flex items-center gap-2' >
            <PriceFormatter amount={price} className='text-shop-dark-green'/>
            {price && discount &&(
                <PriceFormatter amount={price-(discount/100)*price}
                className='line-through text-xs font-normal'/>
            )}
        </div>
  )
}
