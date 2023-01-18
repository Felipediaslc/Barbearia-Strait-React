import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import Modal from "../Modal/Modal";
import "./Login.css";

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const UserLogin = async () => {
    if (!email && !senha) {
      toast.success("Por favor preencha correto", {
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

    const retorn = await axios.post("http://localhost:3001/usuarios/login", { email,senha });
    if (retorn.data && retorn.status === 200) {
      localStorage.setItem("usuario", JSON.stringify(retorn.data));
      navigate("/agenda");
    }
  };

  const logout =  () =>{
    console.log("logout");
    localStorage.removeItem("usuario");

    navigate("/login");
   };

  return (
    <form className="modal01 ">
      <div className="modal01-content">
        <div className="modal01-header"></div>
        <div className="modal01-body">
          <p className="crie-conta">Login</p>

          <div className="nome01">
            <input type="text"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             />
          </div>
          <div className="senha03">
            <input
            placeholder="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
             />
          </div>
          <div className="label" >
            <label onClick={() => setIsModalVisible(true)}>
              Esqueci a senha
            </label>
            {isModalVisible ? (
              <Modal onClose={() => setIsModalVisible(false)} />
            ) : null}
          </div>
       

          <button type="button"  className="ui-button-login" onClick={UserLogin}>Entrar</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
