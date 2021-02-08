import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [usuario, setUsuario] = useState({
    email: '',
    password: '',
  });
  const { email, password } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacios

    // Confirmar si los 2 contraseñas son iguuales

    // Pasarlo al action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form
          action=""
          onSubmit={onSubmit}
        >
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
            <input type="submit" value="Iniciar Sesión" className="btn btn-primario btn-block" />
          </div>
        </form>
        <Link to="/registro" className="enlace-cuenta">Obtener cuenta</Link>
      </div>
    </div>
  );
}

export default Login;
