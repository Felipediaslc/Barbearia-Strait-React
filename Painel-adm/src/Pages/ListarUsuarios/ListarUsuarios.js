import React, { useState, useEffect } from "react";
import "./ListarUsuarios.css";

const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    recuperarUsuarios();
  }, []);

  const recuperarUsuarios = async () => {
    const users = await fetch("http://localhost:3001/usuarios");
    const data = await users.json();

    setUsuarios(data);
  };

  const preencheTabelaUsuario = () => {
    return usuarios.map((usuario) => (
      <tr>
        <td>{usuario.nomeCompleto}</td>
        <td>{usuario.telefone}</td>
        <td>{usuario.email}</td>
      </tr>
    ));
  };
  return (
    <div className="get-user">
      <div className="list-usuarios">
        <h2 id="usu">Usuários</h2>
        {usuarios.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>{preencheTabelaUsuario()}</tbody>
          </table>
        ) : (
          "Carregando usuários..."
        )}
      </div>
    </div>
  );
};

export default ListarUsuarios;
