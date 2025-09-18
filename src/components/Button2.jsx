import React from 'react'
import { cn } from '../../lib/cn'
import Clock from '../assets/svg/Clock'
import KitchenItem from '../assets/svg/KitchenItem'

const Button2 = ({children,className,text,status}) => {
  const baseStyles = 'flex items-center gap-[15px] px-[16px] py-[11px] font-[500] text-[14px] text-black/60 rounded-full capitalize cursor-pointer'

  const renderIcon = () => {
    switch (status) {
      case 'clock':
        return <Clock />
      case 'kitchen':
        return <KitchenItem />
      default:
        return <KitchenItem />
    }
  }

  return (
    <button className={cn(baseStyles, className)} type='submit'>
      {renderIcon()}
      <div className='flex flex-col justify-start items-start'>
        {text&&<p className='font-[500] text-[12px]'>{text}</p>}
        <span className='m-0'>
        {children}
        </span>
      </div>
    </button>
  )
}

export default Button2