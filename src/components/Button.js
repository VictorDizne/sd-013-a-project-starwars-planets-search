import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, className, onClick, test }) {
  return (
    <button
      type="button"
      className={ className }
      onClick={ onClick }
      data-testid={ test }
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  test: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
  test: '',
};

export default Button;
