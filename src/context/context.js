import PropTypes from 'prop-types';
import React, { useState } from 'react';
import dataContext from './createContext';

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  const context = {
    data,
    setData,
    setIsLoading,
    isLoading,
    filters,
    setFilters,
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
