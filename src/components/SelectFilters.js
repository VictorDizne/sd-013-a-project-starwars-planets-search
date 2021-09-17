import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

const columns = ['population', 'orbital_period', 'rotation_period', 'diameter',
  'surface_water'];

const SelectFilters = () => {
  const { filters, setFilters } = useContext(PlanetContext);

  const [filterOptions, setFilterOptions] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const handleChange = ({ target: { value, name } }) => {
    setFilterOptions({
      ...filterOptions,
      [name]: value,
    });
  };

  const addFilter = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        filterOptions,
      ],
    });
  };

  return (
    <>
      <select
        name="column"
        id="column"
        onChange={ handleChange }
        data-testid="column-filter"
      >
        {columns.map((c, index) => <option key={ index } value={ c }>{c}</option>)}
      </select>
      <select
        name="comparison"
        id="comparison"
        data-testid="comparison-filter"
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        id="value"
        name="value"
        data-testid="value-filter"
        placeholder="Value"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ addFilter }
      >
        Apply
      </button>
    </>
  );
};

export default SelectFilters;
