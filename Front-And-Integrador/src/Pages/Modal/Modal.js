import React from "react";
import { Link } from "react-router-dom";
import './Modal.css'

const Modal = ({ id='modal', onClose = () =>{} , children}) => {
    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }
    
    return ( 
    <div id={id} className="modalss" onClick={handleOutsideClick}>
        <div className="containers">
            <button className="closes" onClick={onClose}/>
            <div className="recupera-titulo">
            <h2>Problemas para entrar?</h2> 
            </div>
            <div className="recupera-descricao">
            <p id="desc">Insira seu email  para redefinir sua senha</p> 
        </div>
        <div className="email-celular">
            <input type="text" name="email-celular" placeholder="E-mail " />
        </div>

        <div className="btn-cancela">
            <a href="/indextelainicial/salao"> <button>Cancelar</button></a>
          </div>
        <div className="btn-pesquisar">
            <Link to="/" ><button>Enviar</button></Link>
          </div>
            </div>
     

    </div>
    );
};

export default  Modal