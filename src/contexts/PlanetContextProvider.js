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
  const [SWAPI, setSWAPI] = useState();

  useEffect(() => {
    fetchPlanets(setSWAPI, INIT_STATE);
  }, []);

  return (
    <PlanetContext.Provider value={ { SWAPI, setSWAPI } }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
