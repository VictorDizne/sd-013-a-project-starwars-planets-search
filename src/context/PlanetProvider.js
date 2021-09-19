import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';

const Context = createContext();

const initialFiltersState = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filters, setFilters] = useState(initialFiltersState);
  const [filteredPlanets, filterPlanets] = useState([]);

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
    filterPlanets(result);
  }, [filters.filterByName.name, data]);

  const addFilter = (filter) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        filter,
      ],
    });
  };

  const context = {
    planets: filteredPlanets,
    isFetching,
    filters,
    setFilters,
    addFilter,
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
