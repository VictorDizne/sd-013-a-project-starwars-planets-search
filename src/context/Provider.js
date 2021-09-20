import React from 'react';
import PropTypes from 'prop-types';
import planetsContext from './PlanetsContext';
import usePlanets from '../hooks/usePlanets';

function Provider({ children }) {
  const { planets, planetsKeys, setPlanets } = usePlanets();

  const contextValue = {
    planets,
    planetsKeys,
    setPlanets,
  };

  return (
    <planetsContext.Provider value={ contextValue }>
      { children }
    </planetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
}.isRequired;

export default Provider;
