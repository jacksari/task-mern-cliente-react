import React from 'react';

function Header() {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola
        <span> Jack Sari</span>
      </p>
      <nav className="nav-principal">
        <a href="#">Cerrar sesión</a>
      </nav>
    </header>
  );
}

export default Header;
