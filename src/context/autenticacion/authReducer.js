import {
  CERRAR_SESION,
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  OBTENER_USUARIO,
  REGISTRO_ERROR,
  REGISTRO_EXITOSO,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case CERRAR_SESION:
      localStorage.removeItem('token');
      return {
        autenticado: null,
        usuario: null,
        mensaje: null,
        token: null,
      };
    case LOGIN_EXITOSO:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        autenticado: true,
        mensaje: null,
        token: action.payload,
        cargando: false
      };
    case OBTENER_USUARIO:
      return {
        ...state,
        usuario: action.payload,
        autenticado: true,
        cargando: false,
      };
    case LOGIN_ERROR:
    case REGISTRO_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        mensaje: action.payload,
        cargando: false,
      };
    case REGISTRO_EXITOSO:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: null,
        cargando: false,
      };
    default:
      return state;
  }
};
