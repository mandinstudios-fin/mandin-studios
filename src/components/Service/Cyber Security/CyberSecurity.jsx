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
                        <h1 className='firstRef text-left text-5xl tablet:text-7xl laptop:text-9xl font-bold'>Cyber <span className='text-primary'>Security</span></h1>
                        <p className='firstRef text-justify mt-8 laptop:text-xl laptop:mt-12'>{description}</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='firstRef tablet:w-[70%] laptop:w-[70%] text-center mt-12'>
                            <Lottie animationData={animation} loop={true}/>
                        </div>
                    </div>
                    </div>

                    <div className='firstRef mt-4'>
                        <button className='bg-primary p-3 px-8 rounded-full drop-shadow-2xl text-lg font-medium hover:scale-105 transition duration-500'><span>Let's connect</span> <span><MdOutlineArrowOutward className='inline'/></span></button>
                    </div>

                    <div className='mt-12'>
                        <h1 className='firstRef text-left text-3xl laptop:text-6xl font-medium'>Protecting your digital frontier,</h1>
                        <h1 className='firstRef text-left text-3xl laptop:text-6xl font-medium'><span className='text-primary'>Securing</span> your peace of mind</h1>
                    </div>

                    <div className='firstRef mt-20 laptop:mt-40'>
                        <h1 className='firstRef text-3xl laptop:text-6xl font-medium'><span className='text-primary'>Cyber</span> Security Services</h1>
                    </div>

                    <div className='mt-12 grid tablet:grid-cols-2 laptop:grid-cols-3 gap-7 laptop:gap-20'>
                        <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                            <p className='mb-4 text-secondary text-xl font-medium text-center'>Network Security</p>
                            <p>Network security is paramount in safeguarding your organization's digital assets and sensitive information from cyber threats. Our solutions provide comprehensive network security services, including firewall configuration, intrusion detection, VPN setup, and network monitoring. With a focus on proactive threat detection and prevention, our network security solutions help businesses maintain a secure and resilient network infrastructure.</p>
                        </div>

                        <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                            <p className='mb-4 text-secondary text-xl font-medium text-center'>Application Security</p>
                            <p>Application security is essential for protecting your software applications from vulnerabilities and cyber attacks. Our solutions offer robust application security services, including code review, vulnerability assessment, secure coding practices, and application security testing. By identifying and mitigating security risks early in the development lifecycle, our application security solutions help businesses build secure and reliable software applications.</p>
                        </div>

                        <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                            <p className='mb-4 text-secondary text-xl font-medium text-center'>Custom Security Solutions</p>
                            <p>Custom security solutions are tailored to address the unique security challenges and requirements of your organization. Our solutions offer personalized security consulting services, risk assessment, security architecture design, and custom security tool development. By taking a holistic approach to security, we work closely with your team to develop bespoke security solutions that align with your business goals and regulatory compliance requirements.</p>
                        </div>

                        <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                            <p className='mb-4 text-secondary text-xl font-medium text-center'>Zero Trust Strategy</p>
                            <p>Zero Trust Strategy is a proactive security approach that assumes no trust within the network and requires strict access controls and authentication mechanisms for all users and devices. Our solutions offer Zero Trust Strategy consulting services, policy development, implementation, and ongoing management. By adopting a Zero Trust Strategy, organizations can minimize the risk of data breaches and unauthorized access while maintaining a flexible and scalable security posture.</p>
                        </div>

                        <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                            <p className='mb-4 text-secondary text-xl font-medium text-center'>Penetration Testing</p>
                            <p>Penetration testing, also known as ethical hacking, is a proactive security assessment technique used to identify and exploit vulnerabilities in your organization's systems and applications. Our solutions offer comprehensive penetration testing services, including vulnerability scanning, exploitation, and reporting. By simulating real-world cyber attacks, our penetration testing solutions help organizations identify and remediate security weaknesses before they can be exploited by malicious actors.</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CyberSecurity