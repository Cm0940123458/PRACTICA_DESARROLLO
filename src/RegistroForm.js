import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistroForm = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [errores, setErrores] = useState({});
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const validarFormulario = () => {
    const nuevosErrores = {};
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    }
    if (!correo.trim()) {
      nuevosErrores.correo = 'El correo es obligatorio.';
    } else if (!correoRegex.test(correo)) {
      nuevosErrores.correo = 'Por favor, ingresa un correo válido.';
    }
    if (password.length < 8) {
      nuevosErrores.password = 'La contraseña debe tener al menos 8 caracteres.';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validarFormulario()) {
      setRegistroExitoso(true);
      setNombre('');
      setCorreo('');
      setPassword('');
      setTimeout(() => setRegistroExitoso(false), 3000);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <main className="form-card p-4">
        <h1 className="text-center">Registro de Usuario</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre:</label>
            <input
              type="text"
              className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
              id="nombre"
              name="nombre"
              placeholder="Ingresa tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo:</label>
            <input
              type="email"
              className={`form-control ${errores.correo ? 'is-invalid' : ''}`}
              id="correo"
              name="correo"
              placeholder="ejemplo@correo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            {errores.correo && <div className="invalid-feedback">{errores.correo}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña:</label>
            <input
              type="password"
              className={`form-control ${errores.password ? 'is-invalid' : ''}`}
              id="password"
              name="password"
              placeholder="Mínimo 8 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errores.password && <div className="invalid-feedback">{errores.password}</div>}
          </div>
          
          {registroExitoso && (
            <div className="alert alert-success text-center mt-3" role="alert">
              ✅ Registro exitoso.
            </div>
          )}

          <button type="submit" className="btn btn-primary mt-3">Registrarse</button>
        </form>
      </main>
    </div>
  );
};

export default RegistroForm;