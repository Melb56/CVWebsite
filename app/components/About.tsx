'use client'

import '../styles/about.css';
import Button from './Button';

const about = () => {
  return (
    <section className='about' id='about'>
        <h2 data-aos ='fade-left' data-aos-duration='1000'> À Propos De Moi</h2>
        <p className='about-text' data-aos ='fade-left'>
Développeuse web spécialisée en React et Next.js, je conçois des interfaces modernes et des applications web interactives, avec une attention particulière portée à la qualité du code, à la performance et à l’expérience utilisateur. <br />
À travers mes projets, je développe des fonctionnalités concrètes autour d’API, d’authentification et de gestion de données, en utilisant notamment Next.js, Symfony et MySQL pour structurer des applications web modernes et évolutives. <br />
Aujourd’hui, je souhaite rejoindre une entreprise pour évoluer en équipe, contribuer à des projets ambitieux et continuer à renforcer mes compétences techniques dans un environnement stimulant.</p>
        <Button/>
    </section>
  )
}

export default about