import React, { useState } from 'react';
import { toast } from 'react-toastify';

import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Cadastros.css';


const Cadastro = ( ) => {
  const [nomeCompleto, setNomeCompleto] = useState("")
  const [telefone, setTelefone] = useState("")
  const [cpfUser, setCpfUser] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const navigate = useNavigate();

 async function cadastrarUsuario (event) {
    
    event.preventDefault()
    const usuario = {
      nomeCompleto:nomeCompleto,
      telefone: telefone,
      cpfUser: cpfUser,
      email: email,
      senha:senha
    }
    const retorno = await axios.post('http://localhost:3001/usuarios', usuario)
    console.log(retorno)
    if (retorno.status === 200) {
      navigate("/login");
      toast.success("Usuário criado com Sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
      
    } 
}

const notify = () => toast("Cadastro realizado !");

   

  return (
   
<form className='modal ' >
<div className='modal-content'>
<div className='modal-header'>
</div>
<div className='modal-body'>
<p>Crie sua Conta</p>
<div className="nome">
<input  type="text"
        name="nomeCompleto" 
        placeholder="Nome completo" 
        value={nomeCompleto} 
        onChange={(event) => setNomeCompleto(event.target.value)} 
        required />            
</div>
<div className="celular">                 
<input type="tel"
       name="telefone"
       placeholder="Celular"
       value={telefone} 
       onChange={(event) => setTelefone(event.target.value)} 
       required />
</div>
<div className="cpf">              
<input  type="text"
        name="cpfUser"
        placeholder=" CPF"  
        value={cpfUser}
        onChange={(event) => setCpfUser(event.target.value)} 
       required />
</div>
<div className="email-login">
<input  type="email" 
        name="email"
        placeholder="E-mail" 
        value={email}
        onChange={(event) => setEmail(event.target.value)} 
        required />      
</div>
<div className="senha01">                 
<input  type="text"
        name="senha"
        placeholder="Senha"
        value={senha}
        onChange={(event) => setSenha(event.target.value)} 
        required />
</div>
<div className="senha02">
<input placeholder="Confirmar"  type="text" required />            
</div>


<button className='ui-button' onClick={(e) => cadastrarUsuario(e)}>Cadastrar</button>
 </div>
</div>  
</form>

  );
}

export default Cadastro;