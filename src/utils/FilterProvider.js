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
        {
          column: '',
          comparison: '',
          value: '',
        },
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
          {
            column,
            comparison,
            value,
          },
        ],
      },
    }));
  }

  const contextValue = {
    planetFilter,
    setFilterByName,
    setFilterBySelectors,
  };

  return (
    <FilterContext.Provider value={ contextValue }>
      {children}
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default FilterProvider;
