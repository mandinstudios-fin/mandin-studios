import React from 'react'
import AboutServicesCard from './AboutServicesCard'
import { aboutServices } from '../../assets/index'

const About = () => {
  return (
    <>
        <div className='mt-32 md:mt-52 text-center'>
            <div>
                <div><h1 className='text-4xl md:text-6xl font-bold md:inline-block'>How We Do ?</h1></div>
                <div><h1 className='text-4xl md:text-6xl font-bold md:inline-block'>What We Do ?</h1></div>
            </div>

            <div className='mx-auto grid grid-cols-1 mt-24'>
                <div className=''>
                    {
                        aboutServices.map((about, index) => (<AboutServicesCard about={about} key={index}/>))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default About