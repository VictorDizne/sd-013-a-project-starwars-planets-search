import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import useRequestPlanet from '../hooks/useRequestPlanet';

export default function Provider({ children }) {
  const [requestPlanets, setPlanets] = useRequestPlanet([]);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState([]);
  const [columnOrder, setColumnOrder] = useState('name');
  const [ascOrDescOrder, setAscOrDescOrder] = useState('ASC');
  const context = {
    data: requestPlanets,
    filters: { filterByName: { name }, filterByNumericValues: filters },
    order: { column: columnOrder, sort: ascOrDescOrder },
    sets: { setName, setPlanets, setFilters, setColumnOrder, setAscOrDescOrder },
  };
  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequised;
