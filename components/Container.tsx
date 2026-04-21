import { cn } from '@/lib/utils'
import React from 'react'

export default function Container({children,className}: {children: React.ReactNode, className?: string}) {
  return (
    <div className={cn("max-w-screen-xl bg-shop-light-background dark:bg-shop-dark-background text-shop-light-text dark:text-shop-dark-text mx-auto px-7", className)}>
      {children}
    </div>
  )
}
