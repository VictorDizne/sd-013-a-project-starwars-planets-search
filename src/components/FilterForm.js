import React, { useContext, useState } from 'react';
import TableContext from '../context/TableContext';
import { columnFilter } from '../helpers';

function FilterForm() {
  const {
    handleFilterByName,
    handleFilterByNumericValues,
    filter: { filters: { filterByNumericValues } } } = useContext(TableContext);

  const [column, setColumn] = useState(filterByNumericValues[0].column);
  const [comparison, setComparison] = useState(filterByNumericValues[0].comparison);
  const [value, setValue] = useState(filterByNumericValues[0].value);

  return (
    <form>
      <label htmlFor="planet-name">
        Nome:
        <input
          data-testid="name-filter"
          onChange={ (e) => handleFilterByName(e.target.value) }
          type="text"
          id="planet-name"
          placeholder="Eg: Tatooine"
        />
      </label>
      <select data-testid="column-filter" onChange={ (e) => setColumn(e.target.value) }>
        {columnFilter
          .map((colum) => <option value={ colum } key={ colum }>{colum}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        required
        data-testid="value-filter"
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        onClick={ () => handleFilterByNumericValues(column, comparison, value) }
        type="button"
        data-testid="button-filter"
      >
        Filter!
      </button>
    </form>
  );
}

export default FilterForm;
