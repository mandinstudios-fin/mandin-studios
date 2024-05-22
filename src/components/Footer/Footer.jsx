import React from 'react'
import FooterContent from './FooterContent'

const Footer = () => {
  return (
    <footer className='relative h-[800px]' style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}>
        <div className='fixed bottom-0 h-[800px] w-full'>
            <FooterContent />
        </div>
    </footer>
  )
}

export default Footer