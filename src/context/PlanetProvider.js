import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanets from '../service/data';

const initialFilters = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      column: 'population',
      comparison: 'maior que',
      value: '0',
    },
  ],
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

  const filterData = () => {
    if (data.length) {
      const resetFilter = data
        .filter((planet) => planet.name.toLowerCase()
          .includes(filters.filterByName.name.toLowerCase()));
      console.log(resetFilter, 'filter');
      return resetFilter;
    }
  };

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
