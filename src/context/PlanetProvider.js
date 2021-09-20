import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';

const Context = createContext();

const initialColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

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
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [columns, setColumns] = useState(initialColumns);

  useEffect(() => {
    const getPlanets = async () => {
      setData(await fetchPlanets());
      setIsFetching(false);
    };
    getPlanets();
  }, []);

  useEffect(() => {
    const userInput = filters.filterByName.name;
    const result = data.filter((planet) => planet.name.includes(userInput));
    setFilteredPlanets(result);
  }, [filters.filterByName.name, data]);

  const addFilter = (filter) => {
    if (!filter.column || !filter.value) return null;

    setFilters({ ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        filter,
      ] });

    // Update planets
    const newFilteredPlanets = filteredPlanets.filter(getOperator(filter));
    setFilteredPlanets(newFilteredPlanets);
  };

  // Remove `column` already used
  useEffect(() => {
    const usedColumns = filters.filterByNumericValues.map((filter) => filter.column);
    const newColumnsState = initialColumns.filter((col) => !usedColumns.includes(col));
    setColumns(newColumnsState);
  }, [filters.filterByNumericValues]);

  const context = {
    planets: filteredPlanets,
    isFetching,
    filters,
    setFilters,
    addFilter,
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
