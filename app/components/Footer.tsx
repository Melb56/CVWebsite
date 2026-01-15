'use client'

import '../styles/footer.css';
import Linkedin from './Linkedin';
import Link from 'next/link';



const Footer = () => {
  return (
     <footer>
      <div className='footer'>
        <Linkedin/>
        <p>
           &copy; Mélanie Bruzac 2026 - <Link href='/mentions'>Mentions Légales</Link>
        </p>
      </div>  
    </footer>
  )
}

export default Footer
