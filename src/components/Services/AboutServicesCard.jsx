import React, { useRef } from 'react'
import { useTransform } from 'framer-motion'

const AboutServicesCard = ({ title, description, image, i }) => {
    return (
        <div className='sticky top-72 tablet:top-96 laptop:top-96'>
            <div className='relative laptop:w-[900px] h-auto flex flex-col tablet:flex-row mx-auto border bg-white rounded-md shadow-xl' style={{top:`calc(-5vh + ${i * 25}px)`}}>
                <div className='tablet:w-1/2 text-left p-8 laptop:pl-11 laptop:py-20 laptop:my-auto'>
                    <div><h1 className='text-3xl font-bold mb-7'>{title}</h1></div>
                    <div><p className='text-justify'>{description}</p></div>
                </div>

                <div className='tablet:w-1/2 m-auto'>
                    <img src={image} style={{backgroundSize: 'cover'}}/>
                </div>
            </div>
        </div>
    )
}

export default AboutServicesCard