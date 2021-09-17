import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';
import fetchPlanets from '../Api';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getApi() {
      const response = await fetchPlanets();
      setData(response);
    } getApi();
  }, []);

  const contextValue = { data };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
