import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterTable() {
  const getContext = useContext(PlanetsContext);
  const { filterTable } = useContext(PlanetsContext);
  const filterByNumericValuesRemove = filterTable.filters.filterByNumericValues;

  function handleChangeFilter({ target: { value } }) {
    getContext.handleFilterTable(value);
  }

  function handleSubmitFilter(event) {
    event.preventDefault();
    const columnF = event.target.children[1].value;
    const comparisonF = event.target.children[2].value;
    const valueF = event.target.children[3].value;

    getContext.handleAddFilterTable({
      column: columnF,
      comparison: comparisonF,
      value: valueF,
    });
  }

  return (
    <form onSubmit={ handleSubmitFilter }>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Filtrar Planeta"
        onChange={ handleChangeFilter }
      />
      <select data-testid="column-filter" name="column">
        {
          filterByNumericValuesRemove
            .find((filterRemove) => filterRemove.column === 'population')
            ? '' : <option value="population">population</option>
        }
        {
          filterByNumericValuesRemove
            .find((filterRemove) => filterRemove.column === 'orbital_period')
            ? '' : <option value="orbital_period">orbital_period</option>
        }
        {
          filterByNumericValuesRemove
            .find((filterRemove) => filterRemove.column === 'diameter')
            ? '' : <option value="diameter">diameter</option>
        }
        {
          filterByNumericValuesRemove
            .find((filterRemove) => filterRemove.column === 'rotation_period')
            ? '' : <option value="rotation_period">rotation_period</option>
        }
        {
          filterByNumericValuesRemove
            .find((filterRemove) => filterRemove.column === 'surface_water')
            ? '' : <option value="surface_water">surface_water</option>
        }
      </select>
      <select data-testid="comparison-filter" name="comparison">
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input type="number" data-testid="value-filter" name="value" />
      <button
        type="submit"
        data-testid="button-filter"
      >
        Adicionar Filtro
      </button>
    </form>
  );
}

export default FilterTable;
