import React, { useContext, useEffect, useState } from 'react';
import context from '../context/context';

const SearchForm = () => {
  const {
    filters: { filterByName: { name, setName }, filterByNumericValues },
    setFilters: { setNumericFilters },
  } = useContext(context);

  const [columns] = useState(['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);
  const [columnOptions, setColumnOptions] = useState(columns);
  const [comparisons] = useState(['maior que', 'menor que', 'igual a']);
  const [comparisonOptions, setComparisonOptions] = useState(comparisons);

  const [column, setColumn] = useState(columnOptions[0]);
  const [comparison, setComparison] = useState(comparisonOptions[0]);
  const [numberValue, setNumberValue] = useState('');

  // Set the first option as default for each filter options
  useEffect(() => {
    setColumn(columnOptions[0]);
    setComparison(comparisonOptions[0]);
    setNumberValue('');
  }, [columnOptions, comparisonOptions, filterByNumericValues]);

  // Refresh filter options after adding a new filter
  useEffect(() => {
    const newColumns = filterByNumericValues.reduce((acc, curr) => acc
      .filter((col) => col !== curr.column), columns);
    setColumnOptions(newColumns);
    const newComparisons = filterByNumericValues.reduce((acc, curr) => acc
      .filter((compar) => compar !== curr.comparison), comparisons);
    setComparisonOptions(newComparisons);
  }, [columns, comparisons, filterByNumericValues]);

  const newFilter = { column, comparison, numberValue };

  function addNewFilter() {
    setNumericFilters([...filterByNumericValues, newFilter]);
  }

  return (
    <form>
      <input
        type="text"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
        data-testid="name-filter"
        placeholder="Nome do planeta"
      />
      <select
        name="columnFilter"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
        data-testid="column-filter"
      >
        {columnOptions.map((columnOption) => (
          <option key={ columnOption }>{columnOption}</option>))}
      </select>
      <select
        name="comparisonFilter"
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
        data-testid="comparison-filter"
      >
        {comparisonOptions.map((comparisonOption) => (
          <option key={ comparisonOption }>{comparisonOption}</option>))}
      </select>
      <input
        type="number"
        value={ numberValue }
        onChange={ ({ target }) => setNumberValue(Number(target.value)) }
        data-testid="value-filter"
        placeholder="Valor númerico"
      />
      <button
        type="button"
        onClick={ () => addNewFilter() }
        data-testid="button-filter"
      >
        Adicionar Filtro
      </button>
    </form>
  );
};

export default SearchForm;
