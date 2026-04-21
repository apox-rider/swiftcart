'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function Logo({className, spanDesign}:{className?:string, spanDesign?:string}) {
  const iconVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      }
    }
  }

  const blockVariants = {
    initial: { y: 5, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  }

  return (
      <Link href="/" className='inline-flex items-center gap-2 group'>
        <motion.svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          initial="initial"
          animate="animate"
          variants={iconVariants}
          className=" sm:block"
        >
          <motion.rect variants={blockVariants} x="9" y="4" width="6" height="4" rx="1" fill="#FB8500" />
          <motion.rect variants={blockVariants} x="4" y="10" width="7" height="4" rx="1" fill="#8D99AE" opacity="0.8" />
          <motion.rect variants={blockVariants} x="13" y="10" width="7" height="4" rx="1" fill="#FB8500" />
          <motion.rect variants={blockVariants} x="7" y="16" width="10" height="4" rx="1" fill="#1B263B" />
        </motion.svg>

        <h2 className={cn(
          'font-black md:tracking-wider text-shop-safety-orange hover:text-shop-light-green uppercase text-2xl hoverEffect font-sans',
          className
        )}>
          Jenga <span className={cn(
            'text-shop-light-text dark:text-shop-dark-text group-hover:text-shop-dark-green hoverEffect', 
            spanDesign
          )}>Cloud</span>
        </h2>
      </Link>
  )
}