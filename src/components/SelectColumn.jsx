import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

function SelectColumn({ onChange, id }) {
  return (
    <select data-testid="column-filter" id={ id } onChange={ onChange }>
      <Option text="population" />
      <Option text="orbital_period" />
      <Option text="diameter" />
      <Option text="rotation_period" />
      <Option text="surface_water" />
    </select>);
}

const { string } = PropTypes;

SelectColumn.propTypes = {
  name: string,
}.isRequired;

export default SelectColumn;
