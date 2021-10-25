// Sequência de renderização no App.js: 4º
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function InputNumber(props) {
  const { handleChangeFilters } = useContext(MyContext);
  const { handleChangeProps, InputNumberProp } = props;

  return (
    <div>
      <label htmlFor="value-filter">
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          onChange={ handleChangeProps }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleChangeFilters(InputNumberProp) }
      >
        Filtrar
      </button>
    </div>
  );
}

InputNumber.propTypes = {
  handleChangeProps: PropTypes.func.isRequired,
  InputNumberProp: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default InputNumber;
