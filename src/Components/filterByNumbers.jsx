import React, { useContext } from 'react';
import Context from '../Context/Context';

function InputNumericValues() {
  const {
    filter,
    filter: { filters: { filterByNumericValues } },
    setFilter,
    setFiltered,
  } = useContext(Context);

  const handleClick = () => {
    console.log(filterByNumericValues);
  };

  const handleChange = ({ target: { id, value } }) => {
    setFilter({
      filters: {
        ...filter.filters,
        filterByNumericValues: {
          ...filter.filters.filterByNumericValues,
          [id]: value,
        },
      },
    });
    setFiltered(true);
    console.log(filterByNumericValues);
  };

  return (
    <div>
      <select
        id="column"
        data-testid="column-filter"
        onChange={ handleChange }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        id="comparison"
        data-testid="comparison-filter"
        onChange={ handleChange }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        id="valor"
        type="number"
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>

    </div>
  );
}

export default InputNumericValues;
