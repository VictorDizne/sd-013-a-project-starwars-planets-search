import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';
import StarWarsContext from './contexts/StarWarsContext';

// Agradecimentos ao meu amigo Rogério P. da Silva Pela aula
// de Context API e por me ajudar a fazer minha loucura funcionar.

const contextState = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

export default function App() {
  const [context, setContext] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const returnFetch = await request.json();
      setContext({ ...contextState, data: returnFetch.results });
    };
    fetchAPI();
  }, []);

  return (
    <StarWarsContext.Provider value={ { context, setContext } }>
      <Filter />
      <Table />
    </StarWarsContext.Provider>
  );
}
