import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

// filteredByNumericValues recebe objeto com {column: '', comparison: '', value: 0 }
const initialFilters = {
  filterbyName: {
    name: '',
  },
  filterByNumericValues: [
  ],
};

const objectLiteral = {
  'maior que': (a, b) => Number(a) > Number(b),
  'menor que': (a, b) => Number(a) < Number(b),
  'igual a': (a, b) => Number(a) === Number(b),
};

// objectLiteral['more-than']();

const PlanetProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [searchText, setSearchText] = useState('');

  const [filters, setFilters] = useState(initialFilters);

  // const [columnSelector, setColumn] = useState('population');
  // const [comparisonSelector, setComparison] = useState('more-than');
  // const [inputValueSelector, setInputValue] = useState(0);

  const getData = async () => {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const result = await fetch(endpoint).then((response) => response.json());
    setData(result.results);
    setPlanets(result.results);
    // console.log(result.results);
  };

  const handleChange = ({ target: { value } }) => {
    setSearchText(value);
  };

  const nameFilter = () => {
    const filteredPlanetsByName = data
      .filter((planet) => planet.name.includes(searchText));
    // console.log(filteredPlanetsByName)
    setPlanets(filteredPlanetsByName);
  };
  //
  const filterData = () => {
    // const {column, comparison, value} = filters.filterByNumericValues;
    // console.log(filters.filterByNumericValues);

    const filteredByNumber = data.filter((planet) => {
      const comparisonToUse = filters.filterByNumericValues[0].comparison;
      const valueToCompare = filters.filterByNumericValues[0].value;
      const columnToCompare = filters.filterByNumericValues[0].column;

      // console.log(filters.filterByNumericValues[0]);
      // console.log(comparisonToUse);
      // console.log((planet[columnToCompare]));
      // console.log(valueToCompare);
      // console.log(columnToCompare);

      return objectLiteral[comparisonToUse](Number(planet[columnToCompare]),
        Number(valueToCompare));
    });
    setPlanets(filteredByNumber);
    //  filters.filterByNumericValues.forEach()
    // console.log(filters);
    // console.log(filters.filterByNumericValues.length);
  };

  //
  useEffect(() => { getData(); }, []);

  useEffect(nameFilter, [searchText]);

  // useEffect(setFilters, [filters]);
  useEffect(filterData, [filters]);

  const contextValue = {
    data,
    planets,
    handleChange,
    searchText,
    filters,
    setFilters,
    filterData,
  };
  return (
    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>
  );
};

export default PlanetProvider;

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
