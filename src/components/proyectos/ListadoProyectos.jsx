import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

function ListadoProyectos() {
  // Solicitar state del context
  const { proyectos, obtenerProyectos } = useContext(proyectoContext);
  // Obtener proyectos cuando carga el componenete
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
            <TransitionGroup>
              {
                proyectos.map((proyecto) => (
                  <CSSTransition
                    key={proyecto.id}
                    timeout={200}
                    classNames="proyecto"
                  >
                    <Proyecto proyecto={proyecto} />
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
