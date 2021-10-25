import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
    order: {
      columnName: 'name',
      sort: 'ASC',
    },
  });
  const fetchPlanet = () => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json()).then(({ results }) => {
        const keyFilter = results.map(({ residents, ...otherKeys }) => otherKeys);
        setData(keyFilter);
      });
  };
  useEffect(() => fetchPlanet(), []);
  return (
    <PlanetContext.Provider value={ { data, setData, filters, setFilters } }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default PlanetProvider;
