import React, { useEffect, useState } from 'react';
import './App.css';
import Context from './context/Context';
// import FilterInput from './components/FIlterInput';
import Table from './components/Table';

// https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/13/commits/a9447dc7e7c42cd6ef5fbfd7e0ba386e9cab4163
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/43/commits/28b7b0ff5a44b3fd91da38e38c066424d0b8ef00

function App() {
  const [dataPlanets, setdataPlanets] = useState([1]);
  const [name, setName] = useState('');
  
  useEffect(() => {
    const fetchApi = async () => {
      const planetsURL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(planetsURL)
      .then((result) => result.json());
      setdataPlanets(response.results);
    };
    fetchApi();
  }, []);

  const handleChange = ({ target }) => setName(target.value);
  
  const exportData = { dataPlanets, filters:{ filterByName: { name } } };
  return (
    <Context.Provider value={ exportData }>
      <input 
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
      />  
      {/* JavaScript para verificar se há algo no data e só depois renderizar table */}
      { (dataPlanets.length > 0 && <Table />) }
    </Context.Provider>
  );
}

export default App;
