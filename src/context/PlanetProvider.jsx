import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

const PlanetProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const getPlanets = async () => {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const result = await fetch(endpoint).then((response) => response.json());
    setPlanets(result.results);
    // console.log(result.results);
  };

  useEffect(() => { getPlanets(); }, []);

  return (
    <PlanetContext.Provider value={ planets }>
      {children}
    </PlanetContext.Provider>
  );
};

export default PlanetProvider;

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
