import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import contextApp from './contextApp';
import searchPlanets from '../services/ApiPlanets';

const filterInitial = {
  filterByName: { name: '' },
  filterByNumericValues: [{
    column: 'population',
    comparison: 'maior que',
    value: '10000',
  }],
};

function Provider({ children }) {
  const [data, setData] = useState([]); // estados criados para salvar retorno API
  const [dataError, setDataError] = useState(false);
  const [filterUsed, setFilterUsed] = useState([]);
  const [filters, setFilters] = useState(filterInitial);

  // Seta valores do filtro de valor.
  const [numericFilter, setNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  useEffect(() => {
    const GetPlanets = async () => {
      const result = await searchPlanets();
      setData(result);
      result.map((item) => delete item.residents);
    };
    GetPlanets();
  }, []); // funcao e um array vazio === didMount,renderiza uma vez

  const handleChange = ({ target }) => {
    setNumericFilter((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  //

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
    handleChange,
    setNumericFilter,
    numericFilter,
  };

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
