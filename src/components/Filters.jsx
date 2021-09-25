import React from 'react';
import { useFilter } from '../hooks/hooks';

export default function Filters() {
  const [column, setColumn] = React.useState('population');
  const [comparison, setComparison] = React.useState('maior que');
  const [value, setValue] = React.useState('');
  const { setFilterByName, setFilterBySelectors } = useFilter();

  function handleColumn(event) {
    setColumn(event.target.value);
  }

  function handleComparison(event) {
    setComparison(event.target.value);
  }

  function handleValue(event) {
    setValue(event.target.value);
  }

  function handleClick() {
    setFilterBySelectors(
      column,
      comparison,
      value,
    );
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

  function renderNumericSelectors() {
    return (
      <div>
        <select
          name="column"
          data-testid="column-filter"
          value={ column }
          onChange={ handleColumn }
        >
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
        </select>

        <select
          name="comparison"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ handleComparison }
        >
          <option value="maior que">Maior que</option>
          <option value="menor que">Menor que</option>
          <option value="igual a">Igual a</option>
        </select>

        <input
          type="number"
          name="value"
          data-testid="value-filter"
          value={ value }
          onChange={ handleValue }
        />

        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </div>
    );
  }

  return (
    <div>
      {renderInputName()}
      {renderNumericSelectors()}
    </div>
  );
}
