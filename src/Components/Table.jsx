// import React from 'react';
import React, { useContext } from 'react';
import MyContext from '../Contexto/MyContext';
import FilterRemove from './FilterRemove';
import Tr from './Tr';

function Table() {
  const { data, filters, setFilters } = useContext(MyContext);
  const { filterByName: { name }, filterByNumericValues } = filters; // questão3
  const {
    column,
    comparison,
    value,
  } = filterByNumericValues[filterByNumericValues.length - 1]; // questão3

  const header = data.length > 0 ? Object.keys(data[0]) : [];

  const linhas = data.length > 0 ? data : [];

  function hanfleChange({ target }) { // questão 2
    setFilters({
      ...filters,
      filterByName: { name: target.value },
    });
  }

  function handleSubmit(evento) { // questão 3 e 4 função para form
    evento.preventDefault();
    const { target: { children } } = evento;

    if (filterByNumericValues[0].column !== '') { // questão 4
      setFilters({
        ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          {
            column: children[1].value,
            comparison: children[2].value,
            value: children[3].value,
          }],
      });
    } else { // questão4
      setFilters({
        ...filters,
        filterByNumericValues: [{
          column: children[1].value,
          comparison: children[2].value,
          value: children[3].value,
        }],
      });
    }
    const busColumn = Object.values(children[1].children) // questão4
      .findIndex((option) => option.value === children[1].value);
    children[1].children[busColumn].remove();
  }
  // o filterByNumericValues é um array de objetos, com o primeiro objeto vazio. O if verifica se não existe
  // um primeiro filtro/objeto com o valor vazio, se não existir ele adiciona um novo objeto em uma nova posição.
  // se existir ele sobrescreve o obejo vazio na posição zero.

  // a const busColumn ele busca a posição do valor escolhido pelo usuario no select, para que consiga utilizar a função
  // remove no option correto, fazendo com que o usuario não possa selecionar novamente.
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="name-filter">
          <input
            type="text"
            data-testid="name-filter"
            placeholder="Planet"
            onChange={ hanfleChange }
          />
        </label>
        <select data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select data-testid="comparison-filter">
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
        />
        <button type="submit" data-testid="button-filter"> Filtrar </button>
      </form>
      <section>
        <ol>
          { filterByNumericValues
            .map((filter, index) => <FilterRemove key={ index } filter={ filter } />)}
        </ol>
      </section>
      <table>
        <thead>
          <tr>{ header.map((title) => <th key={ title }>{ title }</th>)}</tr>
        </thead>
        <tbody>
          { linhas
            .filter((allData) => allData.name.includes(name)) // questão 2
            .filter((maior) => (
              comparison === 'maior que' ? maior[column] > Number(value) : maior)) // questão3
            .filter((menor) => (
              comparison === 'menor que' ? menor[column] < Number(value) : menor)) // questão3
            .filter((igual) => (
              comparison === 'igual a' ? igual[column] === value : igual)) // questão3
            .map((allData) => <Tr key={ allData.name } allData={ allData } />)}
        </tbody>
      </table>
    </div>
  );
  // No primeiro filter ele filtra apenas os valores digitados pelo usuario / retornando nome de planeta
  // No segundo ele faz a comparação se o comparison for igual a (maior que) é retornado a coluna maior que o valor,
  // caso contrario volta ele mesmo.
  // No map depois dos filtros renderiza o componente tr com as informaçãoes
}

export default Table;
