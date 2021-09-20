import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/PlanetProvider';

function NumericValuesFilter() {
  const { columns, addFilter } = useContext(Context);

  const [filter, setFilter] = useState({
    column: columns[0],
    comparison: 'maior que',
    value: '',
  });

  const handleChange = (target) => {
    const { name, value } = target;

    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleClick = () => {
    addFilter(filter); // Manda para o Provider
  };

  useEffect(() => {
    setFilter({ column: columns[0], comparison: 'maior que', value: '' });
  }, [columns]);

  const { column, comparison, value } = filter;

  return (
    <div>
      <label htmlFor="column">
        Column
        <select
          name="column"
          value={ column }
          onChange={ ({ target }) => handleChange(target) }
          data-testid="column-filter"
        >
          {columns.map((col) => <option key={ col } value={ col }>{col}</option>)}
        </select>
      </label>
      <label htmlFor="comparison">
        Comparison
        <select
          name="comparison"
          value={ comparison }
          onChange={ ({ target }) => handleChange(target) }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          name="value"
          type="string"
          value={ value }
          onChange={ ({ target }) => handleChange(target) }
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Apply Filter
      </button>
    </div>
  );
}

export default NumericValuesFilter;
