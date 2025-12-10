import ContactForm from "./ContactForm"


const Contact = () => {
  return (
    <section id="contact">
        <h1 data-aos="fade-down" data-aos-duration="1500">Contactez-moi !</h1>
        <div className='intro-contact' data-aos="fade-right" data-aos-duration="1500">
          <p >Actuellement à la recherche d&apos;un emploi en tant que : </p>
          <p className='job-search' >Développeuse Front-end, Développeuse Web ou Intégratrice Web.</p>   
          <div className='text-contact' ><p> Je serais ravie d’échanger avec vous de mon parcours et ma motivation.</p></div>
        </div>

        <div className="contact"> 
          <div className="info" data-aos="fade-right" data-aos-duration="1500">
            <div className="contact-info">
              <img src="image/contact/email.svg" alt="LogoEmail"/>
              <a href="mailto:melanie.bruzac@gmail.com">melanie.bruzac@gmail.com</a>
            </div>
            <div className="contact-info">
              <img src="image/contact/linkedin.svg" alt="LogoLinkedin"/>
              <a
                href="https://www.linkedin.com/in/melaniebruzac"
                target="_blank"
               rel="noopener noreferrer">
              www.linkedin.com</a>
            </div>
            <div className="contact-info">
              <img src="image/contact/localisation.svg" alt="LogoLocalisation"/>
              <a>France</a>
            </div>
          </div>
          <div className="form-container" data-aos="fade-left" data-aos-duration="1500">
              <ContactForm/>
          </div>
        </div>
    </section>
  )
}

export default Contact