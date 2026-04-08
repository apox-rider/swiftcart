import { twMerge } from 'tailwind-merge'

interface Props{
    amount:number|undefined;
    className?:string;
}

export default function PriceFormatter({amount,className}:Props) {
    const FormattedPrice=new Number(amount).toLocaleString("en-us",{
        currency:"TSH",
        style:"currency",
        minimumFractionDigits:2
    })
  return (
    <span
    className={twMerge(`text-sm font-semibold text-darkColor`,className)}>
        {FormattedPrice}
    </span>
  )
}
