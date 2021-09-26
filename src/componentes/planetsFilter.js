import React from 'react';
import PropTypes from 'prop-types';

function planetsFilter(props) {
  const { handleChange } = props;
  return (
    <input
      data-testid="name-filter"
      type="text"
      onChange={ handleChange }
    />
  );
}

planetsFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default planetsFilter;
