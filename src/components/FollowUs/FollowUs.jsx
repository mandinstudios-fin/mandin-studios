import React from 'react'
import { FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";

const FollowUs = () => {
  const socialMediaPlatforms = [
    { icon: FaInstagram, color: '#385584', onClick: () => window.open('instagram_url_here') },
    { icon: FaWhatsapp, color: '#385584', onClick: () => window.open('whatsapp_url_here') },
    { icon: FaTwitter, color: '#385584', onClick: () => window.open('twitter_url_here') }
  ];
  
  return (
    <div className='fixed right-0 top-[40vh] z-[9999] '>
      <div className='inline-block text-center h-[20vh] -mr-4 tablet:mr-0'>
        {socialMediaPlatforms.map((platform, index) => (
          <platform.icon key={index} color={platform.color} fontSize={'1.4em'} className='mb-4 mx-auto cursor-pointer mix-blend-difference' onClick={platform.onClick} />
        ))}
        <p className='text-[#385584] -rotate-90 mt-10 font-bold mix-blend-difference'>Follow us</p>
      </div>
    </div>
  )
}

export default FollowUs