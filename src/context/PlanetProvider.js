import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanets from '../service/data';

const initialFilters = {
  filterByName: {
    name: '',
  },
  // filterByNumericValues: [],
  // order: {
  //   column: 'Name',
  //   sort: 'ASC',
  // },
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

  // const filterName = (name) => {
  //   const planetFilteredByName = data
  //     .filter((planet) => planet.name.includes(name));
  //   setData(planetFilteredByName);
  // };

  const filterName = (typedName) => {
    setFilters({
      ...filters,
      filterByName: {
        name: typedName,
      },
    });
  };

  const contextData = {
    data,
    filterName,
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
