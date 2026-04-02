
import { categoryData, quickLinks } from '@/constants/Headerdata'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import { Subtext, Subtitle } from './text'
import Link from 'next/link'
import { Button } from './ui/button'
import { Input } from './ui/input'





export default function Footer() {
  return (
    <footer className=' border-t bg-lightColor'>
        <Container className='max-w-full'>
            <FooterTop />
            <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-10 py-10'>
              <div className='space-y-4'>
                <Logo />
                <Subtext>
                  Redefining the digital marketplace through cutting-edge design and a 
                  user-first approach. We are committed to providing a seamless, 
                  secure, and premium shopping experience.</Subtext>
                <SocialMedia className='text-darkColor/60' iconClassname='hover:border-shop-dark-green' tooltipclassname='bg-darkColor/80 text-white'/>
              </div>
              <div>
                <Subtitle>Quick Links</Subtitle>
                <ul className='space-y-3 mt-4'>
                  {quickLinks?.map((item,index) => (
                    <li 
                    key={index} >
                      <Link
                      href={item.href}
                      className='text-sm text-gray-600 hover:text-shop-dark-green font-medium   hover:cursor-pointer hoverEffect'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Subtitle>Categories</Subtitle>
                <ul className='space-y-3 mt-4'>
                  {categoryData?.map((item,index) => (
                    <li 
                    key={index} >
                      <Link
                      href={`/categogy/${item.href}`}
                      className='text-sm text-gray-600 hover:text-shop-dark-green font-medium   hover:cursor-pointer hoverEffect'
                      >
                        {item.name}
                      </Link> 
                    </li>
                  ))}
                </ul>
              </div>
              <div className='space-y-4'>
                <Subtitle className='mb-4'>Newsletter</Subtitle>
                  <Subtext>Subscribe to our Newsletter to receive our updates and offers.</Subtext>
                <form className='space-y-3'>
                  <div className='border-black text-black'>
                    <Input  placeholder='Enter your email' type='email' required />
                  </div>
                  <Button className='text-white bg-black w-full'>Subscribe</Button>
                </form>
              </div>
            </div>
            <div className='py-6 border-t text-center text-sm text-gray-600'>
                &copy; {new Date().getFullYear()} 
                <Logo className='text-sm'/>
                . All rights reserved.
            </div>
        </Container>
    </footer>
  )
}
