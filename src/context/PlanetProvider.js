import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';

const Context = createContext();

const initialFiltersState = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

const getOperator = (filter) => {
  const { column, comparison, value } = filter;

  const gt = (planet) => Number(planet[column]) > Number(value);
  const lt = (planet) => Number(planet[column]) < Number(value);
  const eq = (planet) => Number(planet[column]) === Number(value);
  if (comparison === 'maior que') return gt;
  if (comparison === 'menor que') return lt;
  return eq;
};

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filters, setFilters] = useState(initialFiltersState);
  const [columns, setColumns] = useState(initialColumns);

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await fetchPlanets();
      setData(planets);
      setFilteredPlanets(planets);
      setIsFetching(false);
    };
    getPlanets();
  }, []);

  const handleSearchByName = (userInput) => {
    const result = data.filter((planet) => planet.name.includes(userInput));
    setFilteredPlanets(result);

    setFilters({ ...filters, filterByName: { name: userInput } });
  };

  const addFilter = (filter) => {
    if (!filter.column || !filter.value) return null;

    // Update planets when a `filter` is added
    const newFilteredPlanets = filteredPlanets.filter(getOperator(filter));
    setFilteredPlanets(newFilteredPlanets);

    setFilters({ ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        filter,
      ] });
  };

  // Remove `column` already used when `filterByNumericValues` change
  useEffect(() => {
    const usedColumns = filters.filterByNumericValues.map((filter) => filter.column);
    const newColumnsState = initialColumns.filter((col) => !usedColumns.includes(col));
    setColumns(newColumnsState);
  }, [filters.filterByNumericValues]);

  const context = {
    data,
    isFetching,
    filters,
    addFilter,
    handleSearchByName,
    columns,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PlanetProvider as Provider, Context };
