
import { cn } from '@/lib/utils';
import PriceFormatter from './PriceFormatter';

interface Props{
    price:number |undefined;
    discount:number |undefined;
    className:string;
}

export default function PriceView({price,discount,className}:Props) {
  return (
        <div className='flex items-center gap-2' >
            <PriceFormatter amount={price} className='text-shop-light-text dark:text-shop-dark-text'/>
            {price && discount &&(
                <PriceFormatter amount={price-(discount/100)*price}
                className={cn(`line-through text-xs font-normal text-[#2D6A4F]`,className)}/>
            )}
        </div>
  )
}
