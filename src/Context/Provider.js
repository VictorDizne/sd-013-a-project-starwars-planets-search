import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';
import Context from './Context';
import getAPIPlanets from '../serviceAPI/PlanetAPI';

function Provider({ children }) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchPlanets() {
      setData(await getAPIPlanets());
    } fetchPlanets();
  }, []);

  const contextValue = {
    data,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = { children: func }.isRequired;

export default Provider;
