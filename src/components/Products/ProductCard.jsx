import gsap from 'gsap'
import React, { useEffect } from 'react'

const ProductCard = ({ product }) => {
  useEffect(() => {
    gsap.fromTo(".pCard", {
      y: "100%", 
      opacity: 0
    }, {
      y: 0,
      opacity: 1, 
      stagger: 0.2
    })
  })

    const {id, title, image, color, text} = product
    const rotation = id % 2 === 0 ? `-rotate-6` : `rotate-6`;

  return (
    <div className='pCard sticky laptop:top-32 cursor-pointer'>
        <div className={`relative -z-1 bg-[${color}] text-[${text}] rounded-3xl h-[30vh] tablet:h-[33vh] laptop:w-[35vh] laptop:h-[40vh] hover:scale-105 transition duration-500 shadow-xl`}>
            <img src={image} className='productImage object-fill w-full h-full rounded-3xl'/>
        </div>
    </div>
  )
}

export default ProductCard