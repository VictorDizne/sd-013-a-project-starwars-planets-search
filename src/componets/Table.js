import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import Th from './Th';
import Tr from './Tr';

function Table() {
  const { data, filters, setFilters } = useContext(DataContext);
  const { filterByNumericValues } = filters;
  const {
    column,
    comparison,
    value,
  } = filterByNumericValues;
  const titles = data.length > 0 ? Object.keys(data[0]) : [];
  const { filterByName: { name } } = filters;
  // console.log(filters.filterByName.name);
  const valueData = data.length > 0 ? data : [];

  function handleChange({ target }) {
    setFilters({ ...filters, filterByName: { name: target.value } });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { target: { children } } = e;
    // console.log(children[1].value);
    setFilters({
      ...filters,
      filterByNumericValues: [{
        column: children[1].value,
        comparison: children[2].value,
        value: children[3].value,
      }],
    });
  }

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ handleChange }
        />
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
        <input type="number" data-testid="value-filter" />
        <button type="submit" data-testid="button-filter">filtrar</button>
      </form>
      <table>
        <thead>
          <tr>
            {titles.map((title, index) => <Th key={ index } title={ title } />)}
          </tr>
        </thead>
        <tbody>
          {valueData
            .filter((obj) => obj.name.includes(name))
            .filter((obj) => (
              comparison === 'maior que' ? obj[column] > Number(value) : obj
            ))
            .filter((obj) => (
              comparison === 'menor que' ? obj[column] < Number(value) : obj
            ))
            .filter((obj) => (
              comparison === 'igual a' ? obj[column] === value : obj
            ))
            .map((obj, index) => <Tr key={ index } value={ obj } />)}
        </tbody>
      </table>
    </>
  );
}

export default Table;
