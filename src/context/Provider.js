import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import contextApp from './contextApp';
import searchPlanets from '../services/ApiPlanets';

function Provider({ children }) {
  const [data, setData] = useState([]); // estados criados para salvar retorno API
  const [filterUsed, setFilterUsed] = useState([]);

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
    filterUsed,
    setFilterUsed,
  };

  useEffect(() => {
    const GetPlanets = async () => {
      const result = await searchPlanets();
      setData(result);
      result.map((item) => delete item.residents);
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
