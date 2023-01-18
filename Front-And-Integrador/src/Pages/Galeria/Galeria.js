 import './Galeria.css';

import foto1 from './imag/imagenserv.jpeg'
import foto2 from './imag/fund33.jpg'
import foto3 from './imag/fund09.jpg'
import foto4 from './imag/fund07.jpg'
import foto5 from './imag/mage01.jpg'
import foto6 from './imag/cliente-de-preparação-barbeiro-profissional-para-corte-cabelo-na-barbearia-moda-do-estilo-autocuidado-da-beleza-e-masculina-231458926.jpg'

function Galeria() {
  return (
    <section className='galeria' id='galeria'>
    <p >GALERIA</p>
    <div className='wrapper'>
      <div className='gallery'>
        <div className='image'><span><img src={foto1} alt='' /></span></div>
        <div className='image'><span><img src={foto2} alt='' /></span></div>
        <div className='image'><span><img src={foto3} alt=''/></span></div>
        <div className='image'><span><img src={foto4} alt='' /></span></div>
        <div className='image'><span><img src={foto5} alt='' /></span></div>
        <div className='image'><span><img src={foto6} alt=''/></span></div>
      </div>
    </div>
    <div className='preview-box'>
      <div className='details'>
        <span className='title'> <p className='current-img'></p><p className='total-img'></p></span>
        <span className='icon fa-solid fa-xmark'>X</span>
      </div>
      <div className='image-box'>
        <div className='slide prev'><i className='fas fa-angle-left'></i></div>
        <div className='slide next'><i className='fas fa-angle-right'></i></div>
        <img src='' alt=''/>
      </div>
    </div>
    <div className='shadow'></div>
    


  </section>
    

  );
}

export default  Galeria;