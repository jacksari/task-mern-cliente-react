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
        tareasproyecto: state.tareasproyecto.map(
          (tarea) => (tarea._id === action.payload._id ? action.payload : tarea),
        ),
        tareaSeleccionada: null,
      };
    case TAREA_ACTUAL:
      return {
        ...state,
        tareaSeleccionada: action.payload,
      };
    case ELIMINAR_TAREA:
      return {
        ...state,
        tareasproyecto: state.tareasproyecto.filter((tarea) => tarea._id !== action.payload),
      };
    case VALIDAR_TAREA:
      return {
        ...state,
        errorTarea: true,
      };
    case AGREGAR_TAREAS:
      return {
        ...state,
        tareasproyecto: [action.payload, ...state.tareasproyecto],
        errorTarea: false,
      };
    case TAREAS_PROYECTO:
      return {
        ...state,
        tareasproyecto: action.payload,
      };
    default:
      return state;
  }
};
