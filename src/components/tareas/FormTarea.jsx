import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

function FormTarea() {
  const { proyecto } = useContext(proyectoContext);
  if (!proyecto) {
    return null;
  }
  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input type="text" className="input-text" placeholder="Nombre tarea" name="nombre" />
        </div>
        <div className="contenedor-input">
          <input type="submit" className="btn btn-primario btn-submit btn-block" value="Agregar tarea" />
        </div>
      </form>
    </div>
  );
}

export default FormTarea;
