import React, { useContext, useState, useEffect } from 'react';
import PlanetContext from '../contexts/PlanetContext';
import usePlanetFilters from '../hooks/usePlanetFilters';

const columnsOptionsToFilter = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const columnsToSort = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'terrain',
  'surface_water',
  'population',
];

export default function TableFilter() {
  const [filterColumns, setFilterColumns] = useState(columnsOptionsToFilter);
  const [filterExists, setFilterExists] = useState(true);
  const [numberInput, setNumberInput] = useState('');
  const [selectedColumn, setSelectedColumn] = useState('population');
  const [selectedCompareMethod, setSelectedCompareMethod] = useState('maior que');
  const [sortOption, setSortOption] = useState('ASC');
  const [columnToSort, setColumnToSort] = useState('name');
  const [buttonDisabled, setButtonDisabled] = useState();
  const { planetData, setPlanetData } = useContext(PlanetContext);
  const {
    setPlanetsByNumericValues,
    delFilterByNumericValues,
    applySort,
  } = usePlanetFilters();

  const applyFilter = () => {
    setPlanetsByNumericValues({
      value: numberInput,
      column: selectedColumn,
      comparison: selectedCompareMethod,
    });
    const exists = filterColumns.filter(((column) => column !== selectedColumn));
    if (exists.length !== 0) {
      setFilterExists(true);
      setFilterColumns(exists);
      setSelectedColumn(exists[0]);
    } else {
      setFilterExists(false);
    }
  };

  const changeColumm = ({ target: { value } }) => {
    setSelectedColumn(value);
  };

  const changeCompareMethod = ({ target: { value } }) => {
    setSelectedCompareMethod(value);
  };

  useEffect(() => {
    if (numberInput) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [numberInput, selectedColumn, selectedCompareMethod]);

  if (!planetData) return null;

  const numericFilter = () => (
    <form>
      <select
        className="filterBy"
        data-testid="column-filter"
        onChange={ changeColumm }
      >
        {
          filterColumns
            .map((columnName, idx) => (
              <option
                key={ `${columnName}${idx}` }
                value={ columnName }
              >
                { columnName }
              </option>
            ))
        }
      </select>
      <select
        className="toCompare"
        data-testid="comparison-filter"
        onChange={ changeCompareMethod }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ numberInput }
        onChange={ ({ target: { value } }) => setNumberInput(value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ applyFilter }
        disabled={ buttonDisabled }
      >
        Aplicar
      </button>
    </form>
  );

  const deleteFilter = ({ target: { value } }) => {
    setFilterColumns([...filterColumns, value]);
    delFilterByNumericValues(value);
  };

  const usedFilters = (filters) => (
    <ul>
      {filters.filterByNumericValues.map((filter, idx) => (
        <li key={ `${filter}${idx}` } data-testid="filter">
          <span
            data-testid="filter"
          >
            { `${filter.column} | ${filter.comparison} | ${filter.value}` }
            <button
              value={ filter.column }
              type="button"
              onClick={ deleteFilter }
            >
              X
            </button>
          </span>
        </li>
      ))}
    </ul>
  );

  const sortByColumns = () => (
    <div>
      <select
        data-testid="column-sort"
        name="column"
        onChange={ ({ target: { value } }) => setColumnToSort(value) }
      >
        { columnsToSort.map((columnName, idx) => (
          <option key={ idx } value={ columnName }>{ columnName }</option>)) }
      </select>
      <label htmlFor="sortByASC" className="sort-radio">
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          id="sortByASC"
          checked={ sortOption === 'ASC' }
          onChange={ () => setSortOption('ASC') }
        />
        ASC
      </label>
      <label htmlFor="sortByDESC" className="sort-radio">
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          id="sortByDESC"
          checked={ sortOption === 'DESC' }
          onChange={ () => setSortOption('DESC') }
        />
        DESC
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ () => applySort(columnToSort, sortOption) }
      >
        Aplicar
      </button>
    </div>
  );

  return (
    <>
      <input
        data-testid="name-filter"
        className="planetFilter"
        type="text"
        placeholder="Planeta"
        onChange={
          (e) => setPlanetData({
            ...planetData,
            filters: { ...planetData.filters, filterByName: { name: e.target.value } },
          })
        }
      />
      { filterExists && numericFilter() }
      { usedFilters(planetData.filters) }
      { sortByColumns() }
    </>
  );
}
