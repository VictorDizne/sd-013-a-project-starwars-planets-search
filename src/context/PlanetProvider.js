import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import { fetchAPI } from '../util';

function PlanetProvider({ children }) {
  const [filter, setFilter] = useState({
    filters: {
      filterByName: { name: '' },
      filterByNumericValues: [],
    },
  });
  const [planets, setPlanets] = useState([]);

  const planetProviderValue = { filter, setFilter, planets, setPlanets };

  useEffect(() => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    fetchAPI(url).then((dataPlanets) => setPlanets(dataPlanets.results));
  }, []);

  return (
    <PlanetContext.Provider value={ planetProviderValue }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
export default PlanetProvider;
