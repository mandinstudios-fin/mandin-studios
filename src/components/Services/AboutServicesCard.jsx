import React from 'react'

const AboutServicesCard = ({ about }) => {
    const { title, description, image } = about;

    return (
        <div className='card sticky mb-20'>
            <div className='laptop:w-[900px] h-auto flex flex-col tablet:flex-row mx-auto border bg-white'>
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