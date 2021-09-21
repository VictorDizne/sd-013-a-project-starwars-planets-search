import React, { useContext, useState } from 'react';
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

  const renderAppliedFilters = () => (
    <section>
      {filterByNumericValues.map((filter, i) => (
        <article key={ i }>
          <div>{filter.column}</div>
          <div>{filter.comparison}</div>
          <div>{filter.number}</div>
          <button
            type="button"
            onClick={ () => handleRemoveFilter(filter) }
          >
            Remover Filtro
          </button>
        </article>
      ))}
    </section>
  );

  const renderFilterByNumbers = () => {
    const columns = ['population',
      'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const comparisons = ['maior que', 'menor que', 'igual a'];
    return (
      <section>
        <select
          name="column"
          data-testid="column-filter"
          onChange={ ({ target: { value } }) => setColumn(value) }
        >
          {columns.map((text) => <option key={ text } value={ text }>{text}</option>)}
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
          onClick={ () => handleAddFilter({ column, comparison, number }) }
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
