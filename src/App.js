import React from 'react';
import './App.css';
import { useState } from 'react';
import Context from './context/Context';

https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/13/commits/a9447dc7e7c42cd6ef5fbfd7e0ba386e9cab4163

function App() {

  const [planets, setPlanets] = useState([1]);

  const fetchApi = async () => {
    const planetsURL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(planetsURL)
      .then((result) => result.json());
    setPlanets(response.results);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Context.Provider>
      <span>Primeiro Commit</span>
    </Context.Provider>
  );
}

export default App;
