'use client'

import '../styles/about.css';
import Button from './Button';

const about = () => {
  return (
    <section className='about' id='about'>
        <h2 data-aos ='fade-left' data-aos-duration='1000'>À Propos De Moi</h2>
        <p className='about-text' data-aos ='fade-left'>
Développeure fullstack, je prépare activement ma transition vers l'administration des infrastructures sécurisées en m'appuyant sur ce que mon background m'a appris : comprendre les architectures applicatives de l'intérieur, anticiper les surfaces d'attaque et aborder la détection des menaces avec une lecture du code. <br/>

Je structure cette transition : 
             → TryHackMe Pre-Security & SOC Level 1 (en cours)
             → Root-Me - Web, Forensique, Réseau
             → Linux & infra sur VM
             → Bachelor Cybersécurité, Systèmes & Réseaux · Ensitech Nantes - sept. 2026 (RNCP niv. 6) <br/>

Je recherche une alternance 12 mois en SOC, SecOps, infra sécurisée ou supervision d'infrastructures sur Nantes, Rennes ou Paris.</p>
        <Button/>
    </section>
  )
}

export default about
