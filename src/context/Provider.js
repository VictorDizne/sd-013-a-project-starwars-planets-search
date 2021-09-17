import propTypes from 'prop-types';
import React, { useState } from 'react';
import StarWarsContext from '.';

const Provider = ({ children }) => {
  const header = {
    name: '',
    rotation_period: '',
    orbital_period: '',
    diameter: '',
    climate: '',
    gravity: '',
    terrain: '',
    surface_water: '',
    population: '',
    // residents: [],
    films: [],
    created: '',
    edited: '',
    url: '',
  };

  const [state, setState] = useState({
    header: Object.keys(header),
    data: [],
  });

  const contextValue = { state, setState };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: propTypes.node,
}.isRequired;

export default Provider;
