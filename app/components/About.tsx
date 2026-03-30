'use client'

import '../styles/about.css';
import Button from './Button';

const about = () => {
  return (
    <section className='about' id='about'>
        <h2 data-aos ='fade-left' data-aos-duration='1000'>À Propos De Moi</h2>
        <p className='about-text' data-aos ='fade-left'>
Développeuse Web spécialisée en React / Next.js et WordPress, je conçois des interfaces et applications web performantes en combinant expérience utilisateur, performance technique et SEO.<br />
Je développe des applications structurées, j’intègre des API et je veille à la qualité d’intégration front/back afin de livrer des solutions fiables et maintenables. <br />
À travers mes projets, j’ai travaillé sur l’authentification, la structuration modulaire des composants, l’optimisation des performances (Core Web Vitals) et la personnalisation de sites WordPress orientés performance et référencement. <br />
Habituée aux environnements JavaScript modernes, je m’adapte rapidement aux contextes agence, ESN ou startup, avec une attention constante portée à la qualité du code, à la maintenabilité et à l’efficacité des livraisons. <br />
Je recherche aujourd’hui un environnement exigeant me permettant de contribuer à des projets web concrets, tout en continuant à renforcer mon expertise technique.</p>
        <Button/>
    </section>
  )
}

export default about
