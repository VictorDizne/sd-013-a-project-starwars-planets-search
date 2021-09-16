import React, { useContext, useState, useEffect } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

const nameFilter = (setFilters) => {
  const name = document.getElementById('name-filter').value;
  setFilters((state) => ({ ...state, filterByName: { name } }));
};

const numericFilter = (evt, setFilters) => {
  const filterRow = evt.target.parentElement.childNodes;
  const column = filterRow[0].value;
  const comparison = filterRow[1].value;
  const { value } = filterRow[2];

  const newFilter = { column, comparison, value };

  setFilters((state) => ({
    ...state,
    filterByNumericValues: [...state.filterByNumericValues, newFilter],
  }));
};

const delFilter = ({ target }, { filterByNumericValues }, setFilters) => {
  const column = target.parentElement.id;
  const updatedNumFilters = filterByNumericValues.filter((f) => f.column !== column);

  setFilters((state) => ({
    ...state,
    filterByNumericValues: updatedNumFilters,
  }));
};

const columns = ['population', 'rotation_period', 'orbital_period', 'diameter',
  'surface_water'];

function Filters() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const [availableColumns, setAvailableColumns] = useState(columns);

  useEffect(() => {
    const appliedNumFilters = filters.filterByNumericValues.map((z) => z.column);
    const remainingColumns = columns.filter((c) => !appliedNumFilters.includes(c));
    setAvailableColumns(remainingColumns);
  }, [filters]);

  return (
    <div>
      <input
        type="text"
        id="name-filter"
        data-testid="name-filter"
        placeholder="Name"
        onChange={ () => nameFilter(setFilters) }
      />
      <div>
        <select name="column" id="column" data-testid="column-filter">
          {availableColumns.map((c) => (
            <option key={ c } value={ c }>{c}</option>
          ))}
        </select>
        <select name="comparison" id="comparison" data-testid="comparison-filter">
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input type="number" id="value" data-testid="value-filter" placeholder="Value" />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ (evt) => numericFilter(evt, setFilters) }
        >
          Apply
        </button>
      </div>
      <div>
        {filters.filterByNumericValues.map((f) => (
          <div key={ f.column } id={ f.column } data-testid="filter">
            <span>{`${f.column} | ${f.comparison} | ${f.value}`}</span>
            <button type="button" onClick={ (e) => delFilter(e, filters, setFilters) }>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filters;
