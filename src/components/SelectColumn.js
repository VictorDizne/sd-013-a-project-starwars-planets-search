import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SelectColumn() {
  return (
    <select data-testid="column-filter">
      <option value="">population</option>
      <option value="">orbital_period</option>
      <option value="">diameter</option>
      <option value="">rotation_period</option>
      <option value="">surface_water</option>
    </select>
  );
}

export default SelectColumn;
