import React, { useEffect } from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const RoutedAbout = () => {
    useEffect(() => {
        gsap.fromTo(".myRef", {
            y: "70%",
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.5
        })
    })

  return (
    <div>
        <div className='text-center mx-7 laptop:mx-20 mt-4 pb-32 h-screen'>
            <div className='myRef laptop:mx-52'>
                <h1 className='myRef text-3xl laptop:text-6xl text-left font-medium'>A visionary creative studio,<br /> bringing <span className='text-primary'>life</span> to</h1>
                <h1 className='myRef text-3xl laptop:text-6xl text-left font-medium'>concepts, products and experiences</h1>
            </div>

            <div className='laptop:mx-52 mt-20'>
                <h1 className='myRef text-lg laptop:text-lg text-left font-medium'>We Deliver Value</h1>
                <h1 className='myRef laptop:ml-96 text-lg laptop:text-lg text-left laptop:text-right font-medium'>MD Studios expertly crafts customized analytical tools, automating the data journey for our partners, ensuring timely, informed decision-making.</h1>
            </div>

            <div className='laptop:mx-52 mt-20 '>
                <h1 className='myRef text-lg laptop:text-4xl text-left font-medium'>Our <span className='text-primary'>Value-added</span> Services</h1>

                <div className='mt-12 laptop:mt-20 flex justify-between text-center gap-5 flex-wrap'>
                    <Link to={`/services/fintech`} className='myRef bg-primary p-2 px-9 rounded-full'>
                        Fintech <MdOutlineArrowOutward className='inline'/>
                    </Link>

                    <Link to={`/services/webdevelopment`} className='myRef bg-primary p-2 px-9 rounded-full'>
                        Web Development <MdOutlineArrowOutward className='inline'/>
                    </Link>

                    <Link to={`/services/cybersecurity`} className='myRef bg-primary p-2 px-9 rounded-full'>
                        Cyber Security <MdOutlineArrowOutward className='inline'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoutedAbout