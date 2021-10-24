import React from 'react';
import PropTypes from 'prop-types';

function Filters({ filter: { column, comparison, value }, handleClick }) {
  return (
    <li data-testid="filter">
      {`${column} ${comparison} ${value}`}
      <button type="button" id={ column } onClick={ handleClick }>X</button>
    </li>
  );
}

Filters.propTypes = {
  filter: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Filters;
