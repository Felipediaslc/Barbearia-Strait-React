import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../Agenda.css";

const Agendamento = (props) => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadClients = async () => {
      try {
        setLoading(true);
        const responded = await axios.get("http://localhost:3001/agendamentos");
        setClients(responded.data);
      } catch (e) {
        console.log(e);
        toast.success("Falha ao buscar os dados do Cliente", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } finally {
        setLoading(false);
      }
    };
    loadClients();
  }, []);

  return (
    <div className="retorno-list">
      {loading && <p>Carregando dados ...</p>}
      <ul>
        {clients.map((client) => (
          <li id={client.id}>{" "}Data: {client.data}<br /> Horario: {client.tempo}<br />Serviço: {client.servico}<br />Funcionário: {client.funcionario}<br />Forma de Pagamento: {client.formPague}</li>
        ))}
      </ul>
    </div>
  );
};

export default Agendamento;
