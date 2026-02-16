'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';
import '../styles/hero.css';
import Button from './Button';

const Hero = () => {
  const typedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ['Bienvenue !'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id='hero-area'>
      <div className='hero'>

        <div className='hero-content' data-aos='fade-right' data-aos-duration='1500'>
            <h3>Mélanie Bruzac</h3>
            <h1 className='poste'>Développeuse React & Next.js</h1>  
            <p className='sous-titre'>Interfaces modernes et applications web</p>
            <p className='competence'>Next.js • Symfony • MySQL • UI moderne</p>
            <p className='description'>Création d’interfaces performantes et d’applications web modernes.</p>
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