import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';
import Context from './Context';
import getAPIPlanets from '../serviceAPI/PlanetAPI';

function Provider({ children }) {
  const initialState = {
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  };

  const [data, setData] = useState({});
  const [filters, setFilters] = useState(initialState);

  function handleName({ target: { value } }) {
    setFilters({
      ...filters,
      filterByName: { name: value.toLowerCase() },
    });
  }

  useEffect(() => {
    async function fetchPlanets() {
      setData(await getAPIPlanets());
    } fetchPlanets();
  }, []);

  const contextValue = {
    data,
    handleName,
    filters,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = { children: func }.isRequired;

export default Provider;
