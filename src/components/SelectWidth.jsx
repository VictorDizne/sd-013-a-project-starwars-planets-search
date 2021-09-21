import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

function SelectWidth({ onChange, id }) {
  return (
    <select data-testid="comparison-filter" onChange={ onChange } id={ id }>
      <Option text="maior que" />
      <Option text="menor que" />
      <Option text="igual a" />
    </select>);
}

const { string } = PropTypes;

SelectWidth.propTypes = {
  name: string,
}.isRequired;

export default SelectWidth;
