import React from 'react'

const LIstItem = ({href, atag , className, li }) => {
  return (
   <li className={`${li}`}>
    <a className={`text-[#767676] font-DMSans text-sm capitalize ${className}`} href={href}>{atag}</a>
   </li>
  )
}

export default LIstItem