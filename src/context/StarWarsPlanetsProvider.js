import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import fetchPlanets from '../service/getAPI';
import StarWarsPlanetsContext from './StarWarsPlanetsContext';

const StarWarsPlanetsProvider = ({ children }) => {
  const [data, setData] = useState();

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const fetchPlanetsData = async () => {
    const planetsData = await fetchPlanets();
    setData(planetsData);
  };

  const filterByName = (event) => {
    const { value } = event.target;
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  useEffect(() => {
    fetchPlanetsData();
  }, []);

  const context = {
    data,
    setData,
    filters,
    filterByName,
  };

  return (
    <StarWarsPlanetsContext.Provider value={ context }>
      {children}
    </StarWarsPlanetsContext.Provider>
  );
};

StarWarsPlanetsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default StarWarsPlanetsProvider;
