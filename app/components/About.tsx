'use client'

import '../styles/about.css';
import Button from './Button';

const about = () => {
  return (
    <section className='about' id='about'>
        <h2 data-aos ='fade-left' data-aos-duration='1000'>À Propos De Moi</h2>
        <p className='about-text' data-aos ='fade-left'>
Développeuse front-end JavaScript spécialisée en React et Next.js, je conçois des applications web modernes en transformant des besoins fonctionnels en interfaces performantes, maintenables et orientées utilisateur. J’interviens sur plusieurs étapes du cycle de vie applicatif : compréhension des enjeux métier, conception technique, développement front-end en React, intégration d’API et amélioration continue de la qualité et des performances.<br />
À travers mes projets, j’ai travaillé sur des fonctionnalités concrètes autour de la gestion de données, de l’authentification et de la structuration d’applications, en utilisant notamment Next.js, Symfony et MySQL. J’accorde une attention particulière à la clarté du code, à la cohérence des interfaces et à la collaboration avec les équipes produit et techniques. <br />
À l’aise dans des environnements JavaScript modernes, je m’adapte aussi bien aux contextes d’agence, d’ESN ou de startup, où réactivité, rigueur technique et vision produit doivent avancer ensemble. Aujourd’hui, je souhaite rejoindre une équipe pour contribuer à des projets web concrets, progresser techniquement et participer à la construction d’applications fiables et durables.
        </p>
        <Button/>
    </section>
  )
}

export default about