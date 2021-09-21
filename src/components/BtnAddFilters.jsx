import React from 'react';
import PropTypes from 'prop-types';

function BtnAddFilters({ text, onClick, id }) {
  return (
    <button
      data-testid="button-filter"
      id={ id }
      type="button"
      name={ text }
      onClick={ onClick }
    >
      {text}
    </button>);
}

const { string } = PropTypes;

BtnAddFilters.propTypes = {
  name: string,
}.isRequired;

export default BtnAddFilters;
