import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const PlanetsAndFiltersContext = createContext();

// Context refatorado com a ajuda do meu amigo Mateus Rodrigues, do colega Murilo Rainho e do monitor João Lima
export const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchterm] = useState('');
  const [filterByNumericValues, setNumericFilters] = useState([]);
  const [order, setOrder] = useState({ column: 'name', sort: 'ASC' });

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

    return filterByComparison(planet, column, value);
  };

  const filterByPlanetName = (planet) => planet.name.toLowerCase()
    .includes(searchTerm.toLowerCase());

  // Com base em https://www.smashingmagazine.com/2020/03/sortable-tables-react/ e https://stackoverflow.com/a/51169
  const handleSortOrder = (a, b) => {
    const NEG_ONE = -1;

    if (order.column === 'name' && order.sort === 'ASC') {
      return a.name.localeCompare(b.name);
    }
    if (order.column === 'name' && order.sort === 'DESC') {
      return b.name.localeCompare(a.name);
    }

    if (Number(a[order.column]) < Number(b[order.column])) {
      return order.sort === 'ASC' ? NEG_ONE : 1;
    }
    if (Number(a[order.column]) > Number(b[order.column])) {
      return order.sort === 'ASC' ? 1 : NEG_ONE;
    }
    return 0;
  };

  const context = {
    planets,
    loading,
    filters:
    {
      filterByName: {
        name: searchTerm,
      },
      filterByNumericValues,
      order,
    },
    setStates: {
      setPlanets,
      setLoading,
      setSearchterm,
      handleNumericFilters,
      setNumericFilters,
      setOrder,
    },
    planetsWithFilters: planets
      .filter(filterByPlanetName)
      .filter(handleNumericFilters)
      .sort(handleSortOrder),
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
