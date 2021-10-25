import React from 'react';

function FilterOptions() {
  return (
    <div>
      <select
        name="column"
        id="column"
        data-testid="column-filter"
      >
        <option key="test">test</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
      >
        Adcionar filtro
      </button>
    </div>
  );
}

export default FilterOptions;
