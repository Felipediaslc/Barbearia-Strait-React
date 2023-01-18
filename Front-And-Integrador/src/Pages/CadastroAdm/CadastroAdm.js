import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CadastroAdm.css";

const CadastroAdm = ({ id = "mod", onClose = () => {}, children }) => {
  const [nomeEmpres, setNomeEmpres] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [ruaAv, setRuaAv] = useState("");
  const [numEnd, setNumEnd] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [senhaAdm, setSenhaAdm] = useState("");
  const navigate = useNavigate();

  async function cadastrarAdministrador(event) {
    event.preventDefault();
    const administrador = {
      nomeEmpres: nomeEmpres,
      cnpj: cnpj,
      telefone: telefone,
      email: email,
      ruaAv: ruaAv,
      numEnd: numEnd,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
      senhaAdm: senhaAdm,
    };
    const responst = await axios.post(
      "http://localhost:3001/adms",
      administrador
    );
    console.log(responst);
    if (responst.status === 200) {
      navigate("/planos");
      toast.success("Assinatura feita com Sucesso!", {
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
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };
  return (
    <form id={id} className="envia" onClick={handleOutsideClick}>
      <div className="container-cadastre">
        <button className="fecha" onClick={onClose} />

        <div className="adm-titulo">
          <h2>Cadastro Empresarial</h2>
        </div>
        <div className="nome-empresar">
          <input
            type="text"
            name="nome-empre"
            placeholder="Nome da empresa"
            value={nomeEmpres}
            onChange={(event) => setNomeEmpres(event.target.value)}
            required
          />
        </div>
        <div className="cnpjs">
          <input
            type="text"
            name="cnpj"
            placeholder="00.000.000/0001-00"
            value={cnpj}
            onChange={(event) => setCnpj(event.target.value)}
            required
          />
        </div>
        <div className="telefone">
          <input
            type="text"
            name="telefone"
            placeholder="Telefone"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
            required
          />
        </div>
        <div className="email">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="endereco">
          <input
            type="text"
            name="endereco"
            placeholder="Rua | Av."
            value={ruaAv}
            onChange={(event) => setRuaAv(event.target.value)}
            required
          />
        </div>
        <div className="numeros">
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
            name="endereco"
            placeholder="Complemento"
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
            placeholder="Cidade"
            value={cidade}
            onChange={(event) => setCidade(event.target.value)}
            required
          />
        </div>
        <div className="adm-senha01">
          <input
            type="text"
            name="senha"
            placeholder="Senha"
            value={senhaAdm}
            onChange={(event) => setSenhaAdm(event.target.value)}
            required
          />
        </div>
        <div className="adm-senha02">
          <input placeholder="Confirmar" type="text" required />
        </div>

        <button
          className="button-cast"
          onClick={(e) => cadastrarAdministrador(e)}
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
};

export default CadastroAdm;
