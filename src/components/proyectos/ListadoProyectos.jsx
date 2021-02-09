import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import alertaContext from '../../context/alertas/alertaContext';

function ListadoProyectos() {
  // Solicitar state del context
  const { proyectos, obtenerProyectos, mensaje } = useContext(proyectoContext);
  const { alerta, mostrarAlerta } = useContext(alertaContext)
  // Obtener proyectos cuando carga el componenete
  useEffect(() => {
    // Si hay un error
    if(mensaje){
      mostrarAlerta(mensaje.msg, mensaje.categoria)
    }
  }, [mensaje]);
  useEffect(() => {
    obtenerProyectos();
  }, []);

  return (
    <>
      {
        proyectos.length === 0 ? (
          <ul className="listado-proyectos">
            <li>Sin proyectos, comienza creando uno</li>
          </ul>
        ) : (
          <ul className="listado-proyectos">
            {
              alerta ? (
                <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
              ) : null
            }
            <TransitionGroup>
              {
                proyectos.map((py) => (
                  <CSSTransition
                    key={py._id}
                    timeout={200}
                    classNames="proyecto"
                  >
                    <Proyecto py={py} />
                  </CSSTransition>
                ))
              }
            </TransitionGroup>
          </ul>
        )
      }
    </>
  );
}

export default ListadoProyectos;
