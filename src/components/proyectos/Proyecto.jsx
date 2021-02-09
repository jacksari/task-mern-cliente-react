import React, { useContext, useEffect, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

function Proyecto({ py }) {
  // State select
  const [select, setSelect] = useState(false);
  const { proyectoActual, proyecto } = useContext(proyectoContext);

  const { obtenerTareas } = useContext(TareaContext);
  const { nombre, id } = py;
  // Funcion para agregar el proyecto actual
  // eslint-disable-next-line no-shadow
  const seleccionarProyecto = (id) => {
    proyectoActual(id); // fijar un proyecto actual
    obtenerTareas(id);
  };
  useEffect(() => {
    // console.log(proyecto);
    if (proyecto != null) {
      console.log(proyecto[0].id);
      if (proyecto[0].id === id) {
        setSelect(true);
      } else {
        setSelect(false);
      }
    }
  }, [proyecto]);

  return (
    <li>
      <button
        type="button"
        className={select ? 'btn btn-blank btn-proyecto-select' : 'btn btn-blank'}
        onClick={() => seleccionarProyecto(id)}
      >
        <i className="fas fa-angle-right" />
        {' '}
        {nombre}
      </button>
    </li>
  );
}

export default Proyecto;
