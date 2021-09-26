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
  const [selectedColumns, setSelectedColumns] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
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
      {filterByNumericValues.map((filter) => (
        <div key={ filter.column } data-testid="filter">
          <p>{`Coluna: ${filter.column}`}</p>
          <p>{`Comparação: ${filter.comparison}`}</p>
          <p>{`Valor: ${filter.value}`}</p>
          <button
            type="button"
            onClick={ () => {
              handleRemoveFilter(filter);
              setSelectedColumns([...selectedColumns, filter.column]);
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
    return (
      <section>
        <select
          name="column"
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target: { value } }) => setColumn(value) }
        >
          {selectedColumns.map((text) => (
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
            handleAddFilter({ column, comparison, value: number });
            setSelectedColumns([...selectedColumns]
              .filter((c) => c !== column));
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
    <section>
      {renderFilterName()}
      {renderFilterByNumbers()}
      {renderSortFilters()}
      {renderAppliedFilters()}
    </section>
  );
};

export default Form;
