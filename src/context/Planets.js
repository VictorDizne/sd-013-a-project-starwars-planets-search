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
    Iniciar os estados que serão repassados ao Provider */
  const [raw, setRaw] = useState([]); // Todos os planetas
  const [data, setData] = useState([]); // Planetas filtrados
  const [filters, setFilters] = useState({}); // Filtros

  /* Quando o componente montar, armazenar as informações da API no data */
  const callbackData = () => {
    (async () => {
      const planets = await getPlanetsData();
      setRaw(planets);
      setData(planets);
    })();
  };

  useEffect(callbackData, []);

  /* Aplicar e gerenciar os filtros */
  useEffect(() => {
    const filterByName = Object.prototype.hasOwnProperty.call(filters, 'filterByName');

    if (filterByName) {
      setData(raw.filter(({ name }) => {
        const nameStr = name.toLowerCase();
        const valueStr = filters.filterByName.name.toLowerCase();

        return nameStr.includes(valueStr);
      }));
    }
  }, [raw, filters]);

  /*
    Retornar this.children aninhado dentro do Provider, agora com a
    propriedade 'value' sendo um objeto com as chaves do estado
  */
  const contextValue = { data, filters, setFilters };

  return (
    <Planets.Provider value={ contextValue }>
      { children }
    </Planets.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
