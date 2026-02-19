'use client'

import '../styles/about.css';
import Button from './Button';

const about = () => {
  return (
    <section className='about' id='about'>
        <h2 data-aos ='fade-left' data-aos-duration='1000'>À Propos De Moi</h2>
        <p className='about-text' data-aos ='fade-left'>
Développeuse front-end JavaScript spécialisée en React et Next.js, je transforme des besoins concrets en interfaces performantes et fonctionnalités web orientées utilisateur, en accordant une attention particulière à la qualité du code, à la performance et à l’expérience utilisateur. À travers mes projets, je développe des fonctionnalités autour d’API, d’authentification et de gestion de données, en utilisant notamment Next.js, Symfony et MySQL pour construire des applications web solides et évolutives.<br />
À l’aise dans les environnements JavaScript modernes, je m’adapte facilement aux besoins des projets et aux choix techniques des équipes. Curieuse et en apprentissage continu, j’aime explorer de nouvelles solutions pour faire avancer les idées et créer des interfaces utiles et efficaces. <br />
Aujourd’hui, je souhaite rejoindre une entreprise pour contribuer à des projets motivants, collaborer avec une équipe technique et continuer à progresser en apportant une vraie valeur aux projets sur lesquels je m’investis.
        </p>
        <Button/>
    </section>
  )
}

export default about