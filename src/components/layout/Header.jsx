import React, { useContext, useEffect } from 'react';
import authContext from '../../context/autenticacion/authContext';

function Header() {
  const { usuario, cerrarSesion, usuarioAutenticado } = useContext(authContext);
  useEffect(() => {
    usuarioAutenticado();
  }, []);
  return (
    <header className="app-header">
      {
            usuario ? (
              <p className="nombre-usuario">
                Hola
                {' '}
                <span>{usuario.nombre}</span>
              </p>
            ) : null
        }
      <nav className="nav-principal">
        <button
          type="button"
          className="btn btn-blank cerrar-sesion"
          onClick={() => cerrarSesion()}
        >
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
}

export default Header;
