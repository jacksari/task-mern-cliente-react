import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types';

export default (state, action) => {
  switch (action.type) {
    case OCULTAR_ALERTA:
      return {
        ...state,
        alerta: null,
      };
    case MOSTRAR_ALERTA:
      return {
        ...state,
        alerta: action.payload,
      };
    default:
      return state;
  }
};
