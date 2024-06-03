import React from 'react'

const Vision = () => {
  return (
    <div className=' bg-primary laptop:mt-[6.9rem] text-center px-6 pb-12'>
        <h1 className='text-4xl laptop:text-6xl py-16 font-medium'>Your Vision is our Mission</h1>
        <div className='grid laptop:grid-cols-2 items-center laptop:gap-0 laptop:px-56'>
            <div className='w-96'><img src='https://cdn.prod.website-files.com/6442e916a71be626c853bd50/645117ae9ad8eb44f7106fdb_two-people-elegant-paper-work-p-800.jpg' className='w-full h-full object-contain rounded-2xl'/></div>
            <div className='pt-12 laptop:pt-0 text-lg'>
                <p className='text-justify'>At Md Studios, we are driven by a singular purpose: to bring your vision to life. As a pioneering startup in the fintech industry, our mission is to develop innovative, high-quality applications that cater to the evolving needs of businesses and individuals in the digital era.</p>
                <p className='text-justify mt-4'>We understand that every visionary idea begins with a spark of inspiration. Whether you're looking to revolutionize financial management through cutting-edge fintech apps, harness the power of the web with dynamic applications, navigate the complex world of cryptocurrencies, or elevate your brand with strategic social media marketing, we are here to make your aspirations a reality.</p>
                <p className='text-justify mt-4'>Your goals are at the heart of everything we do. By collaborating closely with you, we ensure that our products are tailored to meet your specific needs and exceed your expectations. From the initial concept to the final launch, we are committed to excellence in every step of the journey.</p>
            </div>
        </div>
    </div>
  )
}

export default Vision