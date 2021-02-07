import React, { useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

function NuevoProyecto() {
  // Obtener el state del formulario
  const {
    formulario, mostarFormulario, agregarProyecto, mostrarError, errorFormulario,
  } = useContext(proyectoContext);
  const [proyecto, setProyecto] = useState({
    nombre: '',
  });
  const { nombre } = proyecto;
  // Lee contenido del input
  const onChangeProyecto = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };
  // Cuando se envia el proyecyo
  const onSubmitProyecto = (e) => {
    e.preventDefault();
    // Validar proyecto
    if (nombre === '') {
      mostrarError();
      return;
    }
    // Agregar al state
    agregarProyecto(proyecto);

    // Reinicar el form
    setProyecto({
      nombre: '',
    });
  };

  return (
    <>
      <button
        onClick={() => mostarFormulario()}
        type="button"
        className="btn btn-block btn-primario"
      >
        { !formulario ? 'Nuevo Proyecto' : 'Ocultar formulario' }
      </button>
      {
          formulario ? (
            <form
              className="formulario-nuevo-proyecto"
              onSubmit={onSubmitProyecto}
            >
              <input
                type="text"
                className="input-text"
                placeholder="Nombre de proyecto"
                name="nombre"
                onChange={onChangeProyecto}
                value={nombre}
              />
              <input
                type="submit"
                className="btn btn-block btn-primario"
                value="Agregar proyecto"
              />

            </form>
          ) : (null)
      }
      {
        errorFormulario ? (
          <p className="mensaje error">El nombre es obligatorio</p>
        ) : null
      }
    </>
  );
}

export default NuevoProyecto;
