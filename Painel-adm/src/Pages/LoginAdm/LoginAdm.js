import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


import "./LoginAdm.css";


const LoginAdm = () => {
 
  
  const [email, setEmail] = useState("");
  const [senhaAdm, setSenhaAdm] = useState("");
  const navigate = useNavigate();
  

  const handleLogin = async () => {
    if (!email && !senhaAdm) {
     console.log("por favor preencha correto")
     
    }

  const response = await axios.post('http://localhost:3001/adms/login', {email, senhaAdm});
   if(response.data && response.status === 200){
    localStorage.setItem('user',  JSON.stringify(response.data));
     navigate("/listusuarios");
   }

  };

  return (
    <form className="modal01 ">
      <div className="modal01-content">
        <div className="modal01-header"></div>
        <div className="modal01-body">
          <p className="crie-conta">LoginAdm</p>
          <div className="nome01">
            <i className="input-icon uil uil-user"></i>
            <input
              type="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
          </div>
          <div className="senha03">-
            <i className="input-icon uil uil-lock-alt"></i>
            <input
              placeholder="Digite sua Senha"
              type="password"
              value={senhaAdm}
              onChange={(e) => setSenhaAdm(e.target.value)}
            />
          </div>
          
          <button type="button" className="button-admlog" onClick={handleLogin}>
            Entrar
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginAdm;
