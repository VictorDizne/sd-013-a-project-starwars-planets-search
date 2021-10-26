import React, { useEffect, useState } from 'react';
import './App.css';
import Context from './context/Context';
import Table from './components/Table';
import FetchApi from './services/API';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const planets = { data,
    filters: {
      filterByName: {
        name,
      },
    },
  };

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

  // handleChange criada com a finalidade do campo de texto
  // alterar o nome do planeta

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  // useEffect(() => {
  //   console.log('Rodei a cada atualização');
  // }); --

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
    <Context.Provider value={ planets }>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
      />
      { (data.length > 0 && <Table />) }
    </Context.Provider>
  );
}

export default App;

// Source: consulta ao repositório da Elaine
// Source: auxílio do Lima Lima
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/commits/elaine-moreira-project-starwars-planets-search
