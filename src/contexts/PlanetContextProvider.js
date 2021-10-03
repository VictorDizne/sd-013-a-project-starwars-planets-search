import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetContext from './PlanetContext';
import fetchPlanets from '../services/apiServices';

const INIT_STATE = {
  planets: [],
  filters: {
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: { column: '', sort: 'ASC' },
  },
  text: '',
};

export default function PlanetContextProvider({ children }) {
  const [data, setData] = useState();

  useEffect(() => {
    fetchPlanets(setData, INIT_STATE);
  }, []);

  return (
    <PlanetContext.Provider value={ { data, setData } }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
