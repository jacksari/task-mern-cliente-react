import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

function Proyecto({ proyecto }) {
  const { proyectoActual } = useContext(proyectoContext);
  const { nombre, id } = proyecto;
  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => proyectoActual(id)}
      >
        {nombre}
      </button>
    </li>
  );
}

export default Proyecto;
