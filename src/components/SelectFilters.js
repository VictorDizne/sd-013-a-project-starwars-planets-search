import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

const columns = ['population', 'orbital_period', 'rotation_period', 'diameter',
  'surface_water'];

const SelectFilters = () => {
  const { filters, setFilters } = useContext(PlanetContext);
  const handleChange = ({ target: { value, name } }) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          ...filters.filterByNumericValues[0],
          [name]: value,
        },
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
      >
        Apply
      </button>
    </>
  );
};

export default SelectFilters;
