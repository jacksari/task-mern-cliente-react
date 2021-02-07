import React, { useContext, useEffect } from 'react';
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
            {
                proyectos.map((proyecto) => (
                  <Proyecto key={proyecto.id} proyecto={proyecto} />
                ))
              }
          </ul>
        )
      }
    </>
  );
}

export default ListadoProyectos;
