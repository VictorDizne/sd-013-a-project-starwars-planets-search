import React, { useContext } from 'react';
import { PlanetsAndFiltersContext } from '../context/PlanetsAndFiltersContext';

const ColumnFilter = () => {
  const {
    setStates: { getColumnValue },
    filtersUsed,
  } = useContext(PlanetsAndFiltersContext);

  const filterColumn = ({ target: { value } }) => {
    getColumnValue(value);
  };

  const optionsValues = [{ value: 'population', id: 1 }, { value: 'orbital_period', id: 2 }, { value: 'diameter', id: 3 }, { value: 'rotation_period', id: 4 }, { value: 'surface_water', id: 5 }];

  return (
    <label htmlFor="column-filter">
      Filter:
      <select
        name="column-filter"
        id="column-filter"
        data-testid="column-filter"
        onChange={ filterColumn }
      >
        {optionsValues
          .filter(({ value }) => !value.includes(filtersUsed.find((filter => filter === value))))
          .map(({ value, id }) => <option key={ id } value={ value } selected>{ value }</option>)}
        {/* <option value="population" selected>population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option> */}
      </select>
    </label>
  );
};

export default ColumnFilter;
