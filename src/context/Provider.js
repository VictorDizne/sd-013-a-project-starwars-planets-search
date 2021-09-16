import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState();

  useEffect(() => {
    const API = 'https://swapi-trybe.herokuapp.com/api/planets/';
    async function fetchData() {
      const data = await (await fetch(API)).json();
      const { results } = data;
      setPlanets(results);
    }
    fetchData();
  }, []);

  const context = {
    value: planets,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
