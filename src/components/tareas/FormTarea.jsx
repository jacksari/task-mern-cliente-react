import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

function FormTarea() {
  const { proyecto } = useContext(proyectoContext);

  const {
    agregarTarea,
    validarTarea,
    errorTarea,
    obtenerTareas,
    tareaSeleccionada,
    actualizarTarea,
  } = useContext(TareaContext);

  // State del formulario
  const [tarea, setTarea] = useState({
    nombre: '',
  });
  const { nombre } = tarea;
  // Effect que detecta cambios en el fomrulario para editar tarea
  useEffect(() => {
    if (tareaSeleccionada !== null) {
      setTarea(tareaSeleccionada);
    } else {
      setTarea({
        nombre: '',
      });
    }
  }, [tareaSeleccionada]);
  // Leer valores del formulario
  const handleChange = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };
  // Validar si no hay proyecto
  if (!proyecto) {
    return null;
  }
  // Destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;
  const onSubmit = (e) => {
    e.preventDefault();
    // Validar
    if (nombre.trim() === '') {
      validarTarea();
      return;
    }
    // revisar si es edición o agregar
    if (tareaSeleccionada === null) {
      // Tarea nueva
      // agregar la nueva tarea al state de tareas
      tarea.proyectoID = proyectoActual.id;
      tarea.estado = false;
      agregarTarea(tarea);
    } else {
      // Actualizar tarea existente
      actualizarTarea(tarea);
    }

    // Obtener tareas
    obtenerTareas(proyectoActual.id);

    // reiniciar al form
    setTarea({
      nombre: '',
    });
  };

  return (
    <div className="formulario">
      <form
        onSubmit={onSubmit}
      >
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre tarea"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <button type="submit" className="btn btn-primario btn-submit btn-block">
            {tareaSeleccionada ? 'Editar tarea' : 'Agregar tarea'}
          </button>
        </div>
      </form>
      {
        errorTarea ? (
          <p className="mensaje error">El nombre de la tarea es obligatorio</p>
        ) : null
      }
    </div>
  );
}

export default FormTarea;
