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

const sortPlanets = (setFilters) => {
  const column = document.getElementById('column-sort').value;
  const sort = document.querySelector('input[name="sort"]:checked').value;

  setFilters((state) => ({ ...state, order: { column, sort } }));
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
      <div>
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          placeholder="Name"
          onChange={ () => nameFilter(setFilters) }
        />
      </div>
      <div>
        <select name="column-sort" id="column-sort" data-testid="column-sort">
          {columns.map((c) => <option key={ c } value={ c }>{c}</option>)}
        </select>
        <label htmlFor="ASC">
          <input
            type="radio"
            name="sort"
            value="ASC"
            id="ASC"
            data-testid="column-sort-input-asc"
          />
          ASC
        </label>
        <label htmlFor="DESC">
          <input
            type="radio"
            name="sort"
            value="DESC"
            id="DESC"
            data-testid="column-sort-input-desc"
          />
          DESC
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => sortPlanets(setFilters) }
        >
          SORT
        </button>
      </div>
      <div>
        <select name="column" id="column" data-testid="column-filter">
          {availableColumns.map((c) => <option key={ c } value={ c }>{c}</option>)}
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
