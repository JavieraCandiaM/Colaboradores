import React, { useState } from "react";
import Listado from "./Componentes/Listado";
import Formulario from "./Componentes/Formulario";
import Alert from "./Componentes/Alert";
import Buscador from "./Componentes/Buscador";
import { BaseColaboradores } from "./BasecColaboradores";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState([]);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [tipoAlerta, setTipoAlerta] = useState("");

  const agregarColaborador = (nuevoColaborador) => {
    if (Object.values(nuevoColaborador).every((val) => val !== "")) {
      setColaboradores([...colaboradores, nuevoColaborador]);
      setMensajeAlerta("Colaborador agregado exitosamente.");
      setTipoAlerta("success");
    } else {
      setMensajeAlerta("Por favor completa todos los campos.");
      setTipoAlerta("danger");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Formulario onAgregarColaborador={agregarColaborador} />
          <Alert mensaje={mensajeAlerta} tipo={tipoAlerta} />
          <Buscador
            colaboradores={colaboradores}
            setColaboradores={setColaboradores}
          />
        </div>
        <div className="col-md-6">
          <Listado colaboradores={colaboradores} />
        </div>
      </div>
    </div>
  );
};

export default App;
