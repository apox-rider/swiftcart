import { Clock, Locate, Mail, Phone } from 'lucide-react'
import React from 'react'

interface ContactDataItemList {
    title:string,
    subtitle:string,
    icon:React.ReactNode
}

const data:ContactDataItemList[] = [
    {
        title:'Working Hours',
        subtitle:'Mon - Fri: 9:00 AM - 6:00 PM',
        icon:<Clock size={20}   />,
    },
    {
        title:'Contact Us', 
        subtitle:'Email: info@swiftcart.com',
        icon:<Mail size={20}   />,
    },
    {
        title:'Address',
        subtitle:'123 Main Street, Cityville',
        icon:<Locate size={20}   />,
    },
    {
        title:'Phone',
        subtitle:'+1 (555) 123-4567',
        icon:<Phone size={20}   />,
    }
]

export default function FooterTop() {
  return (
    <div className='grid grid-cols-2  lg:grid-cols-4 gap-6 border-b'>
        {data?.map((item,index) => (
            <div key={index} className='flex items-center gap-3 hover:cursor-pointer'>
                <div className='p-2 rounded-full bg-lightColor text-shop-dark-green hover:text-shop-light-green hoverEffect'>
                    {item.icon}
                </div>
                <div>
                    <h3 className='text-sm font-bold group-hover:text-black hoverEffect'>{item.title}</h3>
                    <p className='text-xs text-gray-500 group-hover:text-gray-600 hoverEffect'>{item.subtitle}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

 
