import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const PlanetsAndFiltersContext = createContext();

// Context refatorado com a do Matheus Rodrigues
export const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchterm] = useState('');
  const [filterByNumericValues, setNumericFilters] = useState([]);
  // const [columnValues, setColumnValues] = useState([
  //   'population',
  //   'orbital_period',
  //   'diameter',
  //   'rotation_period',
  //   'surface_water',
  // ]);

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
    if (filterByNumericValues.length === 0) return true;

    const lastFilter = filterByNumericValues.length - 1;

    const { comparison, column, value } = filterByNumericValues[lastFilter];

    const filterByComparison = comparisons[comparison];

    // const filteredColumnValues = columnValues.filter(() => value !== column);
    // console.log(filteredColumnValues);

    return filterByComparison(planet, column, value);
  };

  // const handleColumnFilters = () => {
  //   const { comparison, column, value } = filterByNumericValues[lastFilter];

  //   const lastFilter = filterByNumericValues.length - 1;

  //   const filteredColumnValues = columnValues.filter((value) => value !== column);
  //   console.log(filteredColumnValues);
  //   // setColumnValues(filteredColumnValues);
  // };

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
    // columnValues,
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
      // setColumnValues,
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
