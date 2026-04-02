'use client'
import HomeTabBar from '@/components/HomeTabBar'
import { productTypes } from '@/constants/Headerdata'
import { useState } from "react"

export default function ProductGrid() {
  const [product,setProduct]=useState([])
  const[loading,setLoading]=useState(false)
  const[activeTab,setActiveTab]=useState(productTypes[0]?.title||"")

  return (
    <div>
      <HomeTabBar selectedTab={activeTab} onTabselect={setActiveTab}/>
      ProductGrid
    </div>
  )
}
