import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../../context/autenticacion/authContext';
import alertaContext from '../../context/alertas/alertaContext';

function Login({ history }) {
  // Extraer valores del context alerta
  const { alerta, mostrarAlerta } = useContext(alertaContext);

  const { iniciarSesion, mensaje, autenticado, usuarioAutenticado } = useContext(authContext);
  const [usuario, setUsuario] = useState({
    email: '',
    password: '',
  });
  const { email, password } = usuario;
  useEffect(() => {
    if(localStorage.getItem('token')){
      usuarioAutenticado()
    }
  }, []);


  useEffect(() => {
    if (autenticado) {
      history.push('/proyectos');
    }
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [mensaje, autenticado, history]);

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacios
    if (email.trim() === '' || password.trim() === '') {
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      return;
    }

    // Pasarlo al action
    iniciarSesion({ email, password });
  };

  return (
    <div className="form-usuario">
      {
        alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null
      }
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
