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
import clienteAxios from '../../config/axios';

const TareaState = ({ children }) => {
  const initialState = {
    tareasproyecto: [],
    errorTarea: false,
    tareaSeleccionada: null,
  };

  // Crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  // Crear funciones
  // Obtener tareas de un proyecto
  const obtenerTareas = async (proyecto) => {
    // console.log('id', proyecto);
    try{
      const res = await clienteAxios.get(`/api/tareas`, {params: { proyecto }})
      // console.log(res.data.tareas);
      dispatch({
        type: TAREAS_PROYECTO,
        payload: res.data.tareas,
      });
    }catch (e) {
      console.log(e.response);
    }
  };
  // Agregar tarea
  const agregarTarea = async (tareaAgregada) => {
    // console.log(tareaAgregada);
    try {
      const res = await clienteAxios.post('/api/tareas', tareaAgregada)
      // console.log(res);
      dispatch({
        type: AGREGAR_TAREAS,
        payload: tareaAgregada,
      });
    }catch (e) {
      console.log(e);
    }
  };
  // Valida y muestra el error
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };
  // Eliminar tareas por id
  const eliminarTarea = async (id, proyecto) => {
    // console.log(proyecto,id);
    try{
      const res = await clienteAxios.delete(`/api/tareas/${id}`, { params: { proyecto } })
      // console.log(res);
      dispatch({
        type: ELIMINAR_TAREA,
        payload: id,
      });
    }catch (e) {
      console.log(e.response);
    }
  };
  // Extrae la tarea para editar
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };
  // Edita tarea
  const actualizarTarea = async (tarea) => {
    try{
      const res = await clienteAxios.put(`/api/tareas/${tarea._id}`,tarea)
      // console.log(res);
      dispatch({
        type: ACTUALIZAR_TAREA,
        payload: res.data.tarea,
      });
    }catch (e) {
      console.log(e.response);
    }
  };

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <TareaContext.Provider
      value={{
        tareasproyecto: state.tareasproyecto,
        errorTarea: state.errorTarea,
        tareaSeleccionada: state.tareaSeleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        guardarTareaActual,
        actualizarTarea,
      }}
    >
      {children}
    </TareaContext.Provider>
  );
};

export default TareaState;
