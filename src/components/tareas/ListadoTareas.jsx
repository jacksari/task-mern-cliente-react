import React, { useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

function ListadoTareas() {
  const { proyecto, eliminarProyecto } = useContext(proyectoContext);
  // Si no hay proyecto seleccionado
  if (!proyecto) {
    return (
      <h2>Selecciona un proyecto</h2>
    );
  }
  const [proyectoActual] = proyecto;
  console.log(proyectoActual);

  const tareas = [
    { nombre: 'Elegir plataforma', estado: true },
    { nombre: 'Elegir colores', estado: false },
    { nombre: 'Elegir plataforma de pago', estado: false },
    { nombre: 'Elegir hosting', estado: true },
  ];
  return (
    <>
      <h2>
        Proyecto:
        {' '}
        { proyectoActual.nombre }
      </h2>
      <ul className="listado-tareas">
        {
                    tareas.length === 0 ? (
                      <li className="tarea">No hay tareas</li>
                    ) : (
                      tareas.map((tarea, index) => (
                        <Tarea key={index} tarea={tarea} />
                      ))
                    )
                }
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => eliminarProyecto(proyectoActual.id)}
      >
        Eliminar proyecto &times;
      </button>
    </>
  );
}

export default ListadoTareas;
