import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function InputNumber(props) {
  const { valueInputNumber, handleChange } = useContext(MyContext);
  const { handleChangeProps } = props;

  return (
    <div>
      <label htmlFor="value-filter">
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          onChange={ handleChangeProps }
          value={ valueInputNumber }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default InputNumber;
