import React, { useContext, useEffect, useState } from 'react';
import { PlanetsContext } from '../../context';

const Form = () => {
  const {
    handleNameFilter,
    handleAddFilter,
    handleRemoveFilter,
    filters: { filterByNumericValues },
  } = useContext(PlanetsContext);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [number, setNumber] = useState('');
  const [columns, setColumns] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const renderAppliedFilters = () => (
    <section>
      {filterByNumericValues.map((filter, i) => (
        <article key={ i }>
          <div>{filter.column}</div>
          <div>{filter.comparison}</div>
          <div>{filter.number}</div>
          <button
            type="button"
            data-testid="filter"
            onClick={ () => {
              handleRemoveFilter(filter.id);
              setColumns([...columns, filter.column]);
            } }
          >
            Remover Filtro
          </button>
        </article>
      ))}
    </section>
  );

  const renderFilterByNumbers = () => {
    const comparisons = ['maior que', 'menor que', 'igual a'];
    const keysColumns = filterByNumericValues.map(({ column: columnFilter }) => columnFilter);
    const filteredColumns = columns.filter((c) => c !== keysColumns);
    return (
      <section>
        <select
          name="column"
          data-testid="column-filter"
          onChange={ ({ target: { value } }) => setColumn(value) }
        >
          {filteredColumns.map((text) => <option key={ text } value={ text }>{text}</option>)}
        </select>

        <select
          onChange={ ({ target: { value } }) => setComparison(value) }
          name="comparison"
          data-testid="comparison-filter"
        >
          {comparisons.map((text) => <option key={ text } value={ text }>{text}</option>)}
        </select>

        <input
          onChange={ ({ target: { value } }) => setNumber(value) }
          name="value"
          type="number"
          data-testid="value-filter"
        />

        <button
          onClick={ () => {
            handleAddFilter({ id: Date(), column, comparison, number });
            setColumns([...columns].filter((c) => c !== column));
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
      {renderAppliedFilters()}
    </form>
  );
};

export default Form;
