import React, { useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './PlanetsContext';
import usePlanets from '../hooks/usePlanets';

function Provider({ children }) {
  const { planets, planetsKeys, setPlanets } = usePlanets();
  const [queryValue, setQueryValue] = useState('');
  const [numFilters, setNumFilters] = useState({});
  const [allFilters, setAllFilters] = useState([]);
  const [sortValues, setInitialSort] = useState([]);

  const contextValue = {
    allFilters,
    numFilters,
    planets,
    planetsKeys,
    queryValue,
    sortValues,
    setAllFilters,
    setNumFilters,
    setPlanets,
    setQueryValue,
    setInitialSort,
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
