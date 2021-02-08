import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

function Proyecto({ proyecto }) {
  const { proyectoActual } = useContext(proyectoContext);
  const { obtenerTareas } = useContext(TareaContext);
  const { nombre, id } = proyecto;
  // Funcion para agregar el proyecto actual
  // eslint-disable-next-line no-shadow
  const seleccionarProyecto = (id) => {
    proyectoActual(id); // fijar un proyecto actual
    obtenerTareas(id);
  };
  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(id)}
      >
        {nombre}
      </button>
    </li>
  );
}

export default Proyecto;
