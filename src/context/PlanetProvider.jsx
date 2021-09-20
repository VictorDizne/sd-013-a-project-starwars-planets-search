import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

const initialFilters = {
  filterbyName: {
    name: '',
  },
  filterByNumericValues: [
  ],
};

// const objectLiteral = {
//   'more-than': () => { console.log('more-than'); },
//   'lesser-than': () => {},
//   'equal-to': () => {},
// };

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

  const contextValue = {
    data,
    planets,
    handleChange,
    searchText,
    filters,
    setFilters,
  };

  const nameFilter = () => {
    const filteredPlanetsByName = data.filter((item) => item.name.includes(searchText));
    setPlanets(filteredPlanetsByName);
  };
  //
  const filterData = () => {
  //  filters.filterByNumericValues.forEach()
    console.log(filters);
  };

  //
  useEffect(() => { getData(); }, []);

  useEffect(nameFilter, [searchText]);

  // useEffect(setFilters, [filters]);
  useEffect(filterData, [filters]);

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
