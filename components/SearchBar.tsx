import { Search } from 'lucide-react'
import React from 'react'

export default function SearchBar() {
  return (
    <div className='text-shop-light-text dark:text-shop-dark-text cursor-pointer'>
      <Search className='hover:text-shop-dark-green w-5 h-5'/>
    </div>
  )
}
