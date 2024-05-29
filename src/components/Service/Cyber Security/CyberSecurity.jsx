import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-react';
import { ServicesMainPages } from '../../../assets/index'
import gsap from 'gsap';
import { MdOutlineArrowOutward } from "react-icons/md";

const CyberSecurity = () => {
    const { title, description, animation } = ServicesMainPages["cybersecurity"]

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})

        gsap.fromTo(".firstRef", {
            y: "50%",
            opacity: 0
            }, {
            y: 0,
            opacity: 1,
            stagger: 0.5
        })

    })
    
    return (
        <div>
            <div className='text-center mx-7 laptop:mx-20 pb-32'>
                <div className=' grid grid-cols-1 laptop:grid-cols-2 items-center mt-4 laptop:mt-0'>
                    <div className='laptop:w-2/3'>
                        <h1 className='firstRef text-left text-4xl laptop:text-5xl font-bold'>{title}</h1>
                        <p className='firstRef text-justify mt-8 laptop:mt-12'>{description}</p>
                    </div>
                    <div className='firstRef laptop:w-[70%] text-center'>
                        <Lottie animationData={animation} loop={true}/>
                    </div>
                    </div>

                    <div className='firstRef mt-4'>
                        <button className='bg-primary p-3 px-8 rounded-full text-lg font-medium hover:scale-105 transition duration-500'><span>Let's connect</span> <span><MdOutlineArrowOutward className='inline'/></span></button>
                    </div>

                    <div className='mt-12'>
                        <h1 className='firstRef text-left text-3xl laptop:text-5xl font-medium'>Protecting your digital frontier,</h1>
                        <h1 className='firstRef text-left text-3xl laptop:text-5xl font-medium'><span className='text-primary'>Securing</span> your peace of mind</h1>
                    </div>

                    <div className='mt-12 grid laptop:grid-cols-3 gap-7 laptop:gap-20'>
                        <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                            <p className='mb-4 text-secondary text-lg font-medium text-center'>Network Security:</p>
                            <p>Secure your organization's network against cyber threats with advanced protection measures.</p>
                        </div>

                        <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                            <p className='mb-4 text-secondary text-lg font-medium text-center'>Application Security:</p>
                            <p>Ensure your applications are secure from vulnerabilities and threats through comprehensive security practices.</p>
                        </div>

                        <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                            <p className='mb-4 text-secondary text-lg font-medium text-center'>Custom Security Solutions:</p>
                            <p>Tailor security solutions to fit the unique needs and challenges of your organization.</p>
                        </div>

                        <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                            <p className='mb-4 text-secondary text-lg font-medium text-center'>Zero Trust Strategy:</p>
                            <p>Implement a zero-trust approach to minimize risks by verifying every access request.</p>
                        </div>

                        <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                            <p className='mb-4 text-secondary text-lg font-medium text-center'>Penetration Testing:</p>
                            <p>Identify and mitigate security weaknesses with thorough penetration testing services.</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CyberSecurity