import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './mycontext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [ogPlanets, setOgPlanets] = useState([]);
  const [endFetch, finishFetch] = useState(false);
  const [nameFilter, changeNameFilter] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((result) => result.json())
        .then((result) => result.results);
      response.forEach((element) => {
        delete element.residents;
      });
      setOgPlanets(response);
      setPlanets(response);
      finishFetch(true);
    }
    fetchData();
  }, [endFetch]);

  const contextInitialValue = {
    data: planets,
    setPlanets,
    filters: {
      filterByName: {
        name: nameFilter,
        changeNameFilter,
      },
    },
  };

  function changePlanetsArray(newPlanets) {
    setPlanets(newPlanets);
  }
  useEffect(() => {
    const newPlanets = ogPlanets
      .filter((planet) => planet.name.includes(nameFilter));
    changePlanetsArray(newPlanets);
  }, [nameFilter]);

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
