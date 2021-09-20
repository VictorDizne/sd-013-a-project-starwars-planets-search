import React, { useContext, useState } from 'react';
import starWarsContext from '../Context';

function NumberFilter() {
  const { filters, setFilters } = useContext(starWarsContext);
  const [columnOptions, setColumnOptions] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [currentFilter, setCurrentFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });
  const [filtersSelected, setFiltersSelected] = useState([]);
  // Sets the current filter at the context
  function setContextFilter(currentValue) {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, currentValue],
    });
  }
  // Creates column options
  function ShowcolumnOptions() {
    return columnOptions
      .map((option, index) => <option value={ option } key={ index }>{ option }</option>);
  }
  // Creates filter options
  function setFilterOptions() {
    const columns = ['maior que', 'igual a', 'menor que'];
    return columns
      .map((column, index) => <option value={ column } key={ index }>{ column }</option>);
  }
  function handleChange({ target: { name, value } }) {
    setCurrentFilter({ ...currentFilter, [name]: value });
  }

  function removeFilter(filterRemoved) {
    // Removes the filter already used from the options
    setFiltersSelected(filtersSelected.filter((filter) => filter !== filterRemoved));
    // Fetches the Context Filter and removes the filtering option clicked
    const { filterByNumericValues } = filters;
    const newNumericValues = filterByNumericValues
      .filter((filter) => filter !== filterRemoved);
    // Sets the filterByNumericValues key with the new value filtered above
    setFilters({ ...filters, filterByNumericValues: newNumericValues });
    // Sets the available filters again
    setColumnOptions([...columnOptions, filterRemoved.column]);
  }

  function showSelectedFilters() {
    const filtersToShow = filtersSelected
      .map((filter, index) => (
        <div key={ index } data-testid="filter">
          <p>
            { `${filter.column} ${filter.comparison} ${filter.value}` }
          </p>
          <button type="button" onClick={ () => removeFilter(filter) }>
            X
          </button>
        </div>));
    return filtersToShow;
  }

  function handleClick() {
    setContextFilter(currentFilter);
    // Removes the column current selected from the columnOptions filter
    const columnsFiltered = columnOptions
      .filter((option) => option !== currentFilter.column);
    setColumnOptions(columnsFiltered);
    setFiltersSelected([...filtersSelected, currentFilter]);
  }

  return (
    <div>
      <label htmlFor="column">
        Choose a column to compare:
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
      { showSelectedFilters() }
    </div>
  );
}

export default NumberFilter;
