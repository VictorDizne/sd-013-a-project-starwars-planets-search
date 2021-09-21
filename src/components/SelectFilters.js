import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';

function SelectFilters() {
  const { filterNumeric, setFilterNumeric } = useContext(DataContext);
  const [filterSelect, SetfilterSelect] = useState({});

  const handleFilter = ({ target }) => {
    const { value, name } = target;
    SetfilterSelect({ ...filterSelect, [name]: value });
  };

  const handleClick = () => {
    setFilterNumeric([...filterNumeric, filterSelect]);
  };

  return (
    <div>
      <label htmlFor="filter-column">
        Columns
        <select
          name="column"
          id="filter-column"
          data-testid="column-filter"
          onChange={ handleFilter }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="filter-comparison">
        Comparison
        <select
          name="comparison"
          id="filter-comparison"
          data-testid="comparison-filter"
          onChange={ handleFilter }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="filter-value">
        Value
        <input
          name="value"
          type="number"
          id="filter-value"
          data-testid="value-filter"
          onChange={ handleFilter }
        />
      </label>
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default SelectFilters;
