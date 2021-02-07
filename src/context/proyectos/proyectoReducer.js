import {
  AGREGAR_PROYECTO, ELIMINAR_PROYECTO,
  FORMULARIO_PROYECTO, OBTENER_PROYECTOS, PROYECTO_ACTUAL, VALIDAR_FORMULARIO,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case ELIMINAR_PROYECTO:
      return {
        ...state,
        proyectos: state.proyectos.filter((proyecto) => proyecto.id !== action.payload),
        proyecto: null,
      };
    case PROYECTO_ACTUAL:
      return {
        ...state,
        proyecto: state.proyectos.filter((proyecto) => proyecto.id === action.payload),
      };
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorFormulario: true,
      };
    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formulario: false,
        errorFormulario: false,
      };
    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: !state.formulario,
      };
    default:
      return state;
  }
};
