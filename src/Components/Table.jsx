// import React from 'react';
import React, { useContext } from 'react';
import MyContext from '../Contexto/MyContext';
import Tr from './Tr';

function Table() {
  const { data, filters, setFilters } = useContext(MyContext);
  const { filterByName: { name }, filterByNumericValues } = filters;
  const {
    column,
    comparison,
    value,
  } = filterByNumericValues[filterByNumericValues.length - 1];

  const header = data.length > 0 ? Object.keys(data[0]) : [];

  const linhas = data.length > 0 ? data : [];

  function hanfleChange({ target }) {
    setFilters({
      ...filters,
      filterByName: { name: target.value },
    });
  }

  function handleSubmit(evento) {
    evento.preventDefault();
    const { target: { children } } = evento;

    if (filterByNumericValues[0].column !== '') {
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
    } else {
      setFilters({
        ...filters,
        filterByNumericValues: [{
          column: children[1].value,
          comparison: children[2].value,
          value: children[3].value,
        }],
      });
    }
    const busColumn = Object.values(children[1].children)
      .findIndex((option) => option.value === children[1].value);
    children[1].children[busColumn].remove();
  }
  // o filterByNumericValues é um array de objetos, com o primeiro objeto vazio. O if verifica se não existe
  // um primeiro objeto com o valor vazio, se não existir ele adiciona um novo objeto em uma nova posição.
  // se existir ele sobrescreve o obejo vazio na posição zero.

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
      <table>
        <thead>
          <tr>{ header.map((title) => <th key={ title }>{ title }</th>)}</tr>
        </thead>
        <tbody>
          { linhas
            .filter((allData) => allData.name.includes(name))
            .filter((maior) => (
              comparison === 'maior que' ? maior[column] > Number(value) : maior))
            .filter((menor) => (
              comparison === 'menor que' ? menor[column] < Number(value) : menor))
            .filter((igual) => (
              comparison === 'igual a' ? igual[column] === value : igual))
            .map((allData) => <Tr key={ allData.name } allData={ allData } />)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
