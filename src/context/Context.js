import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import appContext from './appcontext';

export default function Provider({ children }) {
  const [api, setApi] = useState([]);
  // const [apiClear, setApiClear] = useState([]);
  const [nameFilter, setName] = useState('');
  // const [planetsFilters, setPlanetsFilter] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((res) => res.json());
      // console.log(results);
      setApi(results);
    }
    fetchApi();
  }, []);

  /* function clearFilters() {
    setApi(apiClear);
    setName('');
  } */

  function setNewsPlanets(planets) {
    setApi(planets);
    // setPlanetsFilter(planets);
    console.log(planets);
  }

  /* useEffect(() => {
    async function fetchApi() {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((res) => res.json());
      console.log(results);
      if (nameFilter === '') {
        setApi(results);
      } else {
        setApi(results
          .filter((planet) => planet
            .name.toLowerCase().includes(nameFilter.toLowerCase())));
      }
    }
    fetchApi();
  }, [nameFilter]); */

  useEffect(() => {
    const newArr = api
      .filter((planet) => planet.name.toLowerCase().includes(nameFilter.toLowerCase()));
    setNewsPlanets(newArr);
    async function fetchApi() {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((res) => res.json());
      console.log(results);
      if (nameFilter === '') {
        setApi(results);
      } else {
        setApi(results
          .filter((planet) => planet
            .name.toLowerCase().includes(nameFilter.toLowerCase())));
      }
    }
    fetchApi();
  }, [nameFilter]);

  const contextValue = {
    api,
    filters: {
      filterbyname: {
        name: nameFilter,
        setName,
      },
    },
  };
  return (
    <appContext.Provider value={ contextValue }>
      {children}
    </appContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
