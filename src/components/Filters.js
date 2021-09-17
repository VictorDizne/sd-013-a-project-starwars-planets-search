import React from 'react';
import PropTypes from 'prop-types';

export default function Filters({ dispatch }) {
  const onChangeValue = ({ target: { name, value } }) => {
    dispatch({
      type: name,
      payload: value,
    });
  };

  return (
    <input
      type="text"
      onChange={ onChangeValue }
      placeholder="Ex.: Naboo"
      name="name"
    />
  );
}

Filters.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
