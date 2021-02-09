import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
  AGREGAR_PROYECTO, ELIMINAR_PROYECTO,
  FORMULARIO_PROYECTO, OBTENER_PROYECTOS, PROYECTO_ACTUAL, PROYECTO_ERROR, VALIDAR_FORMULARIO,
} from '../../types';
import clienteAxios from '../../config/axios';

const ProyectoState = ({ children }) => {


  const initialState = {
    proyectos: [],
    formulario: false,
    errorFormulario: false,
    proyecto: null,
    mensaje:null
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
  const obtenerProyectos = async () => {
    try{
      const res = await clienteAxios.get('/api/proyectos')
      // console.log(res.data);
      dispatch({
        type: OBTENER_PROYECTOS,
        payload: res.data.proyectos,
      });
    }catch (e) {
      // Alerta en caso suceda un error
      console.log(e.response);
      const alerta = {
        msg: e.response.data.msg,
        categoria: 'alerta-error'
      }
      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta
      })
    }
  };
  // Agregar nuevo proyecto
  const agregarProyecto = async (proyecto) => {
    try {
      const res = await clienteAxios.post('/api/proyectos',proyecto)
      console.log(res);
      dispatch({
        type: AGREGAR_PROYECTO,
        payload: res.data.proyecto,
      });
    }catch (e) {
      console.log(e.response);
      const alerta = {
        msg: e.response.data.msg,
        categoria: 'alerta-error'
      }
      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta
      })
    }

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
  const eliminarProyecto = async (id) => {
    try{
      const res = await clienteAxios.delete(`/api/proyectos/${id}`)
      // console.log(res);
      dispatch({
        type: ELIMINAR_PROYECTO,
        payload: id,
      });
    }catch (e) {
      console.log(e.response.data.msg);
      const alerta = {
        msg: e.response.data.msg,
        categoria: 'alerta-error'
      }
      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta
      })
    }
  };

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorFormulario: state.errorFormulario,
        proyecto: state.proyecto,
        mensaje: state.mensaje,
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
