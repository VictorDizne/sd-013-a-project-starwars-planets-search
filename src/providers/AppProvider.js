import React, { useState, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

import AppContext from '../contexts/AppContext';

import fetchApi from '../services/fetchApi';

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const originalData = useRef([]);

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
  });

  const [numericFilters, setNumericFilters] = useState([]);

  const [avaibleFilters, setAvaibleFilters] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [numericFilter, setNumericFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const contextValue = {
    data,
    setData,

    filters,
    setFilters,

    filteredData,
    setFilteredData,

    avaibleFilters,
    setAvaibleFilters,

    numericFilter,
    setNumericFilter,

    numericFilters,
    setNumericFilters,
  };

  // executa ao renderizar o Provider
  useEffect(() => {
    fetchApi()
      .then((res) => {
        setData(res);
        setCurrentData(res);
        originalData.current = res;
      });
  }, []);

  // executa ao filtrar por nome a currentData
  useEffect(() => {
    const { filterByName: { name } } = filters;
    setFilteredData(currentData
      .filter((planet) => planet.name.toLowerCase()
        .includes(name.toLowerCase())));
  }, [currentData, filters]);

  // executa ao filtrar por coluna
  // usa a "data original" sempre
  useEffect(() => {
    // setCurrentData((currData) => currData);
    setCurrentData(originalData.current);
    const comparisons = {
      'maior que': (col, val) => Number(col) > Number(val),
      'menor que': (col, val) => Number(col) < Number(val),
      'igual a': (col, val) => Number(col) === Number(val),
    };
    // const { filterByNumericValues } = filters;
    numericFilters.forEach(({ column, comparison, value }) => {
      setCurrentData((prevCurrData) => prevCurrData
        .filter((planet) => comparisons[comparison](planet[column], value)));
    });
  }, [numericFilters]);

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
