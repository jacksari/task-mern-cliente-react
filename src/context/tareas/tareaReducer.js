import {
  ACTUALIZAR_TAREA,
  AGREGAR_TAREAS, ELIMINAR_TAREA, ESTADO_TAREA, TAREA_ACTUAL,
  TAREAS_PROYECTO, VALIDAR_TAREA,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case ACTUALIZAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.map(
          (tarea) => (tarea.id === action.payload.id ? action.payload : tarea),
        ),
        tareaSeleccionada: null,
      };
    case TAREA_ACTUAL:
      return {
        ...state,
        tareaSeleccionada: action.payload,
      };
    case ESTADO_TAREA:
      return {
        ...state,
        tareas: state.tareas.map(
          (tarea) => (tarea.id === action.payload.id ? action.payload : tarea),
        ),
      };
    case ELIMINAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
      };
    case VALIDAR_TAREA:
      return {
        ...state,
        errorTarea: true,
      };
    case AGREGAR_TAREAS:
      return {
        ...state,
        tareas: [action.payload, ...state.tareas],
        errorTarea: false,
      };
    case TAREAS_PROYECTO:
      return {
        ...state,
        tareasproyecto: state.tareas.filter((tarea) => tarea.proyectoID === action.payload),
      };
    default:
      return state;
  }
};
