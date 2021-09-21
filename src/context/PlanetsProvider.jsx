import React, { useState, useReducer, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';
import usePlanets from '../hooks/usePlanets';

const PlanetsProvider = ({ children }) => {
  const { planets, titles, next, setNext } = usePlanets();
  const filterState = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  const filterReducer = (state, { type, payload }) => {
    switch (type) {
    case 'nameFilter':
      return {
        ...state,
        filterByName: { name: payload },
      };

    case 'addFilter':
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, payload],
      };

    case 'removeFilter':
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues]
          .filter((f) => f.id !== payload),
      };
    default:
      return state;
    }
  };

  const [filters, dispatch] = useReducer(filterReducer, filterState);

  const handleNameFilter = ({ target: { value } }) => {
    dispatch({ type: 'nameFilter', payload: value });
  };

  const handleAddFilter = (payload) => {
    dispatch({ type: 'addFilter', payload });
  };

  const handleRemoveFilter = (payload) => {
    dispatch({ type: 'removeFilter', payload });
  };

  const value = {
    planets,
    next,
    titles,
    filters,
    handleNameFilter,
    handleAddFilter,
    handleRemoveFilter,
    setNext,
  };

  return (
    <PlanetsContext.Provider value={ value }>{children}</PlanetsContext.Provider>
  );
};

export default PlanetsProvider;
