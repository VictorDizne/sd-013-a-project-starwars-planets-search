import React, { useContext, useState } from 'react';
import context from '../context/context';

const SearchForm = () => {
  const {
    filters: { filterByName: { name, setName }, filterByNumericValues },
    setFilters: { setNumericFilters },
    options: { columnOptions, comparisonOptions, setColumnOptions, setComparisonOptions },
  } = useContext(context);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [numberValue, setNumberValue] = useState('');

  const newFilter = { column, comparison, numberValue };

  const updateOptions = (filter) => {
    const newColumnOptions = columnOptions.filter((option) => option !== filter.column);
    setColumnOptions(newColumnOptions);

    const newComparisonOptions = comparisonOptions
      .filter((option) => option !== filter.comparison);
    setComparisonOptions(newComparisonOptions);
  };

  function addNewFilter() {
    setNumericFilters([...filterByNumericValues, newFilter]);
    updateOptions(newFilter);
    setColumn('');
    setComparison('');
    setNumberValue('');
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
      {/* {filterByNumericValues.length > 0 } */}
    </form>
  );
};

export default SearchForm;
