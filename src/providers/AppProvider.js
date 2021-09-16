import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import AppContext from '../context/AppContext';

import fetchAPI from '../services/fetchAPI';

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]); // foi colocado o resultado da fetch no estado.
  const contextValue = {
    data,
    setData,
  };

  useEffect(() => {
    fetchAPI()
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
