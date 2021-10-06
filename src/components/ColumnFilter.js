import React, { useContext } from 'react';
import { PlanetsAndFiltersContext } from '../context/PlanetsAndFiltersContext';

const ColumnFilter = () => {
  const {
    setStates: { getColumnValue },
  } = useContext(PlanetsAndFiltersContext);

  const filterColumn = ({ target: { value } }) => {
    getColumnValue(value);
  };

  return (
    <label htmlFor="column-filter">
      Filter:
      <select
        name="column-filter"
        id="column-filter"
        data-testid="column-filter"
        onChange={ filterColumn }
      >
        <option value="population" selected>population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
    </label>
  );
};

export default ColumnFilter;
