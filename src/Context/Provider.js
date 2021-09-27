import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const comparators = {
  'maior que': (a, b) => a > b,
  'menor que': (a, b) => a < b,
  'igual a': (a, b) => a === b,
};

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);
const trace = (val) => {
  console.log(val); return val;
};
function Provider({ children }) {
  const [planetsAtributes, setPlanetsAtributes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = React.useState([]);
  const [numericFilters, setNumericFilters] = useState([]);
  const [availableColumns, setAvailableColumns] = useState(columns);

  const addNumericFilter = (newNumericFilter) => {
    setAvailableColumns(
      availableColumns.filter(
        (availableFilterColumn) => availableFilterColumn !== newNumericFilter.column,
      ),
    );
    setNumericFilters([...numericFilters, newNumericFilter]);
  };

  const contextValue = {
    planetsAtributes,
    setPlanetsAtributes,
    searchTerm,
    setSearchTerm,
    searchResult,
    setSearchResult,
    filters: {
      filterByNumericValues: numericFilters,
    },
    setNumericFilters,
    addNumericFilter,
    availableColumns,
  };

  const makeFilter = (
    { comparison, value, column },
  ) => (planetsToFilter) => planetsToFilter
    .filter((planet) => {
      const planetValue = Number(planet[column]);
      const filterValue = parseInt(value, 0);
      const comparator = comparators[comparison];
      return (!!comparator(planetValue, filterValue));
    });

  React.useEffect(() => {
    if (numericFilters) {
      const filters = numericFilters.map(makeFilter);
      const combinedFilters = compose(...filters);
      const _ = filters.length && setSearchResult(combinedFilters(planetsAtributes));
    }
  }, [numericFilters, planetsAtributes]);

  React.useEffect(() => {
    const results = planetsAtributes.filter(
      (planet) => planet.name.toLowerCase().includes(searchTerm),
    );
    setSearchResult(results);
  }, [planetsAtributes, searchTerm]);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
