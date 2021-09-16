import React from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

const PlanetProvider = ({ children }) => {
  console.log(children);
  return (
    <PlanetContext.Provider>
      {children}
    </PlanetContext.Provider>
  );
};
PlanetProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
export default PlanetProvider;
