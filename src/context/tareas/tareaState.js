import React, { useReducer } from 'react';
import TareaContext from './tareaContext';

import TareaReducer from './tareaReducer';
import {
  ACTUALIZAR_TAREA,
  AGREGAR_TAREAS,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  TAREAS_PROYECTO,
  VALIDAR_TAREA,
} from '../../types';

const TareaState = ({ children }) => {
  const initialState = {
    tareas: [
      {
        id: 1, nombre: 'Elegir plataforma', estado: true, proyectoID: 1,
      },
      {
        id: 2, nombre: 'Elegir precios', estado: true, proyectoID: 1,
      },
      {
        id: 3, nombre: 'Elegir logos', estado: true, proyectoID: 1,
      },
      {
        id: 4, nombre: 'Elegir colores', estado: false, proyectoID: 2,
      },
      {
        id: 5, nombre: 'Elegir plataforma de pago', estado: false, proyectoID: 3,
      },
      {
        id: 6, nombre: 'Elegir hosting', estado: true, proyectoID: 3,
      },
    ],
    tareasproyecto: null,
    errorTarea: false,
    tareaSeleccionada: null,
  };

  // Crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  // Crear funciones
  // Obtener tareas de un proyecto
  const obtenerTareas = (id) => {
    console.log('id', id);
    dispatch({
      type: TAREAS_PROYECTO,
      payload: id,
    });
  };
  // Agregar tarea
  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREAS,
      payload: tarea,
    });
  };
  // Valida y muestra el error
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };
  // Eliminar tareas por id
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };
  // Cambia el estado de tarea
  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };
  // Extrae la tarea para editar
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };
  // Edita tarea
  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errorTarea: state.errorTarea,
        tareaSeleccionada: state.tareaSeleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
      }}
    >
      {children}
    </TareaContext.Provider>
  );
};

export default TareaState;
