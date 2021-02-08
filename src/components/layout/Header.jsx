import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola
        <span> Jack Sari</span>
      </p>
      <nav className="nav-principal">
        <Link to="/">Cerrar Sesión</Link>
      </nav>
    </header>
  );
}

export default Header;
