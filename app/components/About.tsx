'use client'

import '../styles/about.css';
import Button from './Button';

const about = () => {
  return (
    <section className='about' id='about'>
        <h2 data-aos ='fade-left' data-aos-duration='1000'>À Propos De Moi</h2>
        <p className='about-text' data-aos ='fade-left'>
Développeuse front-end spécialisée en JavaScript et React / Next.js, je conçois des applications web en partant des enjeux métier pour construire des interfaces performantes, structurées et évolutives.<br />
Je traduis les besoins fonctionnels en architecture front-end claire, j’organise les composants pour garantir la maintenabilité, et j’intègre des API avec une attention particulière portée à la gestion des données et des états applicatifs. <br />
À travers mes projets, j’ai développé des fonctionnalités autour de l’authentification, de la structuration server/client components et de l’optimisation des performances, en m’appuyant sur Next.js, Symfony et MySQL. <br />
Habituée aux environnements JavaScript modernes, j’assimile rapidement de nouvelles technologies ou méthodologies lorsque le projet l’exige, tout en maintenant un haut niveau d’exigence sur la qualité du code, la cohérence architecturale et la performance. <br />
Aujourd’hui, je souhaite intégrer une équipe exigeante afin de contribuer à des applications maintenables, scalables et orientées impact utilisateur, tout en continuant à élever mon niveau technique.
        </p>
        <Button/>
    </section>
  )
}

export default about