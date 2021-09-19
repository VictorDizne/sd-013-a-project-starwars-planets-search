// Context API
import React, { createContext, useState, useEffect, useCallback } from 'react';

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
  const [filters, setFilters] = useState({
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '0',
      },
    ],
  }); // Filtros

  /* Quando o componente montar, armazenar as informações da API no data */
  const callbackData = () => {
    (async () => {
      const planets = await getPlanetsData();
      setRaw(planets);
      setData(planets);
    })();
  };

  useEffect(callbackData, []);

  /* Aplicar o filtro de nome */
  const applyNameFilter = useCallback(() => {
    const filterByName = Object.prototype.hasOwnProperty.call(filters, 'filterByName');
    if (filterByName) {
      setData(raw.filter(({ name }) => {
        const nameStr = name.toLowerCase();
        const valueStr = filters.filterByName.name.toLowerCase();

        return nameStr.includes(valueStr);
      }));
    }
  }, [raw, filters]);

  useEffect(() => {
    applyNameFilter();
  }, [applyNameFilter]);

  /* Aplicar o filtro de comparação */
  const applyCompareFilter = () => {
    const filterByNumericValues = Object.prototype.hasOwnProperty.call(
      filters,
      'filterByNumericValues',
    );

    if (filterByNumericValues) {
      const { column, comparison, value } = filters.filterByNumericValues[0];

      const comparators = {
        'maior que': (a, b) => parseInt(a, 0) > parseInt(b, 0),
        'menor que': (a, b) => parseInt(a, 0) < parseInt(b, 0),
        'igual a': (a, b) => a === b,
      };

      setData(raw.filter((planet) => {
        const boolean = comparators[comparison](planet[column], value);
        return boolean;
      }));
    }
  };

  /*
    Retornar this.children aninhado dentro do Provider, agora com a
    propriedade 'value' sendo um objeto com as chaves do estado
  */
  const contextValue = { data, filters, setFilters, applyCompareFilter };

  return (
    <Planets.Provider value={ contextValue }>
      { children }
    </Planets.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
