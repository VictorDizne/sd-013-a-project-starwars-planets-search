import React, { useContext, useState } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

// Criando o componente funcional Filters - solicitado Requisito 03
const Filters = () => {
  const { filters: {
    filterByName: { name },
    filterByNumericValues,
  },
  setName,
  setFiltersByNumericValues,
  setOrder,
  headers,
  } = useContext(StarWarsContext);

  // Cria um array com as opções do ComboList
  const columns = ['population', 'orbital_period', 'diameter', 'rotation_period',
    'surface_water'];
  // Cria um array com as comparações do ComboList
  const comparisons = ['maior que', 'menor que', 'igual a'];

  // Criando o getter e o setter do localColumn e dando o valor inicial de "population"
  const [column, setColumn] = useState(columns[0]);
  // Criando o getter e o setter do localComparison e dando o valor inicial de "maior que"
  const [comparison, setComparison] = useState(comparisons[0]);
  // Criando o getter e o setter do localValue e dando o valor inicial 0 "0"
  const [value, setValue] = useState('0');
  // Criando o getter e o setter do cabeçalho
  const [header, setHeader] = useState('name');
  // Criando o getter e o setter do ordenamento
  const [sort, setSort] = useState('ASC');

  return (
    <div>
      <hr />
      <h3>Filtro de Dados:</h3>
      <label htmlFor="name">
        Nome do Planeta:
        <input
          name="name"
          value={ name }
          data-testid="name-filter"
          type="text"
          onChange={ ({ target: { value: valor } }) => setName(valor) }
        />
      </label>
      <p />

      {/* ComboList population, orbital_period, diameter, rotation_period
       e surface_water */}
      <label htmlFor="column-filter">
        Coluna de filtro:
        <select
          value={ column }
          name="column-filter"
          data-testid="column-filter"
          onChange={ ({ target: { value: valor } }) => setColumn(valor) }
        >
          {/* Como há a exclusão de dados que estão participando de filtros, então foi
          realizado um filters e map para montagem da ComboList */}
          {/* Faz um filtro se o elemento não está incluso nos Filtros,
           controlado pelo unavailableFilters */}
          {
            filterByNumericValues
              .reduce((acc, filter) => acc
                .filter((c) => c !== filter.column), columns)
              .map((coluna, index) => (
                <option value={ coluna } key={ index }>{ coluna }</option>
              ))
          }
        </select>
      </label>
      <p />

      {/* ComboList de comparação "maior que", "menor que", "igual a" */}
      <label htmlFor="comparison-filter">
        Comparação:
        <select
          value={ comparison }
          name="comparison-filter"
          data-testid="comparison-filter"
          onChange={ ({ target: { value: valor } }) => setComparison(valor) }
        >
          {/* Como há a exclusão de dados que estão participando de filtros, então foi
          realizado um filters e map para montagem da ComboList */}
          {
            comparisons
              .map((comparacao, index) => (
                <option value={ comparacao } key={ index }>{comparacao}</option>
              ))
          }
        </select>
      </label>
      <p />

      {/* Valor a ser definido conforme Primeira ComboList */}
      <label htmlFor="value-filter">
        Valor conforme coluna à ser filtrada:
        <input
          value={ value }
          type="number"
          name="value-filter"
          data-testid="value-filter"
          onChange={ ({ target: { value: valor } }) => setValue(valor) }
        />
      </label>

      {/* Botão para setar o state dos filtros, quando clicar */}
      <button
        type="button"
        data-testid="button-filter"
        disabled={ !value }
        onClick={ () => {
          // Atualiza o FiltersByNumericValues com os valores do novo filtro
          filterByNumericValues.push({ column, comparison, value });
          setFiltersByNumericValues([...filterByNumericValues]);

          setColumn(filterByNumericValues.reduce((acc, filter) => acc
            .filter((c) => c !== filter.column), columns)[0]);
        } }
      >
        Filtrar
      </button>
      <p />
      <span>Campo de filtragem:</span>
      <select
        value={ header }
        data-testid="column-sort"
        onChange={ ({ target: { value: v } }) => setHeader(v) }
      >
        {headers
          .map((h, i) => <option value={ h } key={ i }>{h}</option>)}
      </select>

      <label htmlFor="asc">
        <input
          defaultChecked
          name="order"
          value="ASC"
          data-testid="column-sort-input-asc"
          type="radio"
          id="asc"
          onChange={ ({ target: { value: v } }) => setSort(v) }
        />
        Ascendente
      </label>

      <label htmlFor="desc">
        <input
          name="order"
          value="DESC"
          data-testid="column-sort-input-desc"
          type="radio"
          id="desc"
          onChange={ ({ target: { value: v } }) => setSort(v) }
        />
        Descendente
        {'  '}
      </label>

      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => {
          setOrder({ column: header, sort });
        } }
      >
        Filtrar
      </button>
      <hr />
    </div>
  );
};

export default Filters;
