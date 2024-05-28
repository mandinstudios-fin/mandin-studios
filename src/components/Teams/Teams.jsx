import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { teams } from '../../assets/index'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger) 

const TeamsCard = ({team}) => {
  const { title, image, description } = team;
  const container = useRef(null);
  const text = useRef(null)
  const imageRef = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches; 
      if (!isMobile) {
          const tl = gsap.timeline({
              scrollTrigger: {
                  trigger: container.current,
                  start: "top center",
                  end: "bottom top",
                  scrub: true,
              },
          })
          .fromTo([text.current], {y: 40}, {y: -120}, 0);
      }
  });
    return () => context.revert();
  }, [])

return (
  <div >
      <div ref={container} className="flex tablet:flex-row flex-col tablet:justify-center border-0" >
          <div ref={text} className="tablet:w-[470px] laptop:w-[600px] tablet:h-auto tablet:mt-4 p-8 tablet:p-12 tablet:-ml-80 laptop:-ml-96 text-left bg-white/70 rounded-md block tablet:relative tablet:z-10 tablet:drop-shadow-2xl border">
            <div><h1 className='text-3xl font-bold mb-7'>{title}</h1></div>
            <div><p className='tracking-wide text-justify'>{description}</p></div>
          </div>
          <div ref={imageRef} className="tablet:w-[500px] laptop:w-[680px] h-80 -mt-4 block tablet:absolute tablet:ml-[30vw]">
            <img src={image} style={{backgroundSize: 'cover'}} className='rounded-md drop-shadow-2xl'/>
          </div>
      </div>
  </div>
)
}

const Teams = () => {
  return (
    <>
      <div className='bg-'>
        <div className='mt-32 text-center'>
          <div><h1 className='text-4xl font-bold' >Our Teams</h1></div>

          <div className='mx-6 laptop:ml-12'>
            <div className='grid grid-cols-1 mt-24 gap-20 laptop:gap-56'>
              {
                teams.map((team, index) => <TeamsCard team={team} key={index}/>)
              }
            </div>
          </div>

        </div>        
      </div>
    </>
  )
}

export default Teams