import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const PlanetsAndFiltersContext = createContext();

// Context refatorado com a ajuda do colega Murilo Rainho e do monitor João Lima (Turma 11)
export const PlanetsProvider = ({ children }) => {
  const [planets, getPlanets] = useState([]);
  const [loading, isLoading] = useState(true);
  const [searchTerm, makeSearch] = useState();
  const [columnFilter, setColumn] = useState('population');
  const [comparisonFilter, setComparison] = useState('maior que');
  const [valueFilter, setValue] = useState('');
  const [filtersUsed, getFiltersUsed] = useState([]);
  const [planetsWithFilters, setFilteredPlanets] = useState(planets);

  const handleNumericFilters = () => {
    switch (comparisonFilter) {
    case 'maior que':
      // planets
      //   .filter((planet) => Number(planet[columnFilter]) > Number(valueFilter));
      setFilteredPlanets([...planets
        .filter((planet) => Number(planet[columnFilter]) > Number(valueFilter))]);
      break;

    case 'menor que':
      setFilteredPlanets([...planets
        .filter((planet) => Number(planet[columnFilter]) < Number(valueFilter))]);
      break;

    case 'igual a':
      setFilteredPlanets([...planets
        .filter((planet) => Number(planet[columnFilter]) === Number(valueFilter))]);
      break;

    default:
      setFilteredPlanets(planets);
      break;
    }

    // const { filters: { filterByNumericValues } } = context;

    // if (comparisonFilter === 'maior que') {
    //   const mostThan = planets
    //     .filter((planet) => Number(planet[columnFilter]) > Number(valueFilter));
    //   console.log(test);
    // }

    // if (filterByNumericValues > 0) {
    //   return console.log('funfa');
    // }
  };

  useEffect(() => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

    fetch(URL)
      .then((resolve) => resolve.json())
      .then((json) => {
        getPlanets(json.results);
        setFilteredPlanets(json.results);
        isLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const context = {
    planets,
    filters:
    {
      filterByName: {
        name: searchTerm,
      },
      filterByNumericValues: [
        {
          column: columnFilter,
          comparison: comparisonFilter,
          value: valueFilter,
        },
      ],
    },
    setStates: {
      getPlanets,
      isLoading,
      makeSearch,
      setColumn,
      setComparison,
      setValue,
      getFiltersUsed,
      setFilteredPlanets,
      handleNumericFilters,
    },
    loading,
    filtersUsed,
    planetsWithFilters,
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
