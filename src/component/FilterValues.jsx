import React, { useState, useContext } from 'react';
import planetContext from '../context';

const FilterValues = () => {
  const [filterSelect, setFilterSelect] = useState({});
  const { filter, setFilter } = useContext(planetContext);

  const handleFilter = ({ target: { value, name } }) => {
    setFilterSelect({
      ...filterSelect,
      [name]: value,
    });
  };

  const handleClick = () => {
    setFilter([
      ...filter,
      filterSelect,
    ]);
  };

  return (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handleFilter }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        name="comparison"
        id=""
        data-testid="comparison-filter"
        onChange={ handleFilter }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        type="number"
        name="value"
        data-testid="value-filter"
        id=""
        onChange={ handleFilter }
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
};

export default FilterValues;
