'use client'

import { productTypes } from '@/constants/Headerdata'
import { client } from '@/sanity/lib/client'
import { useEffect, useState } from "react"
import {AnimatePresence, motion } from "motion/react"
import { Loader2 } from 'lucide-react'
import { Product } from '@/sanity.types' 
import ProductCard from '@/components/ProductCard'
import NoProduct from '@/components/NoProduct'
import Logo from '@/components/Logo'

export default function Shop() {
  const [products,setProducts]=useState<Product[]>([])
  const[loading,setLoading]=useState(false)
  const [isShop,setisShop]=useState(true)

  const query= `*[
  _type == "product" && 
  !(_id in path("drafts.**"))
] | order(name desc) {
  ...,
  "categories": categories[]->title
}`

useEffect(()=>{
  const fetchData=async ()=>{
    setLoading(true)
    try {
      const response=await client.fetch(query);
      setProducts(response)
    } catch (error) {
      console.error(`Error fetching data`,error)
    }finally{
      setLoading(false)
    }
  }
  fetchData()
},[])
 
  return (
    <div className='px-5 pb-5'>
      <div className="w-full mt-10 py-12 px-6 mb-8 rounded-2xl bg-gradient-to-br from-shop-dark-border to-shop-light-background dark:from-shop-dark-product dark:to-shop-light-border border dark:border-slate-800 flex flex-col items-center text-center">
      <Logo className='animate-caret-blink'/>
      <h1 className="text-3xl md:text-5xl font-extrabold dark:text-white mb-4 tracking-tight">
      Build Faster. <span className="text-shop-safety-orange">Source Smarter.</span>
      </h1>
      <p className="max-w-2xl dark:text-slate-400 text-lg md:text-xl leading-relaxed">
        Quality-certified materials delivered to your site  . 
        Everything from foundation to finish, simplified in the cloud.
      </p>
    </div>
    {loading?(
    <div className='flex flex-col items-center justify-center p-10 min-h-80 gap-4 bg-shop-light-background dark:bg-shop-dark-background w-full text-shop-dark-purple mt-10'>
      <div className='space-x-2 flex items-center '>
        <Loader2 className='w-5 h-6 animate-spin'/>
        <span>Products are loading...</span>
      </div>
    </div>
    ):(
     products.length>0?
     (<>
     
     <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10'>
       {products?.map((product)=>(
        <AnimatePresence key={product?._id}>
          <motion.div
          layout 
          initial={{opacity:0.2}}
          animate={{opacity:1}}
          exit={{opacity:0}}>
            <ProductCard product={product}/>
          </motion.div>
        </AnimatePresence>
       ))}
     </div>
     </>)
     :
     <NoProduct isShop={isShop} className='min-h-screen'/>
    )}  
    </div>
  )
}
