import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
  AGREGAR_PROYECTO, ELIMINAR_PROYECTO,
  FORMULARIO_PROYECTO, OBTENER_PROYECTOS, PROYECTO_ACTUAL, VALIDAR_FORMULARIO,
} from '../../types';

const ProyectoState = ({ children }) => {
  const proyectos = [
    { id: 1, nombre: 'Tienda virtual' },
    { id: 2, nombre: 'Intranet' },
    { id: 3, nombre: 'Diseño de sitio Web' },
  ];

  const initialState = {
    proyectos: [],
    formulario: false,
    errorFormulario: false,
    proyecto: null,
  };

  // Dispatch para ejecutar acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // Serie de funciones CRUD
  const mostarFormulario = () => {
    console.log('mostrando');
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };
  // Obtener los proyectos
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };
  // Agregar nuevo proyecto
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuid();
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };
  // Validar el fomrulario
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };
  // Seleccionar el proyecto actual
  const proyectoActual = (id) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: id,
    });
  };
  // Eliminar proyecto
  const eliminarProyecto = (id) => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: id,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorFormulario: state.errorFormulario,
        proyecto: state.proyecto,
        mostarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto,
      }}
    >
      {children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
