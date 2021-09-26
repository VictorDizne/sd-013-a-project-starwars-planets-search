import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import contextApp from './contextApp';
import searchPlanets from '../services/ApiPlanets';

function Provider({ children }) {
  const stateFilters = { filterByName: { name: '' } };
  const [data, setData] = useState([]); // estados criados para salvar retorno API
  const [filters, setFilters] = useState(stateFilters);

  const FilterName = ({ target: { value } }) => {
    setFilters({ ...stateFilters,
      filters: { ...stateFilters.filters, filterByName: { name: value } } });
  };

  const contextValue = {
    data,
    setData,
    filters,
    setFilters,
  };

  useEffect(() => {
    const GetPlanets = async () => {
      const result = await searchPlanets();
      setData(result);
    };
    GetPlanets();
  }, []); // funcao e um array vazio === didMount,renderiza uma vez

  return (
    <contextApp.Provider value={ contextValue }>
      {children}
    </contextApp.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
