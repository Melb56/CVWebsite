'use client'

import Image from 'next/image';
import '../styles/arrow.css'

const Arrow = () => {
  return (
    <div>
      <a href='#' className='scroll-to-top'>
            <span>
                <Image 
                    src='/image/arrow-up.svg' 
                    alt='Arrow' 
                    width={50}
                    height={50}
                />
            </span>
        </a>
    </div>
  )
}

export default Arrow