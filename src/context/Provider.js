import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchPlanets from '../data';
import MyContext from './MyContext';

function Provider({ children }) {
  const [useData, setUseData] = useState([]);

  useEffect(() => {
    async function getAPI() {
      const results = await fetchPlanets();
      setUseData(results);
    }
    getAPI();
  }, []);

  const contextValue = {
    useData,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
