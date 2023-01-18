// import logo from './logo.svg';
import './Homee.css';
import foto from './imag/logs01.png'

const Homee = () => {
  return (
    <section  className='home'   id='home' >
     
    <p className='title-logs' >Seu cabelo e barba molduram  seu rosto,   <br />
   cuide bem deles e apareça!</p> 
   <img  className='imagem-logo 'src={foto}  alt='locomarca'/>
    <p className='sub'>Bora agendar seu horário?</p>

</section>
  );
}

export default Homee;