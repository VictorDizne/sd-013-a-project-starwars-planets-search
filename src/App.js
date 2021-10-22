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
      const { results } = await FetchApi();
      results.forEach((planet) => {
        delete planet.residents;
      });
      setData(results);
    };
    getData();
  }, []);

  // useEffect(() => {
  //   console.log('Rodei a cada atualização');
  // });

  // useEffect(() => {
  //   console.log('Rodei no primeiro render ');
  // }, []);

  // useEffect(() => {
  //   console.log('Rodei na atualização do state');
  //   return () => {
  //     console.log('Roda após desmontar');
  //   };
  // }, [data]);

  console.log(FetchApi());

  return (
    <MyContext.Provider value={ planets }>
      <Table />
    </MyContext.Provider>
  );
}

export default App;

// Source: consulta ao repositório da Elaine
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/commits/elaine-moreira-project-starwars-planets-search
