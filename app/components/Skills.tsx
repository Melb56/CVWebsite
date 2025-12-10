"use client"

const Skills = () => {
  return (
    <section id="skills" className="fade-in">
        <h2  data-aos="fade-down" data-aos-duration="1500">Mes compétences</h2>
        <div className="skills">

                {/* FRONT-END */}
            <div className="skills-card" data-aos="fade-right" data-aos-duration="1500">
                <h3>Front-end</h3>
                <p>Création et intégration de sites web responsive, moderne et sécurisé.</p>
                <div className="skills-container">
                    <div className="skills-item">
                        <p>React.js</p>
                    </div>
                    <div className="skills-item">
                        <p>Netx.js</p>
                    </div>
                    <div className="skills-item">
                        <p>Javascript</p>
                    </div>
                    <div className="skills-item">
                        <p>Typescript</p>
                    </div>
                    <div className="skills-item">
                        <p>HTML</p>
                    </div>
                    <div className="skills-item">
                        <p>CSS</p>
                    </div>
                    <div className="skills-item">
                        <p>SCSS</p>
                    </div>
                    <div className="skills-item">
                        <p>Bootstrap</p>
                    </div>
                    <div className="skills-item">
                        <p>Tailwind</p>
                    </div>
                    <div className="skills-item">
                        <p>jQuery</p>
                    </div>
                </div>
            </div>

                {/* BACK-END */}
            <div className="skills-card"  data-aos="fade-left" data-aos-duration="1500">
                <h3>Back-end</h3>
                <p>Création et gestion de données (CRUD).</p>
                <div className="skills-container">
                    <div className="skills-item">
                        <p>PHP</p>
                    </div>
                    <div className="skills-item">
                        <p>Symfony</p>
                    </div>
                    <div className="skills-item">
                        <p>MySQL</p>
                    </div>
                    <div className="skills-item">
                        <p>Node.js</p>
                    </div>
                    <div className="skills-item">
                        <p>Prisma</p>
                    </div>
                </div>

            </div>

                {/* Outils&Plateformes */}
            <div className="skills-card" data-aos="fade-right" data-aos-duration="1500">
                <h3>Outils & Plateformes</h3>
                <p>Versionnage des projet, création de maquettes et de prototypes, responsives et centrées utilisateur, création et édition de thèmes Wordpress.</p>
                <div className="skills-container">
                    <div className="skills-item">
                        <p>Git</p>
                    </div>
                    <div className="skills-item">
                        <p>GotHub</p>
                    </div>
                    <div className="skills-item">
                        <p>Xampp</p>
                    </div>
                    <div className="skills-item">
                        <p>Wordpress</p>
                    </div>
                    <div className="skills-item">
                        <p>Figma</p>
                    </div>
                    <div className="skills-item">
                        <p>Canva</p>
                    </div>
                </div>
            </div>

                 {/* LANGUES */}
            <div className="skills-card"  data-aos="fade-left" data-aos-duration="1500">
                <h3>Langue</h3>
                <div className="skills-container">
                    <div className="skills-item">
                        <p>Français</p>
                    </div>
                    <div className="skills-item">
                        <p>Anglais</p>
                    </div>
                    <div className="skills-item">
                        <p>Japonais</p>
                    </div>
                    <div className="skills-item">
                        <p>Allemand</p>
                    </div>
                </div>

            </div>

        </div>

    </section>
  )
}

export default Skills