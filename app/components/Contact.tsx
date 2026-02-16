import ContactForm from './ContactForm';
import '../styles/contact.css'
import Image from 'next/image';


const Contact = () => {
  return (
    <section id='contact'>
        <h2 data-aos='fade-down' data-aos-duration='1500'>Contactez-moi !</h2>
        <div className='intro-contact' data-aos='fade-right' data-aos-duration='1500'>
          <p >À la recherche d’un poste de</p>
          <p className='job' >Développeuse React & Next.js</p>   
          <p >pour contribuer à des applications web modernes, en agence, ESN ou startup. </p>
          <div className='text-contact' ><p> Je serais ravie d’échanger avec vous de mon parcours et ma motivation.</p></div>
        </div>

        <div className='contact'> 
          <div className='info' data-aos='fade-right' data-aos-duration='1500'>
            <div className='contact-info'>
              <Image
                src='image/contact/email.svg' 
                alt='LogoEmail'
                width={80}
                height={100}
              />            
              <a href='mailto:melanie.bruzac@gmail.com'>melanie.bruzac@gmail.com</a>
            </div>
            <div className='contact-info'>
              <Image
                src='image/contact/linkedin.svg' 
                alt='LogoLinkedin'
                width={80}
                height={100}
              /> 
              <a
                href='https://www.linkedin.com/in/melaniebruzac'
                target='_blank'
               rel='noopener noreferrer'>
              www.linkedin.com</a>
            </div>
            <div className='contact-info'>
              <Image
                src='image/contact/localisation.svg' 
                alt='LogoLocalisation'
                width={80}
                height={100}
              /> 
              <a>France</a>
            </div>
          </div>
          <div className='form-container' data-aos='fade-left' data-aos-duration='1500'>
              <ContactForm/>
          </div>
        </div>
    </section>
  )
}

export default Contact