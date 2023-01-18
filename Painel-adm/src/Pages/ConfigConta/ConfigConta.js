import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./ConfigConta.css";

const ConfigConta = () => {
  
  
 
 const [admins, setAdmins] = useState([]);

 useEffect(() => {
   recuperarConta();
 }, []);

 const recuperarConta = async () => {
   const users = await axios.get("http://localhost:3001/adms");
  

   setAdmins(users.data);
 };
  const preencherPerfil = () => {
    return admins.map((ad)=>(
      <div className="preenche-empres" >
        <div id="preenche-nomes">{ad.nomeEmpres}</div>
        <div id="preenche-tel">{ad.telefone}</div>
        <div id="preenche-end">{ad.ruaAv}</div>
        <div id="preenche-num">{ad.numEnd}</div>
        <div id="preenche-complement">{ad.complemento}</div>
        <div id="preenche-bairro">{ad.bairro}</div>
        <div id="preenche-cid">{ad.cidade}</div>
      </div>
    ))
  };

  return (
    <div className="body-configconta">
      <div className="container-configconta">
        <div className="edit-user" >
          <h5 className="info-adm">Perfil</h5>

          <p id="alterar-perfil">
            <Link to="/edit">Editar</Link>
          </p>
          {admins.length > 0 ? (
            <>
              <label id="nom">Nome Empresarial:</label>
              <label id="tel">Telefone:</label>
              <label id="end">Endereço:</label>
              <label id="num">Nº:</label>
              <label id="comp">Complemento:</label>
              <label id="bair">Bairro:</label>
              <label id="cid">Cidade:</label>
              <label>
                {preencherPerfil()}
                </label>
            </>
          ) : (
            "Carregando perfil..."
          )}
        </div>

        <div className="edit-senha">
          <h6>Senha</h6>
          <p id="edit">
            <Link to="/editsenhaadm">Editar</Link>
          </p>

          <label id="senha-alter">Senha:</label>
          <h2>......</h2>

          <span>Deletar Conta</span>
          <div className="button-delet-adm">
            <button>Deletar conta Adm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigConta;
