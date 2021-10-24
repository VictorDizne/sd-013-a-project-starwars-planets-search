import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ApiContext from './ApiContext';
import fetchApi from '../services/Api';

const ApiContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const contextValue = {
    data,
    setData,
  };

  const getApi = () => {
    fetchApi().then((response) => setData(response));
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
