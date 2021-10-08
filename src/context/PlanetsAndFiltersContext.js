import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const PlanetsAndFiltersContext = createContext();

// Context refatorado com a do Matheus Rodrigues
export const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchterm] = useState('');
  const [filterByNumericValues, setNumericFilters] = useState([]);
  // const [columnValues, setColumnValues] = [];

  useEffect(() => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

    fetch(URL)
      .then((resolve) => resolve.json())
      .then((json) => {
        setPlanets(json.results);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const comparisons = {
    'maior que': (planet, column, value) => Number(planet[column]) > Number(value),
    'menor que': (planet, column, value) => Number(planet[column]) < Number(value),
    'igual a': (planet, column, value) => Number(planet[column]) === Number(value),
  };

  const handleNumericFilters = (planet) => {
    if(filterByNumericValues.length === 0) {
      return true;
    }

    const lastFilter = filterByNumericValues.length - 1;
    const { comparison, column, value } = filterByNumericValues[lastFilter];

    const filterByComparison = comparisons[comparison] || (() => true);

    return filterByComparison(planet, column, value);

  };

  console.log('length', filterByNumericValues.length);

  // useEffect((planet) => {
  //   const lastFilter = filterByNumericValues.length - 1;
  //   const { comparison, column, value } = filterByNumericValues[lastFilter];

  //   const filterByComparison = comparisons[comparison] || (() => true);

  //   return filterByComparison(planet, column, value);
  // }, [filterByNumericValues, comparisons])

  const filterByPlanetName = (planet) => planet.name.toLowerCase()
    .includes(searchTerm.toLowerCase());

  const context = {
    planets,
    loading,
    filters:
    {
      filterByName: {
        name: searchTerm,
      },
      filterByNumericValues,
    },
    setStates: {
      setPlanets,
      setLoading,
      setSearchterm,
      handleNumericFilters,
      setNumericFilters,
    },
    planetsWithFilters: planets.filter(filterByPlanetName).filter(handleNumericFilters),
  };

  return (
    <PlanetsAndFiltersContext.Provider value={context}>
      {children}
    </PlanetsAndFiltersContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
