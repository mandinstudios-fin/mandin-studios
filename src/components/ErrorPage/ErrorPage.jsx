import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center text-center mx-7 laptop:mx-20 pb-32'>
        <h1 className='text-secondary text-5xl font-medium'>404, Page not found!</h1>
        <div className='mt-8 bg-primary font-medium px-7 py-2 rounded-full'>
          <Link to={`/`}>Go to home</Link>
        </div>
    </div>
  )
}

export default ErrorPage