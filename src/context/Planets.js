// Context API
import React, { createContext, useState, useEffect } from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Services
import getPlanetsData from '../services/planetsAPI';

// Context
export const Planets = createContext();

/*= ====================================================== */
export default function PlanetsProvider({ children }) {
  /*
    Setar um estado que será repassado ao Provider */
  const [data, setData] = useState([]);

  /*
    Quando o componente montar, esperar e setar as informações da API */
  const callback = () => {
    (async () => {
      const planets = await getPlanetsData();
      setData(planets);
    })();
  };

  useEffect(callback, []);

  /*
    Retornar this.children aninhado dentro do Provider, agora com a
    propriedade 'value' sendo um objeto com as chaves do estado */
  return (
    <Planets.Provider value={ { data, setData } }>
      { children }
    </Planets.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
