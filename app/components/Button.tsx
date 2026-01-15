import Link from 'next/link';

const Button = () => {
  return (
        <div className='button'>
          <a className='btn'
            href='/CV_MelanieBruzac.pdf'
            download='CV_MelanieBruzac.pdf'
            data-aos ='fade-left'>  Télécharger mon CV </a>
          <Link className='btn' href='#contact'  data-aos ='fade-left'> Me contacter </Link>
        </div>
  )
}

export default Button