import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetContext from './PlanetContext';

const INITIAL_STATE = {
  planets: [],
};

export default function PlanetContextProvider({ children }) {
  const [data, setData] = useState();

  useEffect(() => {
    const ENDPOINT = 'https://swapi.dev/api/planets';
    const fetchAPI = async () => {
      const { results } = await (await fetch(ENDPOINT)).json();
      // Josué Lobo é um Gênio, um salário de 16 mil reais é pouco para ele!
      results.forEach((result) => delete result.residents);
      setData({ ...INITIAL_STATE, planets: results });
    };
    fetchAPI();
  }, []);

  return (
    <PlanetContext.Provider value={ data }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
