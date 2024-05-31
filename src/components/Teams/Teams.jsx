import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { teams } from '../../assets/index'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import teamsbg from '../../assets/images/teamsbg.png'

gsap.registerPlugin(ScrollTrigger) 

const TeamsCard = ({team}) => {
  const { title, image, description } = team;
  const container = useRef(null);
  const bodycontainer = useRef(null)
  const text = useRef(null)
  const imageRef = useRef(null)
  const colorref = useRef(null)

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
          tl.fromTo([text.current], {y: 50}, {y: -120}, 0);
      }
  });
    return () => context.revert();
  }, [])

return (
  <div >
      <div>
        <div ref={container} className=" flex flex-col tablet:flex-row tablet:justify-center tablet:items-center " >
          <div ref={text} className="tablet:w-[470px] laptop:w-[600px] tablet:mt-4 p-8 tablet:p-12 tablet:-ml-80 laptop:-ml-96 text-left bg-white/70 rounded-md block tablet:relative tablet:z-10 tablet:drop-shadow-2xl border">
            <div><h1 className='text-3xl font-bold mb-7'>{title}</h1></div>
            <div><p className='tracking-wide text-justify'>{description}</p></div>
          </div>
          <div ref={imageRef} className="object-cover tablet:w-[500px] laptop:w-[650px] h-80 laptop:h-[23rem] -mt-4 block tablet:absolute tablet:ml-[30vw] border rounded-md bg-white drop-shadow-2xl p-7">
            <img src={image} style={{objectFit: "contain"}} className='h-[100%] w-[100%]'/>
            <div ref={colorref} className='bg-primary h-24 w-24 laptop:ml-96 -mt-4'></div>
          </div>
        </div>
      </div>
      
  </div>
)
}

const Teams = () => {

  return (
    <>
      <div>
        <div className=' text-center py-32'>
          <div className='h-[100%] w-[100%] hidden laptop:block overflow-y-clip'>
              <div className='absolute w-full'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none"
                    className='block w-full h-auto'
                >
                    <polygon points="0,100 100,0 100,100" fill="#A2B3D4" opacity={0.5}/>
                    <line x1="100" y1="0" x2="100" y2="0" stroke="black" strokeWidth="1"/>
                </svg>
              </div>
          </div>
          
          <div><h1 className='text-4xl font-bold' >Our Teams</h1></div>

          <div className='mx-6 laptop:ml-12 mt-16'>
            <div className='grid grid-cols-1 mt-24 gap-20 tablet:gap-0 laptop:gap-56'>
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