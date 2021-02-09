import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import {
  CERRAR_SESION,
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  OBTENER_USUARIO,
  REGISTRO_ERROR,
  REGISTRO_EXITOSO,
} from '../../types';
import clienteAxios from '../../config/axios';
import authToken from '../../config/authToken';

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: true,
  };
    // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Retorna el usuario autenticado
  const usuarioAutenticado = async () => {
    console.log('autenticado');
    const token = localStorage.getItem('token');
    if (token) {
      // Función para enviar el token por heders
      authToken(token);
    }
    try {
      const res = await clienteAxios.get('api/auth');
      // console.log(res.data);
      dispatch({
        type: OBTENER_USUARIO,
        payload: res.data.usuario,
      });
    } catch (e) {
      // console.log(e);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };
  const registrarUsuario = async (datos) => {
    try {
      const res = await clienteAxios.post('/api/usuarios', datos);
      // console.log(res);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: res.data,
      });
      // Obtener el usuario
      usuarioAutenticado();
    } catch (e) {
      console.log(e);
      const alerta = {
        msg: e.response.data.msg,
        categoria: 'alerta-error',
      };
      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta,
      });
    }
  };
  // Cuando el usuario inicia ssión
  const iniciarSesion = async (datos) => {
    try {
      const res = await clienteAxios.post('/api/auth', datos);
      console.log(res.data.token);
      dispatch({
        type: LOGIN_EXITOSO,
        payload: res.data.token,
      });
      // Usuario autenticado
      usuarioAutenticado();
    } catch (e) {
      console.log(e.response);

      const alert = {};

      if (e.response.data.errores) {
        alert.msg = e.response.data.errores[0].msg;
      } else {
        alert.msg = e.response.data.msg;
      }
      alert.categoria = 'alerta-error';
      dispatch({
        type: LOGIN_ERROR,
        payload: alert,
      });
    }
  };
  // Cerrar sesión
  const cerrarSesion = () => {
    localStorage.removeItem('token');
    dispatch({
      type: CERRAR_SESION,
    });
    setTimeout(()=>{
      console.log('cerrando');
    },1000)
  };

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        cargando: state.cargando,
        registrarUsuario,
        usuarioAutenticado,
        iniciarSesion,
        cerrarSesion,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
