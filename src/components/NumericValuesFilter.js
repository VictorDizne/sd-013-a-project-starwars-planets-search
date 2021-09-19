import React, { useContext, useState } from 'react';
import { Context } from '../context/PlanetProvider';

const initialState = {
  column: 'population',
  comparison: 'gt',
  value: '',
};

function NumericValuesFilter() {
  const { addFilter } = useContext(Context);
  const [numericFilter, setNumericFilter] = useState(initialState);

  const handleChange = (target) => {
    const { name, value } = target;

    setNumericFilter({
      ...numericFilter,
      [name]: value,
    });
  };

  const handleClick = () => {
    addFilter(numericFilter);
    setNumericFilter(initialState);
  };

  const { column, comparison, value } = numericFilter;

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
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
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
          <option value="gt">maior que</option>
          <option value="eq">igual a</option>
          <option value="lt">menor que</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          name="value"
          type="number"
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
