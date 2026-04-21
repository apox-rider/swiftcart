'use client'
import { Product } from '@/sanity.types'
import { Button } from './ui/button';
import { ShoppingBagIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props{
    product:Product,
    className?:string
}

export default function AddToCartButton({product,className}:Props) {
    const isOutOfStock= product?.stock===0;
    const handleAddtoCart=()=>{
        window.alert("Added to Cart")
    }
  return (
    <div>
    <Button 
    onClick={handleAddtoCart}
    disabled={isOutOfStock}
    className={cn('w-full font-semibold tracking-wide bg-shop-safety-orange  rounded-full hover:bg-[#E07A00] hover:text-shop-dark-purple hoverEffect',className)}>
      <ShoppingBagIcon/>{isOutOfStock?"Out Of Stock":"Add to Cart"}
    </Button>
    </div>
  )
}
 