'use client'
import Logo from './Logo';
import { X } from 'lucide-react';
import headerData from '@/constants/Headerdata';
import { usePathname } from 'next/navigation';
import SocialMedia from './SocialMedia';
import { useOutsideClick } from '@/hooks';

interface SideMenuProps {
  isopen: boolean;
  onclose: () => void;
}
export default function SideMenu({ isopen, onclose }: SideMenuProps) {
    const pathname=usePathname();
    const sidebarRef =useOutsideClick<HTMLDivElement>(onclose);
    return (
    <div className={`fixed inset-y-0 h-screen left-0
    z-50 w-full bg-black/50 shadow-xl ${isopen ? 'translate-x-0' : '-translate-x-full'} hoverEffect `}>
      <div ref={sidebarRef} className='min-w-72 max-w-96 bg-shop-light-background dark:shadow-shop-dark-background text-white h-screen p-10 border-r border-r-shop-dark-green flex flex-col gap-6'>
        <div className='flex items-center gap-5 justify-between'>
            <Logo />
            <button 
            onClick={onclose}
            className='hover:text-shop-light-text dark:text-shop-dark-text text-black  hover:cursor-pointer hoverEffect  '>
                <X  />
            </button>
        </div>
        <div className='flex flex-col space-y-3.5 tracking-wide font-semibold'>
            {headerData.map((item) => (
                <a 
                key={item.name}
                href={item.link}
                className={`hover:text-shop-active hoverEffect text-shop-light-text dark:text-shop-dark-text ${pathname === item?.link && 'text-shop-safety-orange'}`}
                >
                    {item.name}
                </a>
            ))}
            <span className='bg-shop-dark-cyan h-0.5 min-w-full  '/>            
        </div>
        <SocialMedia className='text-black' iconClassname='hover:border-black' tooltipclassname='bg-darkColor/80 text-black'/>
        <div className='flex flex-col'>
          <p>Translator</p>
          <div  id="google_translate_element"/>
        </div>
      </div>
    </div>
  )
}
