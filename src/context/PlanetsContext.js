import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const PlanetsContext = createContext();

export const PlanetsProvider = ({ children }) => {
  const [planets, getPlanets] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

    fetch(URL)
      .then((resolve) => resolve.json())
      .then((json) => {
        getPlanets(json.results);
        isLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <PlanetsContext.Provider value={ { planets, loading } }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
