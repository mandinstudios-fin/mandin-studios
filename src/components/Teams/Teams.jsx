import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { teams } from '../../assets/index'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger) 

const TeamsCard = ({team}) => {
  const { title, image, description } = team;
  const container = useRef(null);
  const text = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "center bottom",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(text.current, {y: -100}, 0)
    })

    return () => context.revert();
  }, [])

return (
  <div >
      <div ref={container} className="flex tablet:flex-row flex-col tablet:justify-center border tablet:border-0" >
          <div ref={text} className="tablet:w-[470px] laptop:w-[600px] tablet:h-auto tablet:mt-4 p-8 tablet:p-12 tablet:-ml-80 laptop:-ml-96 text-left bg-white block tablet:relative tablet:z-10 tablet:drop-shadow-2xl border">
              <div><h1 className='text-3xl font-bold mb-7'>{title}</h1></div>
              <div><p className='tracking-wide'>{description}</p></div>
          </div>
          <div className="tablet:w-[500px] laptop:w-[680px] h-80 -mt-4 bg-white block tablet:absolute tablet:ml-72">
              <img src={image}/>
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