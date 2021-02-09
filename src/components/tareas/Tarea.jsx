import React, { useContext } from 'react';
import TareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

function Tarea({ tarea, index }) {
  const {
    eliminarTarea, obtenerTareas, guardarTareaActual, actualizarTarea
  } = useContext(TareaContext);
  const { proyecto } = useContext(proyectoContext);
  const [proyectoActual] = proyecto;
  const { nombre, estado, _id } = tarea;
  // Función que elimina tarea
  // eslint-disable-next-line no-shadow
  const tareaEliminar = (id) => {
    eliminarTarea(id, proyectoActual._id);
    obtenerTareas(proyectoActual._id);
  };
  // Función que modifica el estado de las tareas
    // eslint-disable-next-line no-shadow
  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      // eslint-disable-next-line no-param-reassign
      tarea.estado = false;
    } else {
      // eslint-disable-next-line no-param-reassign
      tarea.estado = true;
    }
    actualizarTarea(tarea);
  };
  // Agrega una tarea actual cuando el usuario desea editar
  const seleccionarTarea = (tareaActual) => {
    guardarTareaActual(tareaActual);
  };
  return (
    <li className="tarea sombra">
      <p className="num-tarea">
        <span className="index"><i className="fas fa-thumbtack"></i></span>
        <span className="title">{nombre}</span>
      </p>
      <div className="estado">
        {
                estado ? (
                  <button
                    type="button"
                    className="completo"
                    onClick={() => cambiarEstado(tarea)}
                  >
                    Completo
                  </button>
                ) : (
                  <button
                    type="button"
                    className="incompleto"
                    onClick={() => cambiarEstado((tarea))}
                  >
                    Incompleto
                  </button>
                )
            }
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => seleccionarTarea(tarea)}
        >
          <i className="far fa-edit" />
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(_id)}
        >
          <i className="far fa-trash-alt" />
        </button>
      </div>
    </li>
  );
}

export default Tarea;
