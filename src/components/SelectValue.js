import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SelectValue(props) {
  const { handleChangeProps } = props;

  return (
    <select
      data-testid="comparison-filter"
      name="comparison"
      onChange={ handleChangeProps }
    >
      <option value="maior que">maior que</option>
      <option value="menor que">menor que</option>
      <option value="igual a ">igual a</option>
    </select>
  );
}

SelectValue.propTypes = {
  handleChangeProps: PropTypes.func.isRequired,
};

export default SelectValue;
