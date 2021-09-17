import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from '.';
import fetchStarWarsPlanets from '../services/api';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const getPlanets = async () => {
    const fetchedPlanets = await fetchStarWarsPlanets();
    setPlanets(fetchedPlanets);
  };

  useEffect(() => { // ComponentDidMount
    getPlanets();
  }, []);

  const contextValue = {
    data: planets,
  };

  return (
    <planetsContext.Provider value={ contextValue }>
      {children}
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
