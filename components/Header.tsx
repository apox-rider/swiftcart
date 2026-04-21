import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavouriteButton from './FavouriteButton'
import SignIn from './SignIn'
import MobileMenu from './MobileMenu'
import { currentUser } from '@clerk/nextjs/server'

import { ClerkLoaded, UserButton } from '@clerk/nextjs'
import { cn } from '@/lib/utils'
import Themetoggle from './themetoggle'

export default async function Header({className}:{className?:string}) {
  const user=await currentUser()
  return (
    <header className={cn(` py-3 border-b border-gray-200 sticky top-0 dark:bg-shop-dark-background/70 backdrop-blur-md z-50 `,className)}>
        <Container className='flex items-center bg-shop-light-background/70  dark:shadow-shop-dark-background/70 justify-between max-w-full backdrop-blur-md z-50' >
            <div className='w-auto gap-2.5 md:w-1/3 flex md:gap-0 items-center justify-start '>
              <MobileMenu />
              <Logo className='ml-auto'/>
            </div>
            <HeaderMenu />
            <div className='w-auto md:w-1/3 flex items-center gap-2 justify-end'>
                <SearchBar />
                <CartIcon />
                <FavouriteButton />
                <ClerkLoaded >
                  <UserButton  />
                  {!user && <SignIn/>}
                </ClerkLoaded>
            </div>
            <Themetoggle/>
              {/* <div id="google_translate_element"/> */}
        </Container>
    </header>
  )
}
