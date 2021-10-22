import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useFetchApi from '../useFetchApi';

function Provider({ children }) {
  const { data, planetKeys, listPlanets, setListPlanets } = useFetchApi();

  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const context = {
    data,
    planetKeys,
    listPlanets,
    setListPlanets,
    filter,
    setFilter,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
