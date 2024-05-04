import React from 'react'

const Imges = ({href, src, alt,}) => {
  return (
        <a href={href}>
            <picture>
                <img src={src} alt={alt} />
            </picture>
        </a>
  )
}

export default Imges