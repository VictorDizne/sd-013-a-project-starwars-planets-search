import React, { useState, useContext } from 'react';
import SwapiContext from '../Context/SwapiContext';

function SearchByNumber() {
  const { filters, setFilters } = useContext(SwapiContext);
  const [columnOptions, setColumnOptions] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [currentFilter, setCurrentFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  function setContextFilter(currentValue) {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, currentValue],
    });
  }

  function ShowcolumnOptions() {
    return columnOptions
      .map((option, index) => <option value={ option } key={ index }>{ option }</option>);
  }

  function setFilterOptions() {
    const columns = ['maior que', 'igual a', 'menor que'];
    return columns
      .map((column, index) => <option value={ column } key={ index }>{ column }</option>);
  }

  function handleChange({ target: { name, value } }) {
    setCurrentFilter({ ...currentFilter, [name]: value });
  }

  function handleClick() {
    setContextFilter(currentFilter);
    const columnsFiltered = columnOptions
      .filter((option) => option !== currentFilter.column);
    setColumnOptions(columnsFiltered);
  }

  return (
    <div>
      <label htmlFor="column">
        Choose a column:
        <select name="column" data-testid="column-filter" onChange={ handleChange }>
          { ShowcolumnOptions() }
        </select>
      </label>
      <label htmlFor="comparison">
        Choose a comparison:
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          { setFilterOptions() }
        </select>
      </label>
      <label htmlFor="value" onChange={ handleChange }>
        Type a number:
        <input type="number" name="value" data-testid="value-filter" />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filter
      </button>
    </div>
  );
}

export default SearchByNumber;
