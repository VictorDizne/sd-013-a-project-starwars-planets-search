import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './mycontext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [endFetch, finishFetch] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((result) => result.json())
        .then((result) => result.results);
      response.forEach((element) => {
        delete element.residents;
      });
      setPlanets(response);
      finishFetch(true);
    }
    fetchData();
  }, [endFetch]);

  const contextInitialValue = {
    data: planets,
    setPlanets,
  };

  return (
    <Context.Provider value={ contextInitialValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
