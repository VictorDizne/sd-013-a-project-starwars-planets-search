import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SelectColumn(props) {
  const { handleChangeProps } = props;

  return (
    <select
      data-testid="column-filter"
      name="column"
      onChange={ handleChangeProps }
    >
      <option value="population">population</option>
      <option value="orbital_period">orbital_period</option>
      <option value="diameter">diameter</option>
      <option value="rotation_period">rotation_period</option>
      <option value="surface_water">surface_water</option>
    </select>
  );
}

export default SelectColumn;
