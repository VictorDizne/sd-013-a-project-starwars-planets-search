import PropTypes from 'prop-types';
import React, { useReducer } from 'react';
import PlanetsContext from './PlanetsContext';
import usePlanets from '../hooks/usePlanets';

const PlanetsProvider = ({ children }) => {
  const { planets, titles, next, setNext } = usePlanets();
  const filterState = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
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
    case 'sortFilter':
      return {
        ...state,
        order: {
          column: payload.column,
          sort: payload.sort,
        },
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

  const handleSortFilter = (payload) => {
    dispatch({ type: 'sortFilter', payload });
  };

  const value = {
    planets,
    next,
    titles,
    filters,
    handleNameFilter,
    handleAddFilter,
    handleRemoveFilter,
    handleSortFilter,
    setNext,
  };

  return (
    <PlanetsContext.Provider value={ value }>{children}</PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
