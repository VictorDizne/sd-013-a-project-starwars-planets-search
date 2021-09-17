import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, onClick, test }) {
  return (
    <button
      type="button"
      onClick={ onClick }
      data-testid={ test }
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
