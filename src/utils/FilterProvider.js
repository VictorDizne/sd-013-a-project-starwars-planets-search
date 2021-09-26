import React from 'react';
import PropTypes from 'prop-types';
import FilterContext from './FilterContext';

function FilterProvider({ children }) {
  const [planetFilter, setPlanetFilter] = React.useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
      ],
    },
  });

  function setFilterByName(name) {
    setPlanetFilter((currentState) => ({
      ...currentState,
      filters: {
        ...currentState.filters,
        filterByName: {
          name,
        },
      },
    }));
  }

  function setFilterBySelectors(column, comparison, value) {
    setPlanetFilter((currentState) => ({
      ...currentState,
      filters: {
        ...currentState.filters,
        filterByNumericValues: [
          ...currentState.filters.filterByNumericValues,
          {
            column,
            comparison,
            value,
          },
        ],
      },
    }));
  }

  function removeFilter(id) {
    const newFilter = planetFilter.filters.filterByNumericValues
      .filter((filter) => filter.column !== id);

    setPlanetFilter((currentState) => ({
      ...currentState,
      filters: {
        ...currentState.filters,
        filterByNumericValues: newFilter,
      },
    }));
  }

  const contextValue = {
    planetFilter,
    setFilterByName,
    setFilterBySelectors,
    removeFilter,
  };

  return (
    <FilterContext.Provider value={ contextValue }>
      {children}
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilterProvider;
