'use client'

import '../styles/skills.css';
import './SkillBar'
import SkillBar from './SkillBar';

const Skills = () => {
  return (
    <section id='skills' className='fade-in'>
        <h2  data-aos='fade-down' data-aos-duration='1500'>Mes Compétences</h2>
        <p className='text-skills'>Stack principale : React • Next.js • JavaScript • SCSS <br />
        Compléments : API/REST • NextAuth • Symfony • MySQL</p>
        <div className='skills'>

                {/* FRONT-END */}
            <div className='skills-card' data-aos='fade-right' data-aos-duration='1500'>
                <h3>Front-end</h3>
                <div className='skills-container'>
                    <div className='skills-item'>
                        <p>React.js</p>
                    </div>
                    <div className='skills-item'>
                        <p>Next.js</p>
                    </div>
                    <div className='skills-item'>
                        <p>Javascript</p>
                    </div>
                    <div className='skills-item'>
                        <p>HTML</p>
                    </div>
                    <div className='skills-item'>
                        <p>CSS</p>
                    </div>
                    <div className='skills-item'>
                        <p>SCSS</p>
                    </div>
                    <div className='skills-item'>
                        <p>Bootstrap</p>
                    </div>
                    <div className='skills-item'>
                        <p>Tailwind</p>
                    </div>
                <div className='skills-item'>
                        <p>Responsive design</p>
                    </div>
                    <div className='skills-item'>
                        <p>Intégration UI</p>
                    </div>
                    <div className='skills-item'>
                        <p>jQuery</p>
                    </div>
                </div>
            </div>

                {/* API & Data */}
            <div className='skills-card'  data-aos='fade-left' data-aos-duration='1500'>
                <h3>API & Data</h3>
                <div className='skills-container'>
                    <div className='skills-item'>
                        <p>API REST</p>
                    </div>
                    <div className='skills-item'>
                        <p>Authentification</p>
                    </div>
                    <div className='skills-item'>
                        <p>CRUD</p>
                    </div>
                    <div className='skills-item'>
                        <p>Symfony</p>
                    </div>
                    <div className='skills-item'>
                        <p>MySQL</p>
                    </div>
                    <div className='skills-item'>
                        <p>Prisma</p>
                    </div>
                </div>

            </div>

                {/* Interfaces & Expérience utilisateur */}
            <div className='skills-card' data-aos='fade-right' data-aos-duration='1500'>
                <h3>UI & Expérience</h3>
                <div className='skills-container quality'>
                    <div className='skills-item'>
                        <p>Intégration de maquettes</p>
                    </div>
                    <div className='skills-item'>
                        <p>Accessibilité WCAG</p>
                    </div>
                    <div className='skills-item'>
                        <p>Optimisation des performances</p>
                    </div>
                    <div className='skills-item'>
                        <p>Standards W3C</p>
                    </div>
                    <div className='skills-item'>
                        <p>SEO</p>
                    </div>

                </div>
            </div>

                {/* Outils & Environnement */}
            <div className='skills-card' data-aos='fade-left' data-aos-duration='1500'>
                <h3>Outils & Environnement</h3>
                <div className='skills-container'>
                    <div className='skills-item'>
                        <p>Git</p>
                    </div>
                    <div className='skills-item'>
                        <p>GitHub</p>
                    </div>
                    <div className='skills-item'>
                        <p>Node.js</p>
                    </div>
                    <div className='skills-item'>
                        <p>Webpack</p>
                    </div>                   
                    <div className='skills-item'>
                        <p>Figma</p>
                    </div>
                    <div className='skills-item'>
                        <p>Jest</p>
                    </div>
                    <div className='skills-item'>
                        <p>Cypress</p>
                    </div>
                    <div className='skills-item'>
                        <p>Wordpress</p>
                    </div>
                </div>
            </div>
        </div>
                {/* LANGUES */}
        <div className='langue'>
            <div className='skills-card'  data-aos='fade-right' data-aos-duration='1500'>
                <h3>Langues</h3>
                <div className='skills-container-langue'>
                    <div className='skills-item-langue'>
                        <p>Français</p>
                        <SkillBar level={100} label={''}/>
                    </div>
                    <div className='skills-item-langue'>
                        <p>Anglais</p>
                        <SkillBar level={70} label={''}/>
                    </div>
                    <div className='skills-item-langue'>
                        <p>Japonais</p>
                        <SkillBar level={30} label={''}/>
                    </div>
                    <div className='skills-item-langue'>
                        <p>Allemand</p>
                        <SkillBar level={20} label={''}/>
                    </div>
                </div>

            </div>         
        </div>     
      

    </section>
  )
}

export default Skills