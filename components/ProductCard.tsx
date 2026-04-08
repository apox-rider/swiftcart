'use client'
import { Product } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import { Flame, FlameIcon, Heart, StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AddToWishlistButoon from './AddToWishlistButoon';
import { Title } from './text';
import PriceView from './PriceView';
import AddToCartButton from './AddToCartButton';



export default function ProductCard({product}:{product:Product}) {
  return (
    <div className='text-sm border border-shop-dark-blue/20  bg-lightColor rounded-md group'>
      <div className='relative group overflow-hidden bg-shop-dark-cyan'>
        {product?.image && 
        <Image 
        src={urlFor(product?.image[0]).url()} 
        alt='Product Image' 
        loading='eager' 
        width={700} 
        height={700}
        className={`w-full h-64 transition-transform bg-shop-light-purple hoverEffect ${product?.stock!==0?"group-hover:scale-105":"opacity-50"}`}
        />}

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
      <div className='p-3 flex flex-col font-black'>
      <p className='text-shop-light-gray uppercase text-xs line-clamp-1'>
        {product?.categories?.map((cat)=>cat).join(", ")}
      </p>
      <Title className='text-black text-sm line-clamp-1 uppercase'>{product?.name}</Title>
      <div className='flex items-center gap-2'>
        <div className='flex items-center'>
          {[...Array(5)].map((_,index)=>(
            <StarIcon key={index} size={13} className={`${index<4?"text-black":""}`} fill={`${index<4?"yellow":"white"}`}/>
          ))}
          <p className='text-shop-dark-orange tracking-wide text-xs'>5 Reviews</p>
        </div>
      </div>
      <div className='flex items-center gap-2.5  text-black'>
          <p className='font-medium'>In-Stock:</p>
          <p className={`text-sm ${product?.stock===0?"text-red-600":" text-shop-dark-purple/80 font-semibold"} `}>{(product?.stock as number)>0?product?.stock:"unavailable"}</p>
      </div>
       <PriceView price={product?.price} discount={product?.discountPrice} className="text-sm"/>
       <AddToCartButton product={product} className={` rounded-full`}/>
      </div>
    </div>
  )
}
