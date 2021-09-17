import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import usePlanets from '../hooks/usePlanets';

function Provider({ children }) {
  const { planets, planetsKeys } = usePlanets();
  const [newPlanets, setNewPlanets] = useState(planets);
  const [queryValue, setQueryValue] = useState('');
  const [numFilters, setNumFilters] = useState([]);

  const handlePlanetsFilter = (key, value) => {
    const newState = { ...newPlanets, [key]: value };
    setNewPlanets(newState);
  };

  const contextValue = {
    newPlanets,
    planetsKeys,
    queryValue,
    numFilters,
    setQueryValue,
    setNumFilters,
    handlePlanetsFilter,
  };

  return (
    <MyContext.Provider value={ contextValue } displayName="Context Display Name">
      { children }
    </MyContext.Provider>
  );
}

const { arrayOf } = PropTypes;

Provider.propTypes = {
  children: arrayOf,
}.isRequired;

export default Provider;
