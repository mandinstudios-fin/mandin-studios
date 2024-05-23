import React from 'react'
import { FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";

const FollowUs = () => {
  return (
    <div className='fixed right-0 top-[40vh]'>
        <div className='inline-block text-center h-[20vh] p-2'>
            <FaInstagram color={'#385584'} fontSize={'1.4em'} className='mb-4 mx-auto cursor-pointer' onClick={() => window.open(``)}/>
            <FaWhatsapp color={'#385584'} fontSize={'1.4em'} className='mb-4 mx-auto cursor-pointer' onClick={() => window.open(``)}/>
            <FaTwitter color={'#385584'} fontSize={'1.4em'} className='mb-4 mx-auto cursor-pointer' onClick={() => window.open(``)}/>
            <p className='text-[#385584] -rotate-90 mt-10 font-bold'>Follow us</p>
        </div>
    </div>
        
  )
}

export default FollowUs