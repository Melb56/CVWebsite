'use client'

import React from 'react';
import Image from 'next/image';
import '../styles/portfolio.css';
import Overlay from './Overlay';
import { useState } from 'react';
import { useEffect, useRef } from "react";

const Portfolio = () => {
     const [isOpen, setIsOpen] = useState(false);
     const [selectedProject, setSelectedProject] = useState<string | null>(null);
     const projectRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
    if (selectedProject && projectRef.current) {
        projectRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center', 
        inline: 'center', 
        });
    }
    }, [selectedProject]);

  return (
    <section id='projet'>
        <h2 data-aos="fade-down" data-aos-duration="1500">Mes projets</h2> 

        <div className='projet-container' data-aos="fade-right" data-aos-duration="1500">

            <div className='projet-card' id='osteo'>
                <div className='front-card' >
                    <h4>Otéopathe Charlotte Tanguy</h4>
                    <p>Refonte du site vitrine pour une ostéopathe à Locmiquélic</p>
                    <div className='tags'>
                        <li>Wordpress</li>
                        <li>CSS</li> 
                    </div>
                    <div className='btn-plus'>
                        <button className='see-more-btn' onClick={() => setSelectedProject('osteo')}>
                            +
                        </button>
                    </div>
 
                </div>
                <div className='back-card'>
                    {selectedProject === 'osteo' && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <div className='back' ref={projectRef}>
                                <h4>Ostéopathe Charlotte Tanguy</h4>
                                <div className='projet-img'>
                                    <Image
                                        src='/image/portfolio/OsteoCT.png'
                                        alt='Osteopathe'
                                        width={500}
                                        height={100}
                                    />
                                </div>
                                <p>Refonte complète du site vitrine d’une ostéopathe basée à Locmiquélic, avec pour objectif d’améliorer la visibilité en ligne et l’expérience utilisateur.</p>
                                <div className='list-tasks'>
                                    <p>Tâches réalisées :</p>
                                    <ul className='tasks'>
                                        <li>Analyse des besoins et définition du cahier des charges</li>
                                        <li>Conception d’<a className="underline" href="https://www.figma.com/design/unclzaq7N7t51GR06aT9AX/Ost%C3%A9o-Locmi?node-id=0-1&amp;t=3BpvS39eskpzNfqy-1" target="_blank" rel="noreferrer">une maquette responsive</a></li>
                                        <li>Personnalisation complète d'un thème Wordpress</li>
                                        <li>Développement de l’interface front-end</li>
                                        <li>Intégration et gestion du contenu</li>
                                        <li>Mise en place de l’hébergement</li>
                                        <li>Mise en ligne du site</li>
                                        </ul>
                                </div>
                                    <div className='btn-projet'>
                                        <button>
                                            <a href='https://osteopathe-tanguy-locmiquelic.fr/' target='_blank' rel='noreferrer'>
                                                Voir le site
                                            </a>
                                        </button>
                                    </div>
                            </div>

                            
                        </Overlay>
                    )}     
                </div>
            </div>
            
            <div className='projet-card' id='daily'>
                <div className='front-card'>
                    <h4>Daily Books</h4>
                    <p>Répertoire de livres EN COURS DE DEVELOPPEMENT</p>
                    <div className='tags'>
                        <li>Next.js</li>
                        <li>CSS</li>
                        <li>Prisma</li>
                    </div>
                    <div className='btn-plus'>
                        <button className='see-more-btn' onClick={() => setSelectedProject('daily')}>
                            +
                        </button>
                    </div>
                </div>
                <div className='back-card'>
                    {selectedProject === 'daily' && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <div className='back' ref={projectRef}>
                                <h4>Daily Books</h4>
                                <div className='projet-img'>
                                    <Image
                                        src='/image/portfolio/LogoDB.png'
                                        alt='Daily Books'
                                        width={200}
                                        height={100}/>
                                </div>
                                <p>Daily Books est une application web développée avec Next.js et Prisma, permettant aux utilisateurs de créer un compte pour gérer leur propre répertoire de livres. L’application offre la possibilité d’ajouter, modifier et supprimer des livres, avec un système de filtrage par thème. Des fonctionnalités avancées sont également en cours de développement, comme les listes de souhaits (à lire, favoris, à relire, etc.).</p>
                                <div className='list-tasks'>
                                    <p>Tâches réalisées :</p>
                                    <ul className='tasks'>
                                        <li>Conception d’<a className='underline' href="https://www.figma.com/design/CEDn8qU5gOYapVNEMlQn9F/Daily-Books?node-id=0-1&t=M9XYbw1LIfkcftOW-1" target="_blank" rel="noreferrer">une maquette responsive</a></li>
                                        <li>Développement de la base de données avec Prisma (MySQL)</li>
                                        <li>Mise en place de l’authentification avec NextAuth.js</li>
                                        <li>Développement de l’interface front-end</li>
                                        <li>Déploiement et mise en ligne sur Vercel</li>
                                    </ul>
                                </div>
                                <div className='btn-projet'>
                                    <button>
                                    <a href='https://daily-books.vercel.app/' target='_blank' rel='noreferrer'>
                                            Voir le site
                                        </a>
                                    </button>
                                </div>
                            </div>

                        </Overlay>
                    )} 
                </div>
            </div>
            
            <div className='projet-card' id='flottibulle'>
                 <div className='front-card'>
                    <h4>Flottibulle</h4>
                    <p>Site vitrine pour une école de natation en Bretagne</p>
                    <div className='tags'>
                        <li>Wordpress</li>
                        <li>CSS</li>
                    </div>
                    <div className='btn-plus'>
                        <button className='see-more-btn' onClick={() => setSelectedProject('flottibulle')}>
                            +
                        </button>
                    </div>
                </div>
                <div className='back-card'>
                    {selectedProject === 'flottibulle' && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <div  ref={projectRef}>
                                <h4>Flottibulle</h4>
                                <div className='projet-img'>
                                    <Image
                                        src='/image/portfolio/Flottibulle.png'
                                        alt='Flottibulle'
                                        width={500}
                                        height={100}/>
                                </div>
                                <p>Création du site vitrine WordPress pour Flottibulle, une école de natation située en Bretagne, avec pour objectif de valoriser l’activité, faciliter la prise d’informations et renforcer la présence en ligne.</p>
                                <div className='list-tasks'>
                                    <p>Tâches réalisées :</p>
                                    <ul className='tasks'>
                                        <li>Analyse des besoins du client</li>
                                        <li>Conception d’<a className="underline" href="https://www.figma.com/design/QQpxkB5J5KtMltlSHoe7BQ/Flottibulle?node-id=0-1&amp;t=FLw337mq1dkVfxzF-1" target="_blank" rel="noreferrer">une maquette responsive</a></li>
                                        <li>Personnalisation complète d’un thème WordPress</li>
                                        <li>Développement de l’interface front-end</li>
                                        <li>Mise en ligne du site</li>
                                        <li>Formation du client à l’utilisation de l’interface d’administration</li>
                                    </ul>
                                </div>
                                <div className='btn-projet'>
                                    <button>
                                        <a href='https://flottibulle.fr/' target='_blank' rel='noreferrer'>
                                            Voir le site
                                        </a>
                                    </button>
                                </div>
                            </div>
                           
                        </Overlay>
                    )} 
                </div>
            </div>

            <div className='projet-card' id='cv3'>
                <div className='front-card' >
                    <h4>Mon CV en ligne - version actuelle</h4>
                    <div className='tags'>
                        <li>Next.js</li>
                        <li>Tailwind</li>
                        <li>CSS</li>
                </div>
                    <div className='btn-plus'>
                        <button className="see-more-btn" onClick={() => setSelectedProject("cv3")}>
                            +
                        </button>
                    </div>

                    
                </div>
                <div className='back-card'>
                    {selectedProject === "cv3" && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <div ref={projectRef}>
                                <h4>Mon CV en ligne</h4>
                                <div className='portfolio-img'>
                                    <Image
                                        src="/img/Portfolio/CvVersion2.png"
                                        alt="CV1"
                                        width={500}
                                        height={50}
                                    />
                                </div>
                                <p>Refonte complète de mon CV en ligne, développée en Next.js, avec pour objectif de proposer une présentation claire, moderne et responsive de mon profil, de mes compétences et de mes projets, tout en optimisant l’expérience utilisateur.</p>
                                <div className='list-tasks'>
                                    <p>Tâches réalisées :</p>
                                    <ul className='tasks'>
                                        <li>Elaboration d&apos;une maquette responsive.</li>
                                        <li>Développement du front</li>
                                        <li>Mise en ligne</li>
                                    </ul>
                                </div>
                                <div className="btn-projet">
                                    <button>
                                        <a href="https://melanie-bruzac.fr/" target="_blank" rel="noreferrer">
                                            Voir le site
                                        </a>
                                    </button>
                                </div>                                
                            </div>

                        </Overlay>
                    )}     
                </div>
            </div>

            <div className='projet-card' id='cv2'>
                <div className='front-card'>
                    <h4>Mon CV en ligne</h4>
                    <p>Deuxième version de mon CV en ligne</p>
                    <div className='tags'>
                        <li>Next.js</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                    </div>
                    <div className='btn-plus'>
                        <button className='see-more-btn' onClick={() => setSelectedProject('cv2')}>
                            +
                        </button>
                    </div>
                </div>
                <div className='back-card'>
                    {selectedProject === 'cv2' && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <div ref={projectRef}>
                                <h4>Mon CV en ligne - Version 2</h4>
                                <div className='projet-img'>
                                    <Image
                                        src='/image/portfolio/CvVersion2.png'
                                        alt='CV en ligne'
                                        width={500}
                                        height={100}/>
                                </div>
                                <p>Refonte complète de mon CV en ligne, développée en Next.js, avec pour objectif de proposer une présentation claire, moderne et responsive de mon profil, de mes compétences et de mes projets, tout en optimisant l’expérience utilisateur.</p>
                                <div className='list-tasks'>
                                    <p>Tâches réalisées :</p>
                                    <ul className='tasks'>
                                        <li>Conception d’une maquette responsive</li>
                                        <li>Développement de l’interface front-end avec Next.js</li>
                                        <li>Déploiement et mise en ligne sur Vercel</li>
                                    </ul>
                                </div>
                                <div className='btn-projet'>
                                    <button>
                                        <a href='https://melanie-bruzac.fr/' target='_blank' rel='noreferrer'>
                                                Voir le site
                                        </a>
                                    </button>
                                </div>
                            </div>

                        </Overlay>
                    )} 
                </div>
            </div>

            <div  className='projet-card' id='quai'>
                <div className='front-card'>
                    <h4>Quai Antique</h4>
                    <p>Site vitrine et de réservation pour un restaurant fictif</p>
                    <div className='tags'>
                        <li>Next.js</li>
                        <li>CSS</li>
                    </div>
                    <div className='btn-plus'>
                        <button className='see-more-btn' onClick={() => setSelectedProject('quai')}>
                            +
                        </button>
                    </div>
                </div>
                <div className='back-card'>
                    {selectedProject === 'quai' && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <div ref={projectRef}>
                                <h4>Quai Antique</h4>
                                <div className='projet-img'>
                                    <Image
                                        src='/image/portfolio/QA.png'
                                        alt='CV en ligne'
                                        width={500}
                                        height={100}/>
                                </div>
                                <p>Création d’un site vitrine avec système de réservation pour un restaurant fictif, développé en React.js, avec pour objectif de proposer une expérience utilisateur moderne et intuitive.</p>
                                <div className='list-tasks'>
                                    <p>Tâches réalisées :</p>
                                    <ul className='tasks'>
                                        <li>Conception d’<a className="underline" href="https://www.figma.com/design/MDlhZCJ7jarNGHNH32tus3/Restaurant-Quai-Antique?node-id=1-3&t=8D3PL3AIUfBhDrwL-1" target="_blank" rel="noreferrer">une maquette responsive</a></li>
                                        <li>Développement de l’interface front-end avec React.js</li>
                                        <li>Mise en place d’une page de réservation avec sélection de la date via un calendrier interactif</li>
                                    </ul>
                                </div>
                                <div className='btn-projet'>
                                    <button>
                                        <a href='https://quai-antique.vercel.app/' target='_blank' rel='noreferrer'>
                                            Voir le site
                                        </a>
                                    </button>
                                </div>
                            </div>

                        </Overlay>
                    )} 
                </div>
            </div>

        </div>

    </section>
  );
}

export default Portfolio
