import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetchAPI from '../hooks/useFetchAPI';
import Context from './Context';

function Provider({ children }) {
  const [data] = useFetchAPI();
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const value = {
    data,
    filters,
    setFilters,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
