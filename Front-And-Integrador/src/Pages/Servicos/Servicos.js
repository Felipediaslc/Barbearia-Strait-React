import './Servicos.css';

function Servicos() {
  return (
    <div  className="servicos" >
        <div className="titulo">Serviços</div>
    <div className="container">
    <div className="card">
        <div className="card-title">
            <h2>Cabelo</h2>
            <p id="cabelo-tit">Máquina</p>
            <p><i>R$</i><span>30</span>,00</p>
        </div>
        <div className="card-title" >
        
         <p id="cabelo-tit">Máquina + Tesoura</p>
         <p><i >R$</i><span>60</span>,00</p>
     </div>
        <div className="card-content" >
            <ul>
              <li><i className="fa fa-check-circle"></i>Lavagem de Cabelo</li>
            </ul>
       
        </div>
    </div>
    <div className="card">
        <div className="card-title">
            <h2>Barba</h2>
            <p><i>R$</i><span>30</span>,00</p>
        </div>
        <div className="card-content">
            <ul>
                <li><i className="fa fa-check-circle"></i>Corte</li>
                <li><i className="fa fa-check-circle"></i>Lavagem</li>
                <li><i ></i></li>
                <li><i ></i></li>
                <li><i ></i></li>
                <li><i></i></li>
            </ul>
            
        </div>
    </div>
    <div className="card">
        <div className="card-title">
            <h2>Sobrancelha</h2>
            <p ><i >R$</i><span>30</span>,00</p>
        </div>
        <div className="card-content">
            <ul>
                <li><i className="fa fa-check-circle"></i>Unlimited Website</li>
                <li><i ></i></li>
                <li><i ></i></li>
                <li><i ></i></li>
                <li><i ></i></li>
                <li><i ></i></li>
            </ul>
           
        </div>
    </div>
</div>
</div>
  );
}

export default Servicos;











