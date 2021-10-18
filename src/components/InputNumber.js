import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function InputNumber() {
  return (
    <div>
      <label htmlFor="value-filter">
        <input
          type="number"
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
      >
        Filtrar
      </button>
    </div>
  );
}

export default InputNumber;
