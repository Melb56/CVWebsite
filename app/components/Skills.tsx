'use client'

import '../styles/skills.css';
import './SkillBar'
import SkillBar from './SkillBar';

  const Skills = () => {
    return (
    <section id='skills' className='fade-in'>
        <h2  data-aos='fade-down' data-aos-duration='1500'>Mes Compétences</h2>
        <div className='skills'>
                {/* Cybersécurité*/}
            <div className='skills-section'>
                <div className='skills-card' data-aos='fade-right' data-aos-duration='1500'>
                    <h3>Cybersécurité</h3>
                        {/*Systèmes & Réseaux*/}
                    <div className='skills-container'>
                        <div className='skills-title'>
                            <h5>Systèmes & Réseaux</h5>
                        </div>
                        <div className='skills-item'>
                            <li>Linux :
                                <ul>
                                    <li>Commandes & navigation</li>
                                    <li>Flags, switches, pipes - en cours</li>
                                    <li>Users / groupes / su - en cours</li>
                                    <li>chmod / chown / ACL - en cours</li>
                                    <li>SSH & durcissement - en cours</li>
                                    <li>Sysadmin avancé - notions</li>
                                    <li>Bash scripting - notions</li>
                                    <li>Virtualisation (VM) - en cours</li>  
                                </ul>          
                            </li>
                            <li>Réseaux :
                                <ul>Modèle OSI / TCP-IP - notions</ul>
                                <ol>DNS, HTTP, protocoles - notions</ol>
                                <ol>Subnetting - en cours</ol>
                                <ol>Analyse de trafic / Wireshark - en cours</ol>
                                <ul>Nmap - en cours</ul> 
                                <ol>Firewalls - en cours</ol>
                                <ol>Windows Server</ol>          
                            </li>
                        </div>

                    </div>
                        {/*Sécurité applicative*/}
                    <div className='skills-container'>
                        <div className='skills-title'>
                            <h5>Sécurité applicative</h5>
                        </div>
                        <div className='skills-item'>
                            <li>OWASP Top 10 (Injection SQL / XSS / HTML Injection)- en cours</li>
                            <li>Security by Design</li>
                            <li>Gestion des vulnérabilités - notions</li>
                            <li>SAST / DAST - notions</li>
                            <li>Secrets management - en cours</li>
                            <li>Container security - en cours</li>
                        </div>
                    </div>
                        {/*SOC & Monitoring*/}
                    <div className='skills-container'>
                        <div className='skills-title'>
                            <h5>SOC & Monitoring</h5>
                        </div>
                        <div className='skills-item'>
                            <li>Triage d'alertes - en cours</li>
                            <li>Reporting SOC (5W) - en cours</li>
                            <li>Workbooks & playbooks - en cours</li>
                            <li>Métriques SOC - en cours</li>
                            <li>SIEM - en cours</li>
                            <li>ELK Stack - en cours</li>
                            <li>Analyse de trafic réseau - en cours</li>
                        </div>

                    </div>
                         {/*OUTILS & DEVOPS*/}
                    <div className='skills-container'>
                        <div className='skills-title'>
                            <h5>Outils & Plateformes</h5>
                        </div>
                        <div className='skills-item'>
                            <li>Linux - en cours</li>
                            <li>Nmap - en cours</li>
                            {/* <li>TryHackMe - en cours</li>
                            <li>Root-me - en cours</li> */}
                            <li>VirtualBox  - en cours</li>
                            <li>fail2ban - en cours</li>
                            <li>Trivy - en cours</li>
                            {/* <li>Terraform - en cours</li>
                            <li>Ansible  - en cours</li> */}
                        </div>

                    </div>  
                 </div>
            </div>

            <div className='skills-droit'>
             {/* Développement*/}
            <div className='skills-section'>
                <div className='skills-card' data-aos='fade-right' data-aos-duration='1500'>
                    <h3>Développement</h3>
                        {/*FRONT*/}
                    <div className='skills-container'>
                        <div className='skills-title'>
                            <h5>Front-end</h5>
                        </div>
                        <div className='skills-item'>
                            <li>React.js</li>
                            <li>Next.js</li>
                            <li>JavaScript / TypeScript</li>
                            <li>HTML / CSS</li>
                            <li>SCSS</li>
                            <li>Bootstrap</li>
                            <li>Responsive design</li>
                        </div>

                    </div>
                        {/*BACK & API*/}
                    <div className='skills-container'>
                        <div className='skills-title'>
                            <h5>Back-end & API</h5>
                        </div>
                        <div className='skills-item'>
                            <li>Node.js</li>
                            <li>Prisma ORM</li>
                            <li>MySQL</li>
                            <li>API REST</li>
                            <li>NextAuth</li>
                            <li>Symfony / PHP</li>
                            <li>Docker - en cours</li>
                        </div>

                    </div>
                        {/*UI & QUALITE*/}
                    <div className='skills-container'>
                        <div className='skills-title'>
                            <h5>UI & Qualité</h5>
                        </div>
                        <div className='skills-item'>
                            <li>Intégration maquettes</li>
                            <li>Prisma ORM</li>
                            <li>SEO</li>
                            <li>Figma</li>
                            <li>Optimisation perf.</li>
                            <li>Jest / Cypress</li>
                        </div>

                    </div>
                         {/*OUTILS & DEVOPS*/}
                    <div className='skills-container'>
                        <div className='skills-title'>
                            <h5>Outils & DevOps</h5>
                        </div>
                        <div className='skills-item'>
                            <li>Git / GitHub</li>
                            <li>Vercel</li>
                            <li>JCI/CD (GitHub Actions) - en cours</li>
                            <li>Docker Compose - en cours</li>
                            <li>Trivy (scan images) - en cours</li>
                        </div>

                    </div>                   

                 </div>

            </div>

             {/* Langues*/}
            <div className='skills-section'>
                <div className='skills-card'  data-aos='fade-right' data-aos-duration='1500'>
                    <h3>Langues</h3>
                    <div className='skills-container'>
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
        </div>




          
   
        
        </div>

    </section>
  )
}

export default Skills
