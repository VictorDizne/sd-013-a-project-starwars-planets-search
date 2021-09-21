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
  const [filtersInUse, setfiltersInUse] = useState([]);
  // Adds the current filter to the context filter.filterByNumericValues
  function setContextFilter(currentValue) {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, currentValue],
    });
  }
  // Creates column options according to the columnOptions state, I do it this way
  // because the columnOptions might be modified later and we need a dynamic list
  function ShowcolumnOptions() {
    return columnOptions
      .map((option, index) => <option value={ option } key={ index }>{ option }</option>);
  }
  // Creates filter options. This one will not be modified, so we can specify a constant
  // within the function
  function setFilterOptions() {
    const columns = ['maior que', 'igual a', 'menor que'];
    return columns
      .map((column, index) => <option value={ column } key={ index }>{ column }</option>);
  }
  // This is a common handleChange. It sets the filter being changed to the component's state
  function handleChange({ target: { name, value } }) {
    setCurrentFilter({ ...currentFilter, [name]: value });
  }

  function removeFilter(filterRemoved) {
    // After filtering, the user might want to remove the filter. When you click the X
    // button, this functions removes the filter clicked from the filtersInUse
    setfiltersInUse(filtersInUse.filter((filterShown) => filterShown !== filterRemoved));
    // Fetches the Context Filter and removes the filtering option clicked, so it stops
    // filtering inside the Provider
    const { filterByNumericValues } = filters;
    const newNumericValues = filterByNumericValues
      .filter((filter) => filter !== filterRemoved);
    setFilters({ ...filters, filterByNumericValues: newNumericValues });
    // The option removed becomes available again
    setColumnOptions([...columnOptions, filterRemoved.column]);
  }

  function showSelectedFilters() {
    const filtersToShow = filtersInUse
      .map((filter, index) => (
        <div key={ index } data-testid="filter" className="selected-filter">
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
    // Removes the filter already used from the options. If the user has already filtered
    // by population, we don't want the population filter to be still available
    const columnsFiltered = columnOptions
      .filter((option) => option !== currentFilter.column);
    setColumnOptions(columnsFiltered);
    // Sets first option available
    setCurrentFilter({ ...currentFilter, column: columnsFiltered[0] });
    // Adds the filter to this arrays so it can be shown and the user is able to remove it
    setfiltersInUse([...filtersInUse, currentFilter]);
  }

  return (
    <div className="number-filters-area">
      <div className="number-filter">
        <h3>Choose a column to compare:</h3>
        <label htmlFor="column">
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
      <div className="selected-filters">
        { showSelectedFilters() }
      </div>
    </div>
  );
}

export default NumberFilter;
