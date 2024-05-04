import React from 'react'

const Imges = ({href, src, alt, className}) => {
  return (
        <a href={href}>
            <picture>
                <img className={className} src={src} alt={alt} />
            </picture>
        </a>
  )
}

export default Imges