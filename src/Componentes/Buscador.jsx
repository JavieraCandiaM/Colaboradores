/* eslint-disable react/prop-types */
import { useState } from "react";

const Buscador = ({ colaboradores, setColaboradores }) => {
  const [busqueda, setBusqueda] = useState("");
  const [colaboradoresOriginal] = useState([...colaboradores]);

  const handleBuscar = (e) => {
    const term = e.target.value.toLowerCase();
    setBusqueda(term);
    const colaboradoresFiltrados = colaboradoresOriginal.filter((colaborador) =>
      Object.values(colaborador).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(term)
      )
    );

    setColaboradores(colaboradoresFiltrados);
  };

  const handleInputChange = (e) => {
    const term = e.target.value.toLowerCase();
    setBusqueda(term);

    if (term === "") {
      setColaboradores(colaboradoresOriginal);
    } else {
      handleBuscar(e);
    }
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar colaborador..."
        value={busqueda}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Buscador;
