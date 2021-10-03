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
};

export default function PlanetContextProvider({ children }) {
  const [planetData, setPlanetData] = useState();

  useEffect(() => {
    fetchPlanets(setPlanetData, INIT_STATE);
  }, []);

  return (
    <PlanetContext.Provider value={ { planetData, setPlanetData } }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
