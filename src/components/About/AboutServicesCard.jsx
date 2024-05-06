import React from 'react'

const AboutServicesCard = ({ about }) => {
    const { title, description, image } = about;

    return (
        <div className='border border-black rounded-2xl w-2/3 h-auto mb-24 mx-auto overflow-hidden'>
            <div>
                <div className='flex'>
                    <div className='w-2/3'>
                        <div className='p-12 pb-0'>
                            <div className='text-left text-xl font-semibold'><h1>{title}</h1></div>
                            <div className='text-left text-sm mt-2'><p>{description}</p></div>
                        </div>
                    </div>

                    <div className='w-1/3'>
                        <img src={image}/>
                    </div>
                </div>
            </div>
            
            <div>

            </div>
        </div>
    )
}

export default AboutServicesCard