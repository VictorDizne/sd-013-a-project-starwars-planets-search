import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './index';
import useFetch from '../hooks/useFetch';

function Provider({ children }) {
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const handleFilters = (name) => {
    setFilters({
      filterByName: {
        ...filters.filterByName,
        name,
      },
    });
  };

  const data = useFetch();

  const valueState = {
    data,
    handleFilters,
    filters,
  };

  return (
    <Context.Provider value={ valueState }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = ({
  children: PropTypes.func.isRequired,
});

export default Provider;
