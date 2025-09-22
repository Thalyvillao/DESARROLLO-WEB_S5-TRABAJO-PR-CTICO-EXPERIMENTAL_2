import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [errores, setErrores] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = {};

    if (!nombre) nuevosErrores.nombre = 'El nombre es obligatorio';
    if (!correo.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) nuevosErrores.correo = 'Correo inválido';
    if (password.length < 8) nuevosErrores.password = 'La contraseña debe tener 8+ caracteres';

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      alert('Formulario enviado');
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          {errores.nombre && <div className="text-danger">{errores.nombre}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input type="email" className="form-control" value={correo} onChange={(e) => setCorreo(e.target.value)} />
          {errores.correo && <div className="text-danger">{errores.correo}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errores.password && <div className="text-danger">{errores.password}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
