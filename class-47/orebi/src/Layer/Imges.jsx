import React from 'react'
import { Link } from 'react-router-dom'

const Imges = ({to, src, alt, className}) => {
  return (
        <Link to={to}>
            <picture>
                <img className={className} src={src} alt={alt} />
            </picture>
        </Link>
  )
}

export default Imges