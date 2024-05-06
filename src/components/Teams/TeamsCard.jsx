import React from 'react'

const TeamsCard = ({team}) => {
    const { title, image, description } = team;
  return (
    <div data-scroll-container>
        <div className="flex tablet:flex-row flex-col tablet:justify-center border tablet:border-0" data-scroll-section>
            <div data-scroll data-scroll-speed={3} className="tablet:w-[470px] laptop:w-[600px] tablet:h-auto tablet:mt-4 p-8 tablet:p-12 tablet:-ml-80 laptop:-ml-96 text-left bg-white block tablet:relative tablet:z-10 tablet:drop-shadow-2xl border">
                <div><h1 className='text-3xl font-bold mb-7'>{title}</h1></div>
                <div><p className='tracking-wide'>{description}</p></div>
            </div>
            <div className="tablet:w-[550px] laptop:w-[750px] h-80 -mt-4 bg-white block tablet:absolute tablet:ml-72">
                <img src={image}/>
            </div>
        </div>
    </div>
  )
}

export default TeamsCard