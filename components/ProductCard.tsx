'use client'
import { Product } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import { Flame, FlameIcon, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AddToWishlistButoon from './AddToWishlistButoon';



export default function ProductCard({product}:{product:Product}) {
  return (
    <div className='text-sm border border-shop-dark-blue/20  bg-lightColor rounded-md group'>
      <div className='relative group overflow-hidden bg-shop-dark-cyan'>
        {product?.image && <Image src={urlFor(product?.image[0]).url()} alt='Product Image' loading='lazy' width={700} height={700}/>}

        <AddToWishlistButoon product={product} />
        
        {product?.status === "sale" && <p className='absolute top-2 left-2 bg-black text-white z-10 text-xs border border-black rounded-full px-1 ml-1 group-hover:border-shop-dark-green group-hover:text-black group-hover:bg-shop-dark-cyan hoverEffect'>Sale!</p>}
        {product?.status === "new" && <p className='absolute top-2 left-2 bg-white text-shop-dark-purple animate-pulse z-10 text-xs border border-black rounded-full px-1 ml-1 group-hover:border-shop-dark-green group-hover:text-black group-hover:bg-shop-dark-cyan hoverEffect'>New!</p>}
        {product?.status === "hot" && 
        <Link
            href={"/deal"}
            className="ml-1 absolute top-2 left-2 z-10 border border-shop_orange/50 p-1 rounded-full group-hover:border-shop_orange hover:text-shop_dark_green hoverEffect"
          >
            <Flame
              size={18}
              fill="#fb6c08"
              className="text-shop_orange group-hover:text-shop_orange hoverEffect"
            />
          </Link>}
      </div>
      <div className='p-3 flex flex-col'>Product Details</div>
    </div>
  )
}
