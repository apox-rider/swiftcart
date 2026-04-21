'use client'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function Themetoggle() {
    const {theme,setTheme}=useTheme()
  return (
    <div>
      <Button variant="outline" className='rounded-full cursor-pointer' size="icon" onClick={()=>setTheme(theme=="light"?"dark":"light")} >
        <FaSun className='absolute w-10 h-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0'/>
        <FaMoon className='absolute w-10 h-10 rotate-90 scale-0 dark:rotate-0 dark:scale-100'/>
      </Button>
    </div>
  )
}
