import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import contextApp from './contextApp';
import searchPlanets from '../services/ApiPlanets';

function Provider({ children }) {
  const [data, setData] = useState([]); // estados criados para salvar retorno API

  const [dataError, setDataError] = useState(false);

  const filterInitial = {
    filterByName: { name: '' },
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
  };

  const [filters, setFilters] = useState(filterInitial);

  const filterHandle = ({ target: { value } }) => {
    setFilters((prevState) => ({
      ...prevState,
      filterByName: { name: value },
    }));
  };

  const contextValue = {
    dataError,
    setDataError,
    data,
    setData,
    filters,
    setFilters,
    filterHandle,
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
