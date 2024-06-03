import React, { useEffect } from 'react'
import Lottie from 'lottie-react';
import { ServicesMainPages } from '../../../assets/index'
import gsap from 'gsap';
import { MdOutlineArrowOutward } from "react-icons/md";

const WebDevelopment = () => {
  const { title, description, animation } = ServicesMainPages["webdevelopment"]

  useEffect(() => {
    // window.scrollTo({top: 0, behavior: 'smooth'})

    // gsap.fromTo(".firstRef", {
    //   y: "50%",
    //   opacity: 0
    // }, {
    //   y: 0,
    //   opacity: 1,
    //   stagger: 0.5
    // })
  })
  return (
    <div>
      <div className='text-center mx-7 laptop:mx-20 pb-32'>

        <div className='grid grid-cols-1 laptop:grid-cols-2 items-center mt-4 laptop:mt-0'>
          <div className='laptop:w-2/3'>
            <h1 className='firstRef text-left text-5xl tablet:text-7xl laptop:text-9xl font-bold'><span className='text-primary'>Web</span> Development</h1>
            <p className='firstRef text-justify laptop:text-xl mt-8 laptop:mt-12'>{description}</p>
          </div>
          <div className='flex items-center justify-center'>
            <div className='firstRef tablet:w-[70%] laptop:w-[60%] text-center mt-12'>
                <Lottie animationData={animation} loop={true}/>
            </div>
          </div>
        </div>

        <div className='firstRef mt-4'>
          <button className='bg-primary p-3 px-8 rounded-full drop-shadow-2xl text-lg font-medium hover:scale-105 transition duration-500'><span>Let's connect</span> <span><MdOutlineArrowOutward className='inline'/></span></button>
        </div>

        <div className='firstRef mt-12'>
          <h1 className='firstRef text-left text-3xl laptop:text-6xl font-medium'>Elevating your <span className='text-primary'>online presence</span>,</h1>
          <h1 className='firstRef text-left text-3xl laptop:text-6xl font-medium'>One pixel at a time</h1>
        </div>

        <div className='firstRef mt-20 laptop:mt-40'>
          <h1 className='firstRef text-3xl laptop:text-6xl font-medium'><span className='text-primary'>Web</span> Development <span className='text-primary'>Services</span></h1>
        </div>

        <div className='mt-12 grid tablet:grid-cols-2 laptop:grid-cols-3 gap-7 laptop:gap-20'>
          <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
            {/* <div className='flex justify-center'><img  src={`https://mdstudios.s3.ap-south-1.amazonaws.com/web+design.png`} /></div> */}
            <p className='mb-4 text-secondary text-xl font-medium text-center'>Web Design</p>
            <p>Web design is the cornerstone of a successful online presence, and our solutions focus on creating visually stunning and user-friendly websites. From concept to execution, we specialize in crafting custom web designs that reflect your brand identity and captivate your audience. With a keen eye for aesthetics and usability, our web design solutions ensure that your website not only looks great but also delivers an exceptional user experience across all devices.</p>
          </div>

          <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
            {/* <div className='flex justify-center'><img className='laptop:w-[50%]' src={`https://mdstudios.s3.ap-south-1.amazonaws.com/app+dev.png`} /></div> */}
            <p className='mb-4 text-secondary text-xl font-medium text-center'>Web Application Development</p>
            <p>Application development is at the heart of digital innovation, and our solutions are tailored to bring your ideas to life. Whether you need a web application, desktop software, or cloud-based solution, our development expertise spans a wide range of technologies and platforms. From requirement analysis to deployment and maintenance, we work closely with you to develop scalable, secure, and high-performance applications that meet your unique business needs.</p>
          </div>

          <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
            {/* <div className='flex justify-center'><img className='laptop:w-[50%]' src={`https://mdstudios.s3.ap-south-1.amazonaws.com/ecom.png`} /></div> */}
            <p className='mb-4 text-secondary text-xl font-medium text-center'>E-commerce Development</p>
            <p>E-commerce development is essential for businesses looking to establish a robust online presence and drive sales. Our solutions offer comprehensive e-commerce development services, including custom website design, secure payment gateway integration, and intuitive shopping cart functionality. With a focus on user experience and conversion optimization, our e-commerce development solutions help businesses create compelling online storefronts that attract customers and maximize revenue.</p>
          </div>

          <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
            {/* <div className='flex justify-center'><img className='laptop:w-[50%]' src={`https://mdstudios.s3.ap-south-1.amazonaws.com/software+d+ev.png`} /></div> */}
            <p className='mb-4 text-secondary text-xl font-medium text-center'>Software Development</p>
            <p>Software development lies at the core of digital transformation, and our solutions encompass the full software development lifecycle. Whether you need a custom enterprise solution, business process automation software, or specialized industry-specific application, our development expertise spans a wide range of technologies and domains. With a focus on scalability, security, and innovation, our software development solutions empower businesses to stay ahead in today's fast-paced digital landscape.</p>
          </div>

          <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
            {/* <div className='flex justify-center'><img className='laptop:w-[50%]' src={`https://mdstudios.s3.ap-south-1.amazonaws.com/mobile+dev.png`} /></div> */}
            <p className='mb-4 text-secondary text-xl font-medium text-center'>Mobile Application Development</p>
            <p>Mobile application development is essential for reaching customers on the go and providing seamless experiences across devices. Our solutions offer comprehensive mobile application development services, spanning iOS, Android, and cross-platform development. From concept to launch, we specialize in creating user-friendly and feature-rich mobile applications that drive engagement, enhance customer loyalty, and deliver tangible business results.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebDevelopment