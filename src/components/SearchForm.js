import React, { useContext, useState } from 'react';
import context from '../context/context';

const SearchForm = () => {
  const { filters: { filterByName: { name, setName }, filterByNumericValues },
    setFilters: { setNumericFilters } } = useContext(context);

  const columnFilters = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  const comparisonFilters = ['maior que', 'menor que', 'igual a'];

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [numberValue, setNumberValue] = useState('');

  const newFilter = { column, comparison, numberValue };

  function addNewFilter() {
    setNumericFilters([...filterByNumericValues, newFilter]);
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
        {columnFilters.map((columnFilter) => (
          <option key={ columnFilter }>{columnFilter}</option>))}
      </select>
      <select
        name="comparisonFilter"
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
        data-testid="comparison-filter"
      >
        {comparisonFilters.map((comparisonFilter) => (
          <option key={ comparisonFilter }>{comparisonFilter}</option>))}
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
