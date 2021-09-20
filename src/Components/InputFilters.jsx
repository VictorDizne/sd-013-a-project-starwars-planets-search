import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const options = ['population', 'rotation_period', 'orbital_period', 'diameter',
  'surface_water'];
const range = ['maior que', 'menor que', 'igual a'];
const sortMethod = ['ASC', 'DESC'];

function InputFilters() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;

  const [comparison, setComparison] = useState('maior que');
  const [columnOptions, setColumnOptions] = useState(options);
  const [column, setColumn] = useState(columnOptions[0]);
  const [value, setNumberValue] = useState(0);

  const [columnSort, setColumnSort] = useState('name');
  const [sort, setSort] = useState('ASC');

  const setSearch = (name) => {
    setFilters((state) => ({ ...state, filterByName: { name } }));
  };

  const submitSort = () => {
    setFilters((state) => ({ ...state, order: { column: columnSort, sort } }));
  };

  const submitNumericFilters = () => {
    if (columnOptions.length !== 0) {
      setFilters((state) => ({
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, { column, comparison, value }] }));
    }
  };

  useEffect(() => {
    setColumn(columnOptions[0]);
  }, [columnOptions]);

  useEffect(() => {
    const filterTypes = filterByNumericValues.map((type) => type.column);
    const newOptions = options.filter((option) => !filterTypes.includes(option));
    setColumnOptions(newOptions);
  }, [filterByNumericValues, filters]);

  const deleteFilter = (columnType) => {
    const test = filterByNumericValues.findIndex((type) => type.column === columnType);
    console.log(filterByNumericValues[test]);
    setFilters((state) => ({
      ...state,
      filterByNumericValues: [...state.filterByNumericValues.filter((item) => {
        // source https://stackoverflow.com/a/57519954
        return item !== filterByNumericValues[test];
      })] }));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={ (e) => setSearch(e.target.value) }
          data-testid="name-filter"
        />
      </div>
      <div>
        <select
          data-testid="column-sort"
          onChange={ ({ target }) => setColumnSort(target.value) }
        >
          { options
            .map((option) => <option key={ option } value={ option }>{option}</option>) }
        </select>
        { sortMethod
          .map((option) => (
            <label htmlFor={ option } key={ option }>
              <input
                type="radio"
                name="sort"
                key={ option }
                value={ option }
                onChange={ ({ target }) => setSort(target.value) }
                data-testid={ `column-sort-input-${option.toLowerCase()}` }
              />
              {option}
            </label>
          )) }
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => submitSort() }
        >
          Filtrar
        </button>
      </div>
      <div>
        <select
          data-testid="column-filter"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          { columnOptions
            .map((option) => <option key={ option } value={ option }>{option}</option>) }
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => setComparison(target.value) }
        >
          { range
            .map((option) => <option key={ option } value={ option }>{option}</option>) }
        </select>
        <input
          type="number"
          id="value"
          data-testid="value-filter"
          placeholder="Value"
          onChange={ ({ target }) => setNumberValue(target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => submitNumericFilters() }
        >
          Apply
        </button>
      </div>
      <div>
        { filterByNumericValues.map(({ column: type }, index) => (
          <div key={ index } data-testid="filter">
            <button
              type="button"
              onClick={ () => deleteFilter(type) }
            >
              { `${type} x `}
            </button>
          </div>
        )) }
      </div>
    </div>
  );
}

export default InputFilters;
