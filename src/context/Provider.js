import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import usePlanets from '../hooks/usePlanets';

function Provider({ children }) {
  const { planets, planetsKeys } = usePlanets();
  const [newPlanets, setNewPlanets] = useState(planets);
  const [queryValue, setQueryValue] = useState('');

  const handlePlanetsFilter = (key, value) => {
    const newState = { ...newPlanets, [key]: value };
    setNewPlanets(newState);
  };

  const contextValue = {
    newPlanets,
    planetsKeys,
    queryValue,
    setQueryValue,
    handlePlanetsFilter,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

const { arrayOf } = PropTypes;

Provider.propTypes = {
  children: arrayOf,
}.isRequired;

export default Provider;
