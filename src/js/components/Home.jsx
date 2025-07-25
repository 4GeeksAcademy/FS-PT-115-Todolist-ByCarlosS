import React, { useState } from "react";
import "../../styles/index.css"; // Asegúrate de tener los estilos

const Home = () => {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  const agregarTarea = (e) => {
    if (e.key === "Enter" && tarea.trim() !== "") {
      setLista([...lista, tarea.trim()]);
      setTarea("");
    }
  };

  const eliminarTarea = (index) => {
    const nuevaLista = [...lista];
    nuevaLista.splice(index, 1);
    setLista(nuevaLista);
  };

  return (
    <div className="container">
      <h1 className="Titulo">Lista de Tareas</h1>

      <input
        type="text"
        placeholder="¿Qué necesitas hacer?"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        onKeyDown={agregarTarea}
        className="input"
      />

      <div className="lista">
        {lista.map((item, index) => (
          <div key={index} className="todo-item">
            <div className="text">{item}</div>
            <div className="delete-btn" onClick={() => eliminarTarea(index)}>
              ✖
            </div>
          </div>
        ))}
      </div>

      <div className="footer">
        {lista.length} {lista.length === 1 ? "item" : "items"} left
      </div>
    </div>
  );
};

export default Home;
