import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

function ListadoTareas() {
  const { proyecto, eliminarProyecto } = useContext(proyectoContext);
  const { tareasproyecto } = useContext(TareaContext);
  // Si no hay proyecto seleccionado
  if (!proyecto) {
    return (
      <h2>Selecciona un proyecto</h2>
    );
  }
  const [proyectoActual] = proyecto;
  // console.log(proyectoActual);

  return (
    <>
      <h2>
        Proyecto:
        {' '}
        { proyectoActual.nombre }
      </h2>
      <ul className="listado-tareas">
        {
            tareasproyecto.length === 0 ? (
              <li className="tarea">No hay tareas</li>
            ) : (
              <TransitionGroup>
                {tareasproyecto.map((tarea, index) => (
                  <CSSTransition
                      /* eslint-disable-next-line react/no-array-index-key */
                    key={index}
                    timeout={200}
                    classNames="tarea"
                  >
                    <Tarea tarea={tarea} />
                  </CSSTransition>
                ))}
              </TransitionGroup>
            )
                }
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => eliminarProyecto(proyectoActual._id)}
      >
        Eliminar proyecto &times;
      </button>
    </>
  );
}

export default ListadoTareas;
