import React from 'react';
import PropTypes from 'prop-types';

function FilterByName({ onChange }) {
  return (
    <label htmlFor="filter">
      <input
        type="text"
        data-testid="name-filter"
        id="filter"
        onChange={ onChange }
      />
    </label>
  );
}

FilterByName.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FilterByName;
