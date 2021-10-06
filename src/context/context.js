import PropTypes from 'prop-types';
import React, { useState } from 'react';
import dataContext from './createContext';

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: { column: 'name', sort: 'ASC' },
};

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [actFilter, setActFilter] = useState(false);
  const [newState, setNewState] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const [filters, setFilters] = useState(INITIAL_STATE);

  const context = {
    data,
    setData,
    isLoading,
    setIsLoading,
    filters,
    setFilters,
    actFilter,
    setActFilter,
    newState,
    setNewState,
  };

  return (
    <dataContext.Provider value={ context }>
      {children}
    </dataContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default ContextProvider;
