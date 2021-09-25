import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();
const { Provider } = Context;

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
  });

  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPlanets(data.results));
  }, []);

  const contextValue = { planets, filters, setFilters };

  return (
    <Provider value={ contextValue }>
      {children}
    </Provider>
  );
}

export default PlanetProvider;

PlanetProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
