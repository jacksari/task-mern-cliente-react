import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import alertaContext from '../../context/alertas/alertaContext';

function Register() {
  // Extraer valores del context alerta
  const { alerta, mostrarAlerta } = useContext(alertaContext);
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: '',
  });
  const {
    email, password, nombre, confirmar,
  } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacios
    if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '') {
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      return;
    }
    // Passsword mínimo 6 caracteres
    if (password.length < 6) {
      mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
      return;
    }
    // Pasarlo al action
    if (password !== confirmar) {
      mostrarAlerta('El passwords deben ser iguales', 'alerta-error');
    }
  };
  return (
    <div className="form-usuario">
      {
        alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null
      }
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una cuenta</h1>
        <form
          onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              onChange={onChange}
              value={nombre}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu email"
              onChange={onChange}
              value={email}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu password"
              onChange={onChange}
              value={password}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Tu password"
              onChange={onChange}
              value={confirmar}
            />
          </div>
          <div className="campo-form">
            <input type="submit" value="Iniciar Sesión" className="btn btn-primario btn-block" />
          </div>
        </form>
        <Link to="/iniciar-sesion" className="enlace-cuenta">Obtener cuenta</Link>
      </div>
    </div>
  );
}

export default Register;
