import React, { useEffect, useState } from 'react';
import './App.css';
import Context from './context/Context';
import Table from './components/Table';

function App() {
  // criando os estados
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [filterByNumericValues, setfilterByNumericValues] = useState([{
    column: 'diameter',
    comparison: 'maior que',
    value: 0 }]);
  const planets = {
    data,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues,
    },
  };

  // fazendo requisiçao da api usando useEffect
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

  // criando uma funçao para atualizar column e comparison
  const updateColumnComparison = {
    column: 'diameter', value: 0,
  };

  // criando uma funçao para fazer a filtragem de column e comparison
  const handlechangeColumnComparison = ({ target }) => {
    updateColumnComparison[target.name] = target.value;
  };

  // criando mais uma funçao para ao clicar no botao, as mudanças escolhidas sejam atualizadas/alteradas
  const handleClick = () => {
    setfilterByNumericValues([updateColumnComparison]);
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
      {/* criando selects pedidos no requisito 3 */}
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
