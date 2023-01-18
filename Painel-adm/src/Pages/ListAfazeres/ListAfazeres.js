import { useState } from "react";
import { IconButton } from "@mui/material";
import { CheckCircle, Delete } from "@mui/icons-material";
import "./ListAfazeres.css";
function ListAfazeres() {
  const dummyData = [
    { id: 1, task: "Repor estoque ", status: false },
    { id: 2, task: "Limpeza toda segunda", status: false },
    { id: 3, task: "Conferir o Caixa", status: false },
  ];

  const [tasks, setTasks] = useState(dummyData);
  const [addInput, setAddInput] = useState("");

  //Add Task
  const addTask = () => {
    if (!addInput) return window.alert("Field is required");

    let id = Date.now();
    let newObj = {
      id: id,
      task: addInput,
      status: false,
    };

    setTasks((prev) => [...prev, newObj]);

    setAddInput("");
  };

  //Delete Task
  const deleteTask = (id) => {
    let newTasks = tasks.filter((item) => item.id !== id);

    setTasks(newTasks);
  };

  //Completed Task
  const completedTask = (id) => {
    let newTasks = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, status: !item.status };
      }

      return item;
    });

    setTasks(newTasks);
  };

  return (
    <div className="Afazeres">
      <div className="inputWrapper">
        <div className="nome-page">
          <h2>Lista de Tarefas</h2>
        </div>

        <div className="inputContainer">
          <input
            onChange={(e) => setAddInput(e.target.value)}
            type="text"
            placeholder="Adicionar tarefas"
            value={addInput}
          />
          <button onClick={addTask}>Add</button>
        </div>
      </div>

      <div className="content">
        {!tasks.length && <div className="noTask">.</div>}
        {tasks
          .sort((a, b) => (a.id < b.id ? 1 : -1))
          .map((item) => {
            return (
              <div key={item.id} className="listItem">
                <p>{item.task}</p>

                <div className="actionBtns">
                  <IconButton
                    onClick={() => completedTask(item.id)}
                    color={item.status ? "success" : "null"}
                  >
                    <CheckCircle />
                  </IconButton>

                  <IconButton color="error" onClick={() => deleteTask(item.id)}>
                    <Delete />
                  </IconButton>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ListAfazeres;
