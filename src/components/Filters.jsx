import React from 'react';
import { useFilter } from '../hooks/hooks';

export default function Filters() {
  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const [column, setColumn] = React.useState(columnOptions[0]);
  const [comparison, setComparison] = React.useState('maior que');
  const [value, setValue] = React.useState('');
  const {
    setFilterByName,
    setFilterBySelectors,
    planetFilter,
    removeFilter,
  } = useFilter();
  const selectedFilters = planetFilter.filters.filterByNumericValues;
  const columnFilters = selectedFilters.map((filter) => filter.column);
  const filterdColumnOptions = columnOptions
    .filter((option) => !columnFilters.includes(option));

  React.useEffect(() => {
    setColumn(filterdColumnOptions[0]);
  }, [filterdColumnOptions.length]); // eslint-disable-line

  function handleColumn(event) {
    setColumn(event.target.value);
  }

  function handleComparison(event) {
    setComparison(event.target.value);
  }

  function handleValue(event) {
    setValue(event.target.value);
  }

  function renderInputName() {
    return (
      <div>
        <label htmlFor="planet-name">
          Nome do Planeta
          <input
            type="text"
            name="planet-name"
            id="planet-name"
            data-testid="name-filter"
            onChange={ (event) => setFilterByName(event.target.value) }
          />
        </label>
      </div>
    );
  }

  function renderColumnSelect() {
    return (
      <select
        name="column"
        id="column"
        data-testid="column-filter"
        value={ column }
        onChange={ handleColumn }
        required
      >
        { filterdColumnOptions.map((option) => (
          <option key={ option } value={ option }>{option}</option>))}
      </select>
    );
  }

  function renderComparisonSelect() {
    return (
      <select
        name="comparison"
        id="comparison"
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ handleComparison }
        required
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
    );
  }

  function renderInputValue() {
    return (
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        value={ value }
        onChange={ handleValue }
        required
      />
    );
  }

  function handleRemoveFilter(id) {
    removeFilter(id);
  }

  function renderSelectedFilters() {
    return selectedFilters.map((filter, index) => (
      <div key={ index } data-testid="filter">
        <div>
          <p>{ filter.column }</p>
          <p>{ filter.comparison }</p>
          <p>{ filter.value }</p>
        </div>

        <button
          type="button"
          onClick={ () => handleRemoveFilter(filter.column) }
        >
          X
        </button>
      </div>
    ));
  }

  function handleClick() {
    if (filterdColumnOptions.length === 0) return;

    setFilterBySelectors(
      column,
      comparison,
      value,
    );
  }

  return (
    <div>
      {renderInputName()}

      <div>
        {renderColumnSelect()}
        {renderComparisonSelect()}
        {renderInputValue()}

        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </div>

      {renderSelectedFilters()}
    </div>
  );
}
