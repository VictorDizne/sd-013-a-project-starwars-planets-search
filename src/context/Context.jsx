import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();
const { Provider } = Context;

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);
  const [column, setColumn] = useState('');
  console.log(column, 'columnContex');

  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  console.log(url);
  const url2 = 'https://swapi.dev/api/planets';
  console.log(url2);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPlanets(data.results));
  }, []);

  // const handleClick = (value) => {
  //   setfilterByNumericValues([...filterByNumericValues, value]);
  // };

  const handleChange = ({ target: { value } }) => {
    setFilters(value);
  };

  // const removeSelectedItems = () => {
  //   const allColumns = filterColumn
  //     .filter((itemColumn) => (itemColumn !== selectedFilters.column));
  //   setFilterColumn(filtersAllColumnItems);
  // };

  const contextValue = {
    planets,
    filters,
    setFilters,
    handleChange,
    filterByNumericValues,
    column,
    setColumn,
    setfilterByNumericValues };

  return (
    <Provider value={ contextValue }>
      {children}
    </Provider>
  );
}

export default PlanetProvider;

PlanetProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
