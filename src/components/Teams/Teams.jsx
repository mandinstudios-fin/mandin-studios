import React, { useEffect, useRef } from 'react'
import { teams } from '../../assets/index'
import TeamsCard from './TeamsCard';

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