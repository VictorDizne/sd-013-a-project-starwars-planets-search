import React, { useContext, useEffect, useState } from 'react';
import TableContext from '../context/TableContext';
import { columnFilter } from '../helpers';

function FilterForm() {
  const {
    handleFilterByName,
    handleFilterByNumericValues,
    filter: { filters: { filterByNumericValues } } } = useContext(TableContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [columnOptions, setColumnOptions] = useState([...columnFilter]);

  const filteredColumn = () => {
    if (filterByNumericValues.length) {
      const numericValuesColumns = filterByNumericValues
        .map((filter) => filter.column);
      setColumnOptions((prevState) => prevState
        .filter((option) => !numericValuesColumns.includes(option)));
    }
  };
  useEffect(filteredColumn, [filterByNumericValues]);

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
      <select
        value={ column }
        data-testid="column-filter"
        onChange={ (e) => setColumn(e.target.value) }
      >
        {columnOptions
          .map((colum) => <option value={ colum } key={ colum }>{colum}</option>)}
      </select>
      <select
        value={ comparison }
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
