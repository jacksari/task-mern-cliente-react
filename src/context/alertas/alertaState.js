import React, { useReducer } from 'react';

import alertaReducer from './alertaReducer';
import alertaContext from './alertaContext';
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types';

const AlertaState = ({ children }) => {
  const initialstate = {
    alerta: null,
  };

  const [state, dispatch] = useReducer(alertaReducer, initialstate);

  // funciones
  const mostrarAlerta = (msg, categoria) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: {
        msg,
        categoria,
      },
    });
    setTimeout(() => {
      dispatch({
        type: OCULTAR_ALERTA,
      });
    }, 5000);
  };

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <alertaContext.Provider
      value={{
        alerta: state.alerta,
        mostrarAlerta,
      }}
    >
      {children}
    </alertaContext.Provider>
  );
};

export default AlertaState;
