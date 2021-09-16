import React, { useContext, useState } from 'react';
import AppContext from '../../helpers/AppContext';

import { arrayColumnFilter, arrayComparisonFilter } from '../../consts';

export default function NumberFilters() {
  const [column, setColumnChange] = useState('population');
  const [comparison, setComparisonChange] = useState('maior que');
  const [valueInput, setValueInput] = useState('');

  const { sets: { setFilters },
    filters: { filterByNumericValues } } = useContext(AppContext);

  const columnsFiltereds = filterByNumericValues
    .map(({ column: nameColumn }) => nameColumn);
  const allColumns = arrayColumnFilter
    .filter((element) => !columnsFiltereds.includes(element));

  return (
    <section className="container_filter_number-FiIn">
      <label className="label_select_FiIn" htmlFor="column-filter">
        Filter By Column:
        <select
          data-testid="column-filter"
          onChange={ ({ target: { value } }) => setColumnChange(value) }
          aria-label="column-filter"
          value={ column }
          id="column-filter"
        >
          { allColumns.map((element) => (
            <option key={ element } value={ element }>{ element }</option>
          )) }
        </select>
      </label>
      <label className="label_select_FiIn" htmlFor="comparison-filter">
        Comparison:
        <select
          data-testid="comparison-filter"
          onChange={ ({ target: { value } }) => setComparisonChange(value) }
          aria-label="comparison-filter"
          value={ comparison }
          id="comparison-filter"
        >
          { arrayComparisonFilter.map((element, index) => (
            <option key={ index } value={ element }>{ element }</option>
          )) }
        </select>
      </label>
      <label className="label_input_text-FiIn" htmlFor="value-filter">
        Filter By Value:
        <input
          data-testid="value-filter"
          onChange={ ({ target: { value } }) => setValueInput(value) }
          id="value-filter"
          value={ valueInput }
          type="text"
        />
      </label>
      <button
        data-testid="button-filter"
        onClick={ () => {
          const obj = { column, comparison, value: valueInput };
          setFilters([...filterByNumericValues, obj]);
          setValueInput('');
          const filterColumn = allColumns
            .filter((element) => element !== obj.column);
          setColumnChange(filterColumn[0]);
        } }
        type="button"
      >
        Filtrar
      </button>
    </section>
  );
}
