import React, { useContext, useEffect, useState } from 'react';
import { PlanetsContext } from '../../context';

const Form = () => {
  const {
    handleNameFilter,
    handleAddFilter,
    handleRemoveFilter,
    handleSortFilter,
    titles,
    filters: { filterByNumericValues },
  } = useContext(PlanetsContext);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);
  const [columnSort, setColumnSort] = useState('name');
  const [typeSort, setTypeSort] = useState('ASC');

  useEffect(() => {
    setColumn(selectedColumns[0]);
  }, [selectedColumns, setColumn, setSelectedColumns]);

  const renderSortFilters = () => (
    <section>
      <select
        onChange={ ({ target: { value } }) => setColumnSort(value) }
        data-testid="column-sort"
      >
        {titles.map((title, i) => <option key={ i } value={ title }>{title}</option>)}
      </select>
      <label htmlFor="asc">
        ASC
        <input
          onChange={ ({ target: { value } }) => setTypeSort(value) }
          id="asc"
          type="radio"
          name="sort"
          value="ASC"
          data-testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="desc">
        DESC
        <input
          onChange={ ({ target: { value } }) => setTypeSort(value) }
          id="desc"
          type="radio"
          name="sort"
          value="DESC"
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        onClick={ () => handleSortFilter({ column: columnSort, sort: typeSort }) }
        type="button"
        data-testid="column-sort-button"
      >
        Ordenar

      </button>
    </section>
  );

  const renderAppliedFilters = () => (
    <section>
      {filterByNumericValues.map((filter, i) => (
        <div key={ i } data-testid="filter">
          {filter.column}
          {filter.comparison}
          {filter.value}
          <button
            type="button"
            onClick={ () => {
              handleRemoveFilter(filter.id);
              setSelectedColumns([...selectedColumns]
                .filter((c) => c !== filter.column));
            } }
          >
            X
          </button>
        </div>
      ))}
    </section>
  );

  const renderFilterByNumbers = () => {
    const comparisons = ['maior que', 'menor que', 'igual a'];
    const columns = ['population',
      'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const filteredColumns = columns.filter((c) => !selectedColumns.includes(c));
    return (
      <section>
        <select
          name="column"
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target: { value } }) => setColumn(value) }
        >
          {filteredColumns.map((text) => (
            <option
              key={ text }
              value={ text }
            >
              {text}
            </option>
          ))}
        </select>

        <select
          onChange={ ({ target: { value } }) => setComparison(value) }
          name="comparison"
          data-testid="comparison-filter"
          value={ comparison }
        >
          {comparisons.map((text) => <option key={ text } value={ text }>{text}</option>)}
        </select>

        <input
          onChange={ ({ target: { value } }) => setNumber(value) }
          name="value"
          type="number"
          data-testid="value-filter"
          value={ number }
        />

        <button
          onClick={ () => {
            handleAddFilter({ id: Date(), column, comparison, value: number });
            setSelectedColumns([...selectedColumns, column]);
            setColumn(selectedColumns[0]);
          } }
          type="button"
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </section>
    );
  };

  const renderFilterName = () => (
    <section>
      <label htmlFor="name">
        <input
          type="text"
          data-testid="name-filter"
          name="name"
          onChange={ handleNameFilter }
        />
      </label>
    </section>
  );

  return (
    <form>
      {renderFilterName()}
      {renderFilterByNumbers()}
      {renderSortFilters()}
      {renderAppliedFilters()}
    </form>
  );
};

export default Form;
