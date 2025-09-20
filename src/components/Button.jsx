import React from 'react'
import { cn } from '../../lib/cn'
import Menu from '../assets/svg/Menu'
import KitchenItem from '../assets/svg/KitchenItem'
import Video from '../assets/svg/Video'
import Instagram from '../assets/svg/Instagram'

const Button = ({ children, className, variety = 'btn1', status }) => {
  const baseStyles = 'flex items-center gap-[15px] px-[37px] py-[18px] ring-1 text-black rounded-2xl capitalize cursor-pointer'

  const renderIcon = () => {
    switch (status) {
      case 'menu':
        return <Menu />
      case 'kitchen':
        return <KitchenItem />
      case 'instagram':
        return <Instagram/>
      default:
        return <Video />
    }
  }

  return (
    <button className={cn(baseStyles, className)} type='submit'>
      {children}
      {variety === 'btn2' && renderIcon()}
    </button>
  )
}

export default Button
