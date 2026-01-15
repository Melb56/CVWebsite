'use client'

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';
import '../styles/hero.css';
import Button from './Button';

const Hero = () => {
  const typedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = {
      strings: [
        'Créative',
        'Motivée',
        'Bienvenue !',
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      showCursor: false,
    }

    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section id='hero-area'>
      <div className='hero'>

        <div className='hero-content' data-aos='fade-right' data-aos-duration='1500'>
            <h3>Bonjour, je suis</h3>
            <h1>Mélanie Bruzac</h1>
            <h3 className='poste'>Développeuse Front-end React</h3>
            <div id='typed-output' ref={typedRef}></div>
            <Button/>
        </div>

        <div className='hero-img'  data-aos='fade-left' data-aos-duration='1500'>
            <Image
              src='/image/hero/profil.png'
              alt='Icône hero'
              width={300}
              height={100}
            />
        </div>

     </div>      

    </section>
  )
}

export default Hero