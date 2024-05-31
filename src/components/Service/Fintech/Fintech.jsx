import React, { useEffect } from 'react'
import Lottie from 'lottie-react';
import { ServicesMainPages } from '../../../assets/index'
import gsap from 'gsap';
import { MdOutlineArrowOutward } from "react-icons/md";
import fintechAnimationMainPage from '../../../assets/images/fintechAnimationMainPage.json'

const Fintech = () => {
    const { title, animation, description } = ServicesMainPages["fintech"]

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    
        gsap.fromTo(".firstRef", {
          y: "100%",
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          stagger: 0.4,
        })
      })

    return (
    <div>
        <div className='text-center mx-7 laptop:mx-20 pb-32'>

        <div className=' grid grid-cols-1 laptop:grid-cols-2 items-center mt-4 laptop:mt-0'>
            <div className='laptop:w-2/3'>
            <h1 className='firstRef text-left text-5xl tablet:text-7xl laptop:text-9xl font-bold'>Fin<span className='text-primary'>tech</span></h1>
            <p className='firstRef text-justify mt-8 laptop:text-xl laptop:mt-12'>{description}</p>
            </div>

            <div className='flex items-center justify-center'>
                <div className='firstRef tablet:w-[40%] laptop:w-[55%] text-center mt-12'>
                    <Lottie animationData={animation} loop={true}/>
                </div>
            </div>
            
        </div>

        <div className='firstRef mt-16'>
            <button className='bg-primary p-3 px-8 rounded-full text-lg font-medium hover:scale-105 transition duration-500'><span>Let's connect</span> <span><MdOutlineArrowOutward className='inline'/></span></button>
        </div>

        <div className='mt-12 laptop:mt-10'>
            <h1 className='firstRef text-left text-3xl tablet:text-4xl laptop:text-6xl font-medium'>Empowering Finance</h1>
            <h1 className='firstRef text-left text-3xl tablet:text-4xl laptop:text-6xl font-medium'><span className='text-primary'>Transforming</span> Future</h1>
        </div>

        <div className='firstRef mt-20 laptop:mt-40'>
          <h1 className='firstRef text-3xl tablet:text-4xl laptop:text-6xl font-medium'><span className='text-primary'>Fin</span>tech<span className='text-primary'> Services</span></h1>
        </div>

        <div className=' mt-12 grid tablet:grid-cols-2 laptop:grid-cols-3 gap-7 laptop:gap-20'>
            <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                <p className='mb-4 text-secondary text-xl font-medium text-center'>Banking Solutions Web Applications</p>
                <p>Banking solutions web applications are the backbone of modern financial services, providing a digital platform for banks and financial institutions to offer seamless banking experiences to their customers. Our solutions leverage cutting-edge technologies to streamline processes such as account management, fund transfers, bill payments, and loan applications. With our banking solutions web applications, financial institutions can enhance operational efficiency, improve customer satisfaction, and stay ahead in the digital banking landscape.</p>
            </div>

            <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                <p className='mb-4 text-secondary text-xl font-medium text-center'>Digital Currency Platforms</p>
                <p>Digital currency platforms are revolutionizing the way people transact and invest in cryptocurrencies. Our solutions provide robust, secure, and user-friendly platforms for buying, selling, and trading various digital currencies. With advanced features such as real-time market data, secure wallet services, and intuitive trading tools, our digital currency platforms empower users to navigate the cryptocurrency market with confidence and ease.</p>
            </div>

            <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                <p className='mb-4 text-secondary text-xl font-medium text-center'>Cryptocurrency Development</p>
                <p>Cryptocurrency development opens up endless possibilities for businesses and organizations looking to create their own digital currencies or tokens. Our solutions offer comprehensive cryptocurrency development services, from conceptualization to deployment, tailored to meet the unique needs of our clients. Whether you're launching a decentralized finance (DeFi) platform, tokenizing assets, or creating a custom loyalty program, our cryptocurrency development expertise can bring your vision to life.</p>
            </div>

            <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                <p className='mb-4 text-secondary text-xl font-medium text-center'>Net Banking Solutions</p>
                <p>Net banking solutions are essential for providing customers with convenient and secure access to banking services online. Our solutions offer comprehensive net banking platforms that enable customers to manage their finances anytime, anywhere. With features such as account management, fund transfers, bill payments, and financial planning tools, our net banking solutions empower banks and financial institutions to deliver superior digital banking experiences to their customers.</p>
            </div>

            <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                <p className='mb-4 text-secondary text-xl font-medium text-center'>Payment Gateway Integration</p>
                <p>Payment gateway integration is crucial for businesses looking to accept online payments securely and efficiently. Our solutions offer seamless integration of payment gateways into websites, e-commerce platforms, and mobile applications. With support for various payment methods, robust security features, and a frictionless checkout experience, our payment gateway integration solutions help businesses enhance customer satisfaction and drive revenue growth.</p>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Fintech