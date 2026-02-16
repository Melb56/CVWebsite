

const Button = () => {
  return (
        <div className='button'>
          <a className='btn'
            href='/CV_MelanieBruzac.pdf'
            download='CV_MelanieBruzac.pdf'
            data-aos ='fade-left'>  Télécharger mon CV </a>
          <a className='btn' href='#contact'  data-aos ='fade-left'> Me contacter </a>
          <a className='btn' href='#projet'  data-aos ='fade-left'> Mes projets </a>
        </div>
  )
}

export default Button