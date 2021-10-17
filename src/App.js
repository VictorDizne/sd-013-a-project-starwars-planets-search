import React, { useEffect, useState } from 'react';
import './App.css';
import MyContext from './context/Context';
import Table from './components/Table';
import FetchApi from './services/API';

function App() {
  const [data, setData] = useState([1]);
  const planets = { data };
  useEffect(() => {
    const getData = async () => {
      const { results } = await fetch({ FetchApi })
        .then((result) => result.json());
      setData(results);
    };
    getData();
  }, []);

  return (
    <MyContext.Provider value={ planets }>
      <Table />
    </MyContext.Provider>
  );
}

export default App;

// Source: consulta ao repositório da Elaine
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/commits/elaine-moreira-project-starwars-planets-search
