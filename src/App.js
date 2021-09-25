import React, { useEffect, useState } from 'react';
import './App.css';
import Context from './context/Context';
import Table from './components/Table';
import FilterInput from './components/FilterInput';
// import fetchApi from './services/fetchApi';

// https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/13/commits/a9447dc7e7c42cd6ef5fbfd7e0ba386e9cab4163
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/43/commits/28b7b0ff5a44b3fd91da38e38c066424d0b8ef00

function App() {
  const [dataPlanets, setdataPlanets] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    },
  });

  const fetchApi = async () => {
    const planetsURL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(planetsURL)
      .then((result) => result.json());
    setdataPlanets(response.results);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const exportData = { setdataPlanets, setFilter, filter, dataPlanets };
  return (
    <Context.Provider value={ exportData }>
      <FilterInput />
      { (dataPlanets.length > 0 && <Table />) }
    </Context.Provider>
  );
}

export default App;
