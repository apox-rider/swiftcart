import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import { Button } from '@/components/ui/button'
import React from 'react'
 
 export default function Home() {
   return (
    <>
     <Container className='max-w-full py-2.5'>
      <HomeBanner />
     </Container>
    </>
   )
 }
 