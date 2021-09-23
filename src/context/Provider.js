import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';

const Context = createContext();

const initialColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const [columns, setColumns] = useState(initialColumns);

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await fetchPlanets();
      setData(planets);
      setFetching(false);
    };
    getPlanets();
  }, []);

  const handleSearchByName = (userInput) => {
    setFilters({
      ...filters,
      filterByName: { name: userInput } });
  };

  const removeColumnUsedInAFilter = (filter) => {
    const usedColumn = columns.indexOf(filter.column);
    const newColumns = [...columns];
    newColumns.splice(usedColumn, 1);
    setColumns(newColumns);
  };

  const handleNewNumericFilter = (newFilter) => {
    removeColumnUsedInAFilter(newFilter);

    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, newFilter] });
  };

  const context = {
    data,
    fetching,
    filters,
    columns,
    handleSearchByName,
    handleNewNumericFilter };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Provider, Context };
