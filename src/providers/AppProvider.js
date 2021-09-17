import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import AppContext from '../contexts/AppContext';

import fetchApi from '../services/fetchApi';

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
    },
  );

  const contextValue = {
    data,
    setData,
    filters,
    setFilters,
  };

  useEffect(() => {
    fetchApi()
      .then((res) => setData(res));
  }, []);

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
