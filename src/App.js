import React, { useEffect, useState } from 'react';
import './App.css';
import Context from './context/Context';
import Table from './components/Table';

function App() {
  // criando os estados
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const planets = {
    data,
    filters: {
      filterByName: {
        name,
      },
    },
  };

  useEffect(() => {
    const getData = async () => {
      const planetsEndpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(planetsEndpoint).then((result) => result.json());
      setData(results);
    };
    getData();
  }, []);

  // criando uma funçao para o campo de texto alterar o nome do planeta
  const handleChange = ({ target }) => {
    setName(target.value);
  };

  return (
    <Context.Provider value={ planets }>
      {/* <Table /> fazer tipo um js com adiçao com a tabela usando o lenght para o numero
      de planetas */}
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
