import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import myContext from '../context/myContext';

export default function Input({ dataId, name, type }) {
  const { handleChange } = useContext(myContext);
  return (
    <label htmlFor="#">
      <input
        type={ type }
        name={ name }
        onChange={ handleChange }
        data-testid={ dataId }
      />
    </label>
  );
}

Input.propTypes = {
  dataId: PropTypes.string,
}.isRequired;
