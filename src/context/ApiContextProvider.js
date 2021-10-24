import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ApiContext from './ApiContext';
import fetchApi from '../services/Api';
import filtersStructure from '../services/filter';

const ApiContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(filtersStructure);
  const [filteredData, setFilteredData] = useState([]);

  const contextValue = {
    data,
    setData,
    filteredData,
    setFilteredData,
    filters,
    setFilters,
  };

  const getApi = () => {
    fetchApi().then((response) => setData(response));
    fetchApi().then((response) => {
      setData(response);
      setFilteredData(response);
    });
  };

  useEffect(getApi, []);
  return (
    <ApiContext.Provider value={ contextValue }>
      {children}
    </ApiContext.Provider>
  );
};
ApiContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ApiContextProvider;
