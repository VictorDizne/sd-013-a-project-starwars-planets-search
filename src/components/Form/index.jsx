import React, { useContext, useEffect, useState, useRef } from 'react';
import { PlanetsContext } from '../../context';

const Form = () => {
  const {
    handleNameFilter,
    handleAddFilter,
    handleRemoveFilter,
    filters: { filterByNumericValues },
  } = useContext(PlanetsContext);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setColumn(selectedColumns[0]);
  }, [selectedColumns, setColumn, setSelectedColumns]);

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
              setSelectedColumns((prevState) => [...prevState].filter((c) => c !== filter.column));
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
          {filteredColumns.map((text) => <option key={ text } value={ text }>{text}</option>)}
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
            setSelectedColumns((prevState) => [...prevState, column]);
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
