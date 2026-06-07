'use client'

import React from 'react';
import Image from 'next/image';
import '../styles/writeup.css';
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
        <h2 data-aos="fade-down" data-aos-duration="1500">Mes Write-ups</h2> 

        <p> Section où vous retrouverez tous les challenges réalisés pour mettre en pratique mes compétences en cybersécurité.</p>

        <div className='projet-container' data-aos="fade-right" data-aos-duration="1500">
            
            <div className='projet-card' id='challenge1'>
                <div className='front-card-writeup'>
                    <h4>HTML - Code source</h4>
                    <p>Le flag est caché dans le code source HTML d'une page web. Aucune exploitation, aucun outil complexe, le challenge introduit le réflexe fondamental de tout pentester web : inspecter ce que le navigateur reçoit avant de l'afficher.</p>
                    <div className='tags'>
                        <li> <a href='https://www.root-me.org/?page=news&lang=fr'>Root-me</a></li>
                        <li>Web - Serveur</li>
                        <li>Très facile</li>
                    </div>
                    <div className='btn-plus'>
                        <button className='see-more-btn' onClick={() => setSelectedProject('challenge1')}>
                            +
                        </button>
                    </div>
                </div>
                <div className='back-card'>
                    {selectedProject === 'challenge1' && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <div className='back' ref={projectRef}>
                                <h4>HTML - Code source</h4>
                                {/* <div className='projet-img'>
                                    <Image
                                        src='' 
                                        alt=''
                                        width={200}
                                        height={100}/>
                                </div> */}
                                <p>Un navigateur web reçoit du HTML depuis un serveur, puis le rend visuellement. Ce rendu masque tout le contenu brut : commentaires, balises cachées, métadonnées. Les développeurs laissent parfois des informations sensibles (credentials, flags, endpoints) dans ce code source non rendu. Ce challenge entraîne à détecter ce vecteur.</p>
                                <div className='list-tasks'>
                                    <p>Étapes de résolution :</p>
                                    <ul className='tasks'>
                                        <li>Analyser la page : Naviguer vers l'URL du challenge sur Root-Me. La page affiche un contenu visuel minimaliste, sans formulaire ni interaction évidente.</li>
                                        <li>Afficher le code source brut pour analyser en profondeur : Utiliser le raccourci clavier pour afficher le HTML tel que reçu par le navigateur, avant tout rendu.</li>
                                        <li>Chercher le flag dans les commentaires HTML : Le flag est inséré dans un commentaire HTML, invisible à l'affichage mais présent dans le source.</li>
                                        <li>Soumettre le flag : Copier la valeur trouvée dans le champ de validation du challenge sur Root-Me.</li>
                                    </ul>
                                </div>
                                <div className='list-tasks'>
                                    <p>Outils Utilisés :</p>
                                    <ul className='tasks'>
                                        <li>Navigateur Google Chrome</li>
                                        <li>Devtools</li>
                                    </ul>
                                </div>
                                <div className='btn-projet'>
                                    <button>
                                        <a href='https://www.root-me.org/fr/Challenges/Web-Serveur/HTML-Code-source' target='_blank' rel='noreferrer'>
                                                Voir le challenge
                                        </a>
                                    </button>
                                </div>
                            </div>

                        </Overlay>
                    )} 
                </div>
            </div>

            <div className='projet-card' id='challenge2'>
                <div className='front-card-writeup' >
                    <h4>HTTP - Open redirect</h4>
                    <p>La page propose des liens de redirection vers des sites externes via un paramètre GET. Le défi : sortir de la liste blanche des domaines autorisés pour forcer une redirection vers un domaine arbitraire. Vecteur classique de phishing et de bypass de filtres.</p>
                    <div className='tags'>
                        <li><a href='https://www.root-me.org/'>Root-me</a></li>
                        <li>Web - Serveur</li>
                        <li>Facile</li> 
                    </div>
                    <div className='btn-plus'>
                        <button className='see-more-btn' onClick={() => setSelectedProject('challenge2')}>
                            +
                        </button>
                    </div>
 
                </div>
                <div className='back-card'>
                    {selectedProject === 'challenge2' && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <div className='back' ref={projectRef}>
                                <h4>HTTP - Open redirect</h4> 
                                <div className='projet-img'>
                                    {/* <Image
                                        src='/image/portfolio/OsteoCT.png'
                                        alt='Osteopathe'
                                        width={500}
                                        height={100}
                                    /> */}
                                </div>
                                <p>Une redirection ouverte se produit quand une application web accepte une URL fournie par l'utilisateur via un paramètre GET et redirige le navigateur vers cette URL sans validation suffisante. <br />
                                Le serveur vérifie (mal) que la valeur du paramètre appartient à une liste de domaines autorisés. L'objectif est de contourner ce filtre.</p>
                                <div className='list-tasks'>
                                    <p>Étapes de résolution :</p>
                                    <ul className='tasks'>
                                        <li>Observation de l'URL - j'ai ouvert le challenge cliquer sur un des liens proposer et inspecter l'URL générée dans la barre de recherche. J'ai bloqué le chargement de la page avec la touche ECHAP. J'ai ensuite identifié le nome du paramètre GET utilisé pour la redirection. Ici le paramètre à manipuler est https://www.facebook.com. 
                                        <Image
                                        src='/image/writeups/ch2.png'
                                        alt='Osteopathe'
                                        width={500}
                                        height={100}
                                        />
                                        </li>
                                        <li>Test de l'URL - J'ai tester l'URL en remplçant ce dernier paramètre par https://google.com mais ça à bloquer. J'ai donc du trouver un moyen autre moyen de modifier l'URL.</li>
                                        <li>Chercher une méthode - J'ai choisis d'utliser une technique de bypass pour contourner le filtre.</li>
                                        <li></li>
                                    </ul>
                                </div>
                                    <div className='btn-projet'>
                                        <button>
                                            <a href='https://www.root-me.org/fr/Challenges/Web-Serveur/HTTP-Open-redirect' target='_blank' rel='noreferrer'>
                                                Voir le site
                                            </a>
                                        </button>
                                    </div>
                            </div>

                            
                        </Overlay>
                    )}     
                </div>
            </div>
            
            <div className='projet-card' id='challenge3'>
                <div className='front-card-writeup'>
                    <h4>HTTP - User-agent</h4>
                    <p></p>
                    <div className='tags'>
                        <li> <a href='https://www.root-me.org/?page=news&lang=fr'>Root-me</a></li>
                        <li>Web - Serveur</li>
                        <li>Facile</li>
                    </div>
                    <div className='btn-plus'>
                        <button className='see-more-btn' onClick={() => setSelectedProject('challenge3')}>
                            +
                        </button>
                    </div>
                </div>
                <div className='back-card'>
                    {selectedProject === 'challenge3' && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <div className='back' ref={projectRef}>
                                <h4>HTTP - User-agent</h4>
                                {/* <div className='projet-img'>
                                    <Image
                                        src='' 
                                        alt=''
                                        width={200}
                                        height={100}/>
                                </div> */}
                                <p></p>
                                <div className='list-tasks'>
                                    <p>Étapes de résolution :</p>
                                    <ul className='tasks'>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className='list-tasks'>
                                    <p>Outils Utilisés :</p>
                                    <ul className='tasks'>
                                        <li>Navigateur Google Chrome</li>
                                        <li>Devtools</li>
                                    </ul>
                                </div>
                                <div className='btn-projet'>
                                    <button>
                                        <a href='https://www.root-me.org/fr/Challenges/Web-Serveur/HTTP-User-agent' target='_blank' rel='noreferrer'>
                                                Voir le challenge
                                        </a>
                                    </button>
                                </div>
                            </div>

                        </Overlay>
                    )} 
                </div>
            </div>

            <div className='projet-card' id='challenge4'>
                <div className='front-card-writeup'>
                    <h4>Fichier de sauvegarde</h4>
                    <p></p>
                    <div className='tags'>
                        <li> <a href='https://www.root-me.org/?page=news&lang=fr'>Root-me</a></li>
                        <li>Web - Serveur</li>
                        <li>Facile</li>
                    </div>
                    <div className='btn-plus'>
                        <button className='see-more-btn' onClick={() => setSelectedProject('challenge4')}>
                            +
                        </button>
                    </div>
                </div>
                <div className='back-card'>
                    {selectedProject === 'challenge4' && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <div className='back' ref={projectRef}>
                                <h4>Fichier de sauvegarde</h4>
                                {/* <div className='projet-img'>
                                    <Image
                                        src='' 
                                        alt=''
                                        width={200}
                                        height={100}/>
                                </div> */}
                                <p></p>
                                <div className='list-tasks'>
                                    <p>Étapes de résolution :</p>
                                    <ul className='tasks'>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className='list-tasks'>
                                    <p>Outils Utilisés :</p>
                                    <ul className='tasks'>
                                        <li>Navigateur Google Chrome</li>
                                        <li>Devtools</li>
                                    </ul>
                                </div>
                                <div className='btn-projet'>
                                    <button>
                                        <a href='https://www.root-me.org/fr/Challenges/Web-Serveur/Fichier-de-sauvegarde' target='_blank' rel='noreferrer'>
                                                Voir le challenge
                                        </a>
                                    </button>
                                </div>
                            </div>

                        </Overlay>
                    )} 
                </div>
            </div>

            <div className='projet-card' id='challenge5'>
                <div className='front-card-writeup'>
                    <h4>Fichier de sauvegarde</h4>
                    <p></p>
                    <div className='tags'>
                        <li> <a href='https://www.root-me.org/?page=news&lang=fr'>Root-me</a></li>
                        <li>Web - Serveur</li>
                        <li>Facile</li>
                    </div>
                    <div className='btn-plus'>
                        <button className='see-more-btn' onClick={() => setSelectedProject('challenge5')}>
                            +
                        </button>
                    </div>
                </div>
                <div className='back-card'>
                    {selectedProject === 'challenge5' && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <div className='back' ref={projectRef}>
                                <h4>Fichier de sauvegarde</h4>
                                {/* <div className='projet-img'>
                                    <Image
                                        src='' 
                                        alt=''
                                        width={200}
                                        height={100}/>
                                </div> */}
                                <p></p>
                                <div className='list-tasks'>
                                    <p>Étapes de résolution :</p>
                                    <ul className='tasks'>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className='list-tasks'>
                                    <p>Outils Utilisés :</p>
                                    <ul className='tasks'>
                                        <li>Navigateur Google Chrome</li>
                                        <li>Devtools</li>
                                    </ul>
                                </div>
                                <div className='btn-projet'>
                                    <button>
                                        <a href='https://www.root-me.org/fr/Challenges/Reseau/FTP-Authentification' target='_blank' rel='noreferrer'>
                                                Voir le challenge
                                        </a>
                                    </button>
                                </div>
                            </div>

                        </Overlay>
                    )} 
                </div>
            </div>

            <div className='projet-card' id='challenge6'>
                <div className='front-card-writeup'>
                    <h4>FTP - Authentification</h4>
                    <p></p>
                    <div className='tags'>
                        <li> <a href='https://www.root-me.org/?page=news&lang=fr'>Root-me</a></li>
                        <li>Réseau</li>
                        <li>Très facile</li>
                    </div>
                    <div className='btn-plus'>
                        <button className='see-more-btn' onClick={() => setSelectedProject('challenge6')}>
                            +
                        </button>
                    </div>
                </div>
                <div className='back-card'>
                    {selectedProject === 'challenge6' && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <div className='back' ref={projectRef}>
                                <h4>FTP - Authentification</h4>
                                {/* <div className='projet-img'>
                                    <Image
                                        src='' 
                                        alt=''
                                        width={200}
                                        height={100}/>
                                </div> */}
                                <p></p>
                                <div className='list-tasks'>
                                    <p>Étapes de résolution :</p>
                                    <ul className='tasks'>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className='list-tasks'>
                                    <p>Outils Utilisés :</p>
                                    <ul className='tasks'>
                                        <li>Navigateur Google Chrome</li>
                                        <li>Devtools</li>
                                    </ul>
                                </div>
                                <div className='btn-projet'>
                                    <button>
                                        <a href='https://www.root-me.org/fr/Challenges/Web-Serveur/HTTP-Headers' target='_blank' rel='noreferrer'>
                                                Voir le challenge
                                        </a>
                                    </button>
                                </div>
                            </div>

                        </Overlay>
                    )} 
                </div>
            </div>

            <div  className='projet-card' id='quai'>
                <div className='front-card-writeup'>
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
