import React, { useRef } from 'react'
import { useTransform } from 'framer-motion'

const AboutServicesCard = ({ title, description, image, i, progress, range, targetScale }) => {
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className='sticky top-96 tablet:top-56 laptop:top-96'>
            <div className='relative laptop:w-[900px] h-auto flex flex-col tablet:flex-row mx-auto border bg-white rounded-md' style={{top:`calc(-5vh + ${i * 25}px)`}}>
                <div className='tablet:w-2/3 text-left p-8 laptop:pl-11 laptop:py-20 laptop:my-auto'>
                    <div><h1 className='text-3xl font-bold mb-7'>{title}</h1></div>
                    <div><p>{description}</p></div>
                </div>

                <div className='h-full'>
                    <img src={image} className=''/>
                </div>
            </div>
        </div>
    )
}

export default AboutServicesCard