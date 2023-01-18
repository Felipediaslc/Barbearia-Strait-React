import React, { useState } from "react";
import { toast } from "react-toastify";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CadastroFuncion.css";

const CadastroFuncion = ({ id = "funcion", onClose = () => {}, children }) => {
  const [nomeFun, setNomeFun] = useState("");
  const [telefoneFun, setTelefoneFun] = useState("");
  const [cpfFun, setCpfFun] = useState("");
  const [ruaAv, setRuaAv] = useState("");
  const [numEnd, setNumEnd] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const navigate = useNavigate();

  async function cadastrarFuncionario(event) {
    event.preventDefault();
    const funcionario = {
      nomeFun: nomeFun,
      telefoneFun: telefoneFun,
      cpfFun: cpfFun,
      ruaAv: ruaAv,
      numEnd: numEnd,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
    };
    const getFun = await axios.post(
      "http://localhost:3001/funcionarios",
      funcionario
    );
    console.log(getFun);
    if (getFun.status === 200) {
      navigate("/listarusuarios");
      toast.success("Funcionário cadastrado com Sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <form id={id} className="cadastro-funcion ">
      <div className="fucion-content">
        <div className="funcion-body">
          <p>Cadastrar Funcionário</p>
          <div className="nome">
            <input
              type="text"
              name="nomeCompleto"
              placeholder="Nome completo"
              value={nomeFun}
              onChange={(event) => setNomeFun(event.target.value)}
              required
            />
          </div>
          <div className="celular">
            <input
              type="tel"
              name="telefone"
              placeholder="Celular"
              value={telefoneFun}
              onChange={(event) => setTelefoneFun(event.target.value)}
              required
            />
          </div>
          <div className="cpf">
            <input
              type="text"
              name="cpfFun"
              placeholder=" CPF"
              value={cpfFun}
              onChange={(event) => setCpfFun(event.target.value)}
              required
            />
          </div>

          <div className="av-rua">
            <input
              type="text"
              name="av-rua"
              placeholder="Av./Rua"
              value={ruaAv}
              onChange={(event) => setRuaAv(event.target.value)}
              required
            />
          </div>

          <div className="nun-end">
            <input
              type="text"
              name="numero"
              placeholder="Nº"
              value={numEnd}
              onChange={(event) => setNumEnd(event.target.value)}
              required
            />
          </div>
          <div className="complemento">
            <input
              type="text"
              name="complemento"
              placeholder=" Complemento"
              value={complemento}
              onChange={(event) => setComplemento(event.target.value)}
              required
            />
          </div>
          <div className="bairro">
            <input
              type="text"
              name="bairro"
              placeholder="Bairro"
              value={bairro}
              onChange={(event) => setBairro(event.target.value)}
              required
            />
          </div>
          <div className="cidade">
            <input
              type="text"
              name="cidade"
              placeholder=" Cidade"
              value={cidade}
              onChange={(event) => setCidade(event.target.value)}
              required
            />
          </div>
          {/*
 

<UIButton >Cadastrar</UIButton>
*/}
          <button
            className="button-funcionlog"
            onClick={(e) => cadastrarFuncionario(e)}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </form>
  );
};

export default CadastroFuncion;
