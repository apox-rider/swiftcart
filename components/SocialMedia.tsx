import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props{
    className?:string,
    iconClassname?:string,
    tooltipclassname?:string
}
export default function SocialMedia({className,iconClassname,tooltipclassname}: Props) {
    const socialMediaLinks = [
        { 
            name: "Facebook", 
            link: "https://www.facebook.com",
            icon:<FaFacebook className={cn('w-5 h-5', iconClassname)}/>
        },
        { 
            name: "Twitter", 
            link: "https://www.twitter.com", 
            icon:<FaTwitter className={cn('w-5 h-5', iconClassname)}/> 
        },
        { 
            name: "Instagram", 
            link: "https://www.instagram.com", 
            icon:<FaInstagram className={cn('w-5 h-5', iconClassname)}/> 
        },
        { 
            name: "LinkedIn", 
            link: "https://www.linkedin.com", 
            icon:<FaLinkedin className={cn('w-5 h-5', iconClassname)}/> 
        },
      ];
  return (
      <TooltipProvider >
          <div className={cn(`flex items-center gap-3.5 `, className)} >
            {socialMediaLinks.map((item) => (
                    <Tooltip key={item.name}>
                        <TooltipTrigger asChild>
                        <Link
                            key={item.name}
                            href={item.link}
                            target="_blank"
                            className={cn('p-2 border rounded-full hover:text-shop-light-green hoverEffect', tooltipclassname)}
                        >
                            {item.icon}
                        </Link>
                        </TooltipTrigger>
                        <TooltipContent className={cn('bg-white font-semibold text-darkColor ', tooltipclassname)}>
                            <p key={item.name}>{item.name}</p>
                        </TooltipContent>
                    </Tooltip>
            ))}
        </div>
      </TooltipProvider>
  )
}
