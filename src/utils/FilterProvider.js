import React from 'react';
import PropTypes from 'prop-types';
import FilterContext from './FilterContext';

function FilterProvider({ children }) {
  const [planetFilter, setPlanetFilter] = React.useState({
    filters: {
      filterByName: {
        name: '',
      },
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

  const contextValue = {
    planetFilter,
    setFilterByName,
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
