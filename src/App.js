import React, { useEffect, useState } from 'react';
import './App.css';
import Context from './context/Context';
import Table from './components/Table';
import FetchApi from './services/API';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([{
    column: 'diameter',
    comparison: 'maior que',
    value: 0 }]);
  const planets = { data,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues,
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

  // Esta função serve para atualizar o valor de column e comparison
  const updateColumnComparison = {
    column: 'diameter', value: 0,
  };

  // Filtra column e comparison
  const handlechangeColumnComparison = ({ target }) => {
    updateColumnComparison[target.name] = target.value;
  };

  // on click, as funções atualizam
  const handleClick = () => {
    setFilterByNumericValues([updateColumnComparison]);
  };

  return (
    <Context.Provider value={ planets }>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
      />
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handlechangeColumnComparison }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handlechangeColumnComparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        name="value"
        type="number"
        data-testid="value-filter"
        onChange={ handlechangeColumnComparison }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      { (data.length > 0 && <Table />) }
    </Context.Provider>
  );
}

export default App;

// Source: consulta ao repositório da Elaine
// Source: auxílio do Lima Lima
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/commits/elaine-moreira-project-starwars-planets-search
