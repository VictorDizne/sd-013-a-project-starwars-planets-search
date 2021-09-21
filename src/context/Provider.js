import React, { useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './PlanetsContext';
import usePlanets from '../hooks/usePlanets';

function Provider({ children }) {
  const { planets, planetsKeys, setPlanets } = usePlanets();
  const [queryValue, setQueryValue] = useState('');
  const [numFilters, setNumFilters] = useState({});

  const contextValue = {
    planets,
    planetsKeys,
    queryValue,
    numFilters,
    setQueryValue,
    setPlanets,
    setNumFilters,
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
