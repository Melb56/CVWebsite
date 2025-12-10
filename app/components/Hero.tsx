'use client'

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';
import Link from "next/link";
// import '../styles/hero';

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
    <section id="hero-area">
        <div className="hero-content"data-aos="fade-right" data-aos-duration="1500">
            <h3>Bonjour, je suis</h3>
            <h1>Mélanie Bruzac</h1>
            <h3>Développeuse Front-end</h3>
            <div id="typed-output" ref={typedRef}></div>
            <a className="btn"
            href="/CV_MelanieBruzac.pdf"
            download="CV_MelanieBruzac.pdf"
            data-aos ="fade-left">  Télécharger mon CV </a>
            <Link className="btn" href="#contact"  data-aos ="fade-left"> Me contacter </Link>
        </div>
        <div className="hero-img">
            <Image
              src="/image/photo-profil.png"
              alt="Icône hero"
              width={1000}
              height={1000}
            />

            
        </div>
    </section>
  )
}

export default Hero