import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useFetchApi from '../hooks/useFetchApi';

function Provider({ children }) {
  const { data, planetKeys, listPlanets, setListPlanets, setData } = useFetchApi();

  const [filterName, setFilterName] = useState('');

  const [filterNumeric, setFilterNumeric] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const [filterCard, setFilterCard] = useState([]);

  const context = {
    data,
    planetKeys,
    listPlanets,
    setListPlanets,
    filterName,
    setFilterName,
    filterNumeric,
    setFilterNumeric,
    filterCard,
    setFilterCard,
    setData,
  };

  return (
    <Context.Provider value={ context } displayName="Context Display Name">
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
