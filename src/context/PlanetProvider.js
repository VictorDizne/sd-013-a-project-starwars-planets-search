import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import { fetchAPI, orderByColumn } from '../util';

const INITIAL_ORDER = {
  column: 'name',
  sort: 'ASC',
};

function PlanetProvider({ children }) {
  // console.log('redering Provider');

  const [filter, setFilter] = useState({
    filters: {
      filterByName: { name: '' },
      filterByNumericValues: [],
      order: INITIAL_ORDER,
    },
  });
  const [planets, setPlanets] = useState([]);

  const planetProviderValue = { filter, setFilter, planets, setPlanets };

  useEffect(() => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    fetchAPI(url)
      .then((dataPlanets) => {
        const planetsWithOrderByName = orderByColumn(dataPlanets.results, INITIAL_ORDER);
        setPlanets(planetsWithOrderByName);
      });
  }, []);

  return (
    <PlanetContext.Provider value={ planetProviderValue }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PlanetProvider;
