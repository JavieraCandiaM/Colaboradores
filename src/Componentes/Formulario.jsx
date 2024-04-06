import React, { useState } from 'react';

const Formulario = ({ onAgregarColaborador }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setNuevoColaborador(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAgregarColaborador(nuevoColaborador);
    setNuevoColaborador({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: ''
    });
  };

  return (
    <div>
      <h2>Agregar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input type="text" className="form-control" id="nombre" name="nombre" value={nuevoColaborador.nombre} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo:</label>
          <input type="email" className="form-control" id="correo" name="correo" value={nuevoColaborador.correo} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label">Edad:</label>
          <input type="number" className="form-control" id="edad" name="edad" value={nuevoColaborador.edad} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="cargo" className="form-label">Cargo:</label>
          <input type="text" className="form-control" id="cargo" name="cargo" value={nuevoColaborador.cargo} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono:</label>
          <input type="text" className="form-control" id="telefono" name="telefono" value={nuevoColaborador.telefono} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">Agregar</button>
      </form>
    </div>
  );
}

export default Formulario;



