'use client'

import '../styles/about.css';
import Button from './Button';

const about = () => {
  return (
    <section className='about' id='about'>
        <h2 data-aos ='fade-left' data-aos-duration='1000'> À Propos De Moi</h2>
        <p data-aos ='fade-left'>
Passionnée par le web et les interfaces interactives, j’aime donner vie à des idées grâce au code. Ce qui m’anime, c’est la recherche du bon équilibre entre design, fluidité et performance pour créer des expériences utilisateur à la fois belles et intuitives.  <br/>
Après une formation complète en développement web fullstack, j’ai choisi de me spécialiser dans le front-end, où je peux exprimer ma créativité tout en restant proche de la technique. Je travaille avec React, Next.js, HTML, CSS et JavaScript, tout en continuant à explorer de nouvelles approches et technologies. <br/> 
Curieuse, autonome et toujours prête à apprendre, j’aime les environnements dynamiques où les idées circulent librement.</p>
        <Button/>
    </section>
  )
}

export default about