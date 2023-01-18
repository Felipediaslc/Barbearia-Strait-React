import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ListAtendimento.css";

const ListAtendimento = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    recuperarUsuarios();
  }, []);

  const recuperarUsuarios = async () => {
    const users = await axios.get("http://localhost:3001/usuarios");
    console.log(users.data);
    setUsuarios(users.data);
  };

  const preencheTabelaUsuario = () => {
    return usuarios.map((usuario) => (
      <tr key={usuario.id}>
        <td>{usuario.nomeCompleto}</td>
        {usuario.agendamentos.map((agendamento) => (
          <>
            <td>{agendamento.servico}</td>
            <td>{agendamento.funcionario}</td>
            <td>{agendamento.tempo}</td>
          </>
        ))}
      </tr>
    ));
  };

  return (
    <div className="caixa">
      <h1>Lista de Atendimento</h1>
      {usuarios.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Serviço</th>
              <th>Funcionario</th>
              <th>Horário</th>
            </tr>
          </thead>
          <tbody>{preencheTabelaUsuario()}</tbody>
        </table>
      ) : (
        "Carregando lista de atendimento..."
      )}
    </div>
  );
};

export default ListAtendimento;
