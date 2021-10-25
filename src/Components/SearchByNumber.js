import React, { useState, useContext } from 'react';
import SwapiContext from '../Context/SwapiContext';

function SearchByNumber() {
  const { filters, setFilters } = useContext(SwapiContext);
  const [currentFilter, setCurrentFilter] = useState({
    value: '',
    column: '',
    comparison: '',
  });

  function setContextFilter(filterByNumericValues) {
    setFilters({
      ...filters,
      filterByNumericValues,
    });
  }

  function setColumnOptions(optionToRemove) {
    const options = ['population', 'orbital_period', 'diameter',
      'rotation_period', 'surface_water'];
    const filteredOptions = options.filter((option) => option !== optionToRemove);
    return filteredOptions
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
  }

  return (
    <div>
      <label htmlFor="column">
        Choose a column:
        <select name="column" data-testid="column-filter" onChange={ handleChange }>
          <option value="" disabled selected hidden>Please Choose...</option>
          { setColumnOptions() }
        </select>
      </label>
      <label htmlFor="comparison">
        Choose a comparison:
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          <option value="" disabled selected hidden>Please Choose...</option>
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
