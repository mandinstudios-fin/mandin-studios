import React, { useEffect } from 'react';
import { products } from '../../assets/index';
import ProductCard from './ProductCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Products = () => {
    useEffect(() => {
        // gsap.registerPlugin(ScrollTrigger);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // const container = document.querySelector(".contentContainer");
        // const pinWrap = document.querySelector(".pinWrap");
        // const pinWrapWidth = pinWrap.offsetWidth;
        // const horizontalScrolling = pinWrapWidth - window.innerWidth;

        // ScrollTrigger.create({
        //     trigger: container,
        //     start: "top 10%",
        //     end: `+=${horizontalScrolling}`,
        //     pin: true,
        //     scrub: 1
        // });

        // ScrollTrigger.create({
        //     trigger: pinWrap,
        //     scroller: container,
        //     scrub: 1,
        //     start: "top top",
        //     end: "",
        //     pin: true,
        //     horizontal: true
        // });

        // return () => {
        //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        // };

        gsap.fromTo(".h1", {
            y: "50%",
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        })
    }, []);

    return (
        <div>
            <div className='text-center mx-7 laptop:mx-20 mt-16 pb-56'>
                <div className='contentContainer overflow-hidden'>
                    <h1 className='h1 text-3xl laptop:text-5xl font-medium'>Our <span className='text-primary'>Products</span></h1>

                    <div className='pinSection'>
                        <div className='pinWrap'>
                            <div className='pinWrap p-9 flex flex-col desktop:flex-row items-center'>
                                {products.map((product) => <ProductCard product={product} key={product.id}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
