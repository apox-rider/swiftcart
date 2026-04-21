import { cn } from '@/lib/utils'
import React from 'react'

export  function Title({children,className}:{children:React.ReactNode,className?:string}) {
  return (
    <h2 className={cn('text-3xl font-bold text-shop-dark-green tracking-wide capitalize font-sans', className)}>
      {children}
    </h2>
  )
}
export  function Subtitle({children,className}:{children:React.ReactNode,className?:string}) {
  return (
    <h3 className={cn('font-semibold text-gray-900 dark:text-shop-dark-text font-sans', className)}>
      {children}
    </h3>
  )
}


export  function Subtext({children,className}:{children:React.ReactNode,className?:string}) {
  return (
    <h2 className={cn('text-gray-600 text-sm', className)}>
      {children}
    </h2>
  )
}
