import gsap from 'gsap'
import React, { useEffect } from 'react'

const ProductCard = ({ product }) => {
  useEffect(() => {
    gsap.fromTo(".pCard", {
      y: "50%", 
      opacity: 0
    }, {
      y: 0,
      opacity: 1, 
      stagger: 0.1
    })
  })

    const {id, title, image, color, text} = product
    const rotation = id % 2 === 0 ? `-rotate-6` : `rotate-6`;
    console.log(rotation, id)

  return (
    <div className='pCard sticky laptop:top-32'>
        <div className={`relative -z-1 bg-[${color}] text-[${text}] rounded-3xl h-[30vh] laptop:w-[43vh] laptop:h-[55vh] ${rotation}`}>
            <img src={image} className='object-cover w-full h-full rounded-3xl'/>
        </div>
    </div>
  )
}

export default ProductCard