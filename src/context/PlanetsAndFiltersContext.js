import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const PlanetsAndFiltersContext = createContext();

// Context refatorado com a do Matheus Rodrigues 
export const PlanetsProvider = ({ children }) => {
  const [planets, getPlanets] = useState([]);
  const [loading, isLoading] = useState(true);
  const [searchTerm, setSearchterm] = useState('');
  const [filterByNumericValues, setNumericFilters] = useState({});

  const comparisons = {
    'maior que': (planet, column, value) => Number(planet[column]) > Number(value),
    'menor que': (planet, column, value) => Number(planet[column]) < Number(value),
    'igual a': (planet, column, value) => Number(planet[column]) === Number(value),
  };

  const handleNumericFilters = (planet) => {
    const { comparison, column, value } = filterByNumericValues;

    const predicate = comparisons[comparison] || (() => true);

    return predicate(planet, column, value);
  };

  useEffect(() => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

    fetch(URL)
      .then((resolve) => resolve.json())
      .then((json) => {
        getPlanets(json.results);
        isLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const filterByPlanetName = (planet) => planet.name.toLowerCase().includes(searchTerm.toLowerCase());

  console.log(filterByNumericValues);

  const context = {
    planets,
    filters:
    {
      filterByName: {
        name: searchTerm,
      },
      filterByNumericValues,
    },
    setStates: {
      getPlanets,
      isLoading,
      setSearchterm,
      handleNumericFilters,
      setNumericFilters,
    },
    loading,
    planetsWithFilters: planets.filter(filterByPlanetName).filter(handleNumericFilters),
  };

  return (
    <PlanetsAndFiltersContext.Provider value={ context }>
      {children}
    </PlanetsAndFiltersContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
