import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanets from '../service/data';

const initialFilters = {
  filterByName: {
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

const PlanetProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(initialFilters);

  console.log(data, 'fora');

  // ComponentDidMount
  useEffect(() => {
    const fetchPlanetAPI = async () => {
      const planetList = await fetchPlanets();
      setData(planetList);
    };
    fetchPlanetAPI();
  }, []);

  // Fnção criada com a juda da monitoria do Eduardo Santos
  const filterData = () => {
    // const { column, value, comparison } = filters.filterByNumericValues[0] || {};

    if (data.length) {
      const resetFilter = data
        .filter((planet) => {
          const filterByName = planet.name.toLowerCase()
            .includes(filters.filterByName.name.toLowerCase());

          const resultNumeric = filters.filterByNumericValues
            .every(({ column, value, comparison }) => {
              const filterNumeric = objectLiteral[comparison](planet[column], value);
              return filterNumeric;
            // console.log(`${planet.name} ${column}: ${planet[column]} ---- ${value}  ----- ${filterNumeric}`);
            });
          return filterByName && resultNumeric;
        });
      console.log(resetFilter, 'filter');
      return resetFilter;
    }
  };

  // column: 'population',
  // comparison: 'maior que',
  // value: '0',

  // useEffect(() => {
  //   filterData();
  // }, [filters.filterByName.name]);

  const contextData = {
    data,
    filters,
    setFilters,
    filterData,
  };

  return (
    <PlanetContext.Provider value={ contextData }>
      { children }
    </PlanetContext.Provider>
  );
};

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;

// https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
