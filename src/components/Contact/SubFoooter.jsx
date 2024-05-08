import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const SubFoooter = () => {
    const divRef = useRef(null);

    useEffect(() => {
        const div = divRef.current;
        const paraObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
                gsap.fromTo('.subtag1', { x: '20%', opacity: 0 }, { x: '0', opacity: 1, duration: 1.7});
                gsap.fromTo('.subtag2', { x: '-20%', opacity: 0 }, { x: '0', opacity: 1, duration: 1.7});
                gsap.fromTo('.subtag3', { x: '20%', opacity: 0 }, { x: '0', opacity: 1, duration: 1.7});
                gsap.fromTo('.joinbutton', { y: '20vh', opacity: 0 }, { y: '0', opacity: 1, duration: 1, delay: 0.1});

                paraObserver.unobserve(entry.target);
            }
          });
        });

        paraObserver.observe(div);
      
        return () => {
          paraObserver.disconnect();

        };
    }, []);


  return (
    <div>
        <div className='bg-[#f5f5f5] text-[#A2B3D4] text-xl tablet:text-2xl laptop:text-5xl tracking-wide'>
            <div ref={divRef} className='tags text-center py-24'>
                <div className='subtag1'><span>In order to make <span className='text-[#385584]'>good business</span></span></div>
                <div className='subtag2 mt-2'><span>decisions <span>at the </span>right time,</span></div>
                <div className='subtag3 mt-2'><span>we rely on the <span className='text-[#385584]'>right talent</span></span></div>

                <div className='joinbutton text-center pt-12'>
                    <button className='text-sm text-[#585584] border  border-[#585584] p-2 px-7 rounded-full hover:bg-[#585584] hover:text-[#f5f5f5] transition duration-700'>Join our team</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubFoooter