'use client'

import '../styles/about.css';
import Button from './Button';

const about = () => {
  return (
    <section className='about' id='about'>
        <h2 data-aos ='fade-left' data-aos-duration='1000'>À Propos De Moi</h2>
        <p className='about-text' data-aos ='fade-left'>
Je me spécialise aujourd'hui en cybersécurité via un Bachelor 3 Cybersécurité, Systèmes & Réseaux à Ensitech Nantes (rentrée sept. 2026), pour ancrer mon expertise dev dans une dimension sécurité applicative et infrastructure.
Je recherche une alternance d'un an sur Nantes, Renne et Paris.</p>
        <Button/>
    </section>
  )
}

export default about
