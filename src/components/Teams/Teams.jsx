import React, { useEffect, useRef } from 'react'
import { teams } from '../../assets/index'
import LocomotiveScroll from 'locomotive-scroll'
import TeamsCard from './TeamsCard';

const Teams = () => {
  const divRef = useRef(null);

  // useEffect(()=>{
  //   const scroll = new LocomotiveScroll({
  //   el: divRef.current,
  //   smooth: true,
  
  // })
  // return () => scroll.destroy()
  
  // },[])

  return (
    <>
      <div data-scroll-container ref={divRef}>
        <div className='mt-32 text-center' data-scroll-section>
          <div data-scroll><h1 className='text-4xl font-bold' data-scroll>Our Teams</h1></div>

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