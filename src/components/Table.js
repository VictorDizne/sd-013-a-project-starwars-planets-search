import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import Th from './Th';
import Tr from './Tr';
import Filters from './Filters';

function Table() {
  const { data, filters, setFilters } = useContext(PlanetContext);
  const { filterByName: { name } } = filters;
  const { filterByNumericValues } = filters;
  const {
    column,
    comparison,
    value } = filterByNumericValues[filterByNumericValues.length - 1];
  const titles = data.length > 0 ? Object.keys(data[0]) : [];
  const content = data.length > 0 ? data : [];

  function handleChange({ target }) {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { target: { children } } = e;
    if (filterByNumericValues[0].column !== '') {
      setFilters({
        ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          {
            column: children[1].value,
            comparison: children[2].value,
            value: children[3].value,
          },
        ],
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
    const findColumn = Object.values(children[1].children)
      .findIndex((option) => option.value === children[1].value);
    children[1].children[findColumn].remove();
    // console.log(children[1]);
  }

  function handleClick(e) {
    const { target: { id } } = e;
    if (filterByNumericValues.length > 1) {
      setFilters({
        ...filters,
        filterByNumericValues: filterByNumericValues
          .filter((filter) => filter.column !== id),
      });
    } else {
      setFilters({
        ...filters,
        filterByNumericValues:
        [{
          column: '',
          comparison: '',
          value: '',
        }],
      });
    }
    const columns = document.querySelector('#column');
    const options = document.createElement('option');
    options.value = id;
    options.textContent = id;
    columns.appendChild(options);
    // console.log(id);
  }

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <input type="text" data-testid="name-filter" onChange={ handleChange } />
        <select data-testid="column-filter" id="column">
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
        <input type="number" data-testid="value-filter" />
        <button type="submit" data-testid="button-filter">Filtrar</button>
      </form>
      <ol>
        {filterByNumericValues
          .map((filter, i) => (<Filters
            key={ i }
            filter={ filter }
            handleClick={ handleClick }
          />))}
      </ol>
      <table>
        <thead>
          <tr>{titles.map((title, index) => <Th Key={ index } title={ title } />)}</tr>
        </thead>
        <tbody>
          { content
            .filter((info) => info.name.includes(name))
            .filter((info) => (
              comparison === 'maior que' ? info[column] > Number(value) : info))
            .filter((info) => (
              comparison === 'menor que' ? info[column] < Number(value) : info))
            .filter((info) => (
              comparison === 'igual a' ? info[column] === value : info))
            .map((info, index) => <Tr Key={ index } data={ info } />)}
        </tbody>
      </table>
    </>
  );
}

export default Table;
