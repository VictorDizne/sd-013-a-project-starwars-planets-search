import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import fetchPlanets from '../service/getAPI';
import StarWarsPlanetsContext from './StarWarsPlanetsContext';

const StarWarsPlanetsProvider = ({ children }) => {
  const [data, setData] = useState();

  const fetchPlanetsData = async () => {
    const planetsData = await fetchPlanets();
    setData(planetsData);
  };

  useEffect(() => {
    fetchPlanetsData();
  }, []);

  const context = {
    data,
    setData,
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
