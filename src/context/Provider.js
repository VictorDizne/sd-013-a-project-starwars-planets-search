import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '.';
import fetchPlanets from '../services/fetchPlanets';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [dataRemoved, setDataRemoved] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [column, setColumn] = useState('');
  const [comparision, setComparision] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const [columnValues, setColumnValues] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  useEffect(() => {
    const getPlanets = async () => {
      const results = await fetchPlanets();
      setData(results);
      setFilteredData(results);
      setIsLoading(false);
    };
    getPlanets();
  }, []);

  const context = {
    filters,
    setFilters,
    data,
    setData,
    filteredData,
    setFilteredData,
    isLoading,
    value,
    comparision,
    column,
    setValue,
    setComparision,
    setColumn,
    columnValues,
    setColumnValues,
    dataRemoved,
    setDataRemoved,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf([]).isRequired,
};

export default Provider;
