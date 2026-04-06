'use client'
import HomeTabBar from '@/components/HomeTabBar'
import { productTypes } from '@/constants/Headerdata'
import { client } from '@/sanity/lib/client'
import { useEffect, useState } from "react"
import {AnimatePresence, motion } from "motion/react"
import { Loader2 } from 'lucide-react'
import NoProduct from './NoProduct'
import ProductCard from './ProductCard'
import { Product } from '@/sanity.types' 

export default function ProductGrid() {
  const [products,setProducts]=useState<Product[]>([])
  const[loading,setLoading]=useState(false)
  const[activeTab,setActiveTab]=useState(productTypes[0]?.title||"")

  const query= `*[__type==product && variant== $variant] | order(name desc){
  ...,"categories":categories[]->title 
}`
const params={variant:activeTab.toLowerCase()}

useEffect(()=>{
  const fetchData=async ()=>{
    setLoading(true)
    try {
      const response=await client.fetch(query,params);
      setProducts(response)
    } catch (error) {
      console.error(`Error fetching data`,error)
    }finally{
      setLoading(false)
    }
  }
  fetchData()
},[activeTab])

  return (
    <div>
    <HomeTabBar selectedTab={activeTab} onTabselect={setActiveTab}/>
    {loading?(
    <div className='flex flex-col items-center justify-center p-10 min-h-80 gap-4 bg-gray-100 w-full text-shop-dark-purple mt-10'>
      <div className='space-x-2 flex items-center '>
        <Loader2 className='w-5 h-6 animate-spin'/>
        <span>Product is loading...</span>
      </div>
    </div>
    ):(
     products.length>0?
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
     </div>:
     <NoProduct selectedTab={activeTab}/>
    )}  
    </div>
  )
}
