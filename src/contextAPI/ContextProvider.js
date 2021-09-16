import React from 'react';
import PropTypes from 'prop-types';
import planetsContext from '.';
import fetchStarWarsPlanets from '../services/api';

function PlanetsProvider({ children }) {
  const getPlanets = async () => {
    const planets = await fetchStarWarsPlanets();

    return planets;
  };

  const contextValue = {
    data: {
      planets: getPlanets(),
    },
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
