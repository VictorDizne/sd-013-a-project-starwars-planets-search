import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import { fetchAPI, orderByColumn } from '../util';

function PlanetProvider({ children }) {
  // console.log('redering Provider');

  const [filter, setFilter] = useState({
    filters: {
      filterByName: { name: '' },
      filterByNumericValues: [],
      order: {
        column: 'name',
        sort: 'DSC',
      },
    },
  });
  const [planets, setPlanets] = useState([]);

  const planetProviderValue = { filter, setFilter, planets, setPlanets };

  useEffect(() => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    fetchAPI(url)
      .then((dataPlanets) => {
        console.log(filter.filters.order);
        console.log(dataPlanets);
        const planetsWithOrderByName = orderByColumn(dataPlanets.results, filter.filters.order);
        setPlanets(planetsWithOrderByName);
        console.log(planetsWithOrderByName);
      });
  }, [filter.filters.order]);

  return (
    <PlanetContext.Provider value={ planetProviderValue }>
      { children }
    </PlanetContext.Provider>
  );
}

export default PlanetProvider;
