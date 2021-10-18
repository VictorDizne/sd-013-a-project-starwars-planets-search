import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SelectValue() {
  return (
    <select data-testid="comparison-filter">
      <option value="">maior que</option>
      <option value="">menor que</option>
      <option value="">igual a</option>
    </select>
  );
}

export default SelectValue;
