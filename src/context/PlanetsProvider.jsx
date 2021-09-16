import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';
import usePlanets from '../hooks/usePlanets';

const PlanetsProvider = ({ children }) => {
  const { planets, titles, next, setNext } = usePlanets();
  const [queryFilter, setQueryFilter] = useState('');

  const value = {
    planets,
    next,
    titles,
    queryFilter,
    setQueryFilter,
    setNext,
  };

  return (
    <PlanetsContext.Provider value={ value }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PlanetsProvider;
