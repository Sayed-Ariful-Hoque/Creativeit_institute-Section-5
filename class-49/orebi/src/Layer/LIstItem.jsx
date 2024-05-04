import React from 'react'
import { Link } from 'react-router-dom'

const LIstItem = ({href,Linktagtext , className, li }) => {
  return (
   <li className={`${li}`}>
    <Link className={`text-[#767676] font-DMSans text-sm capitalize ${className}`} href={href}>{Linktagtext}</Link>
   </li>
  )
}

export default LIstItem