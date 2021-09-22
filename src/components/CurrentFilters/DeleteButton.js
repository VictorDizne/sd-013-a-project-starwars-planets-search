import React, { useContext } from 'react';

import PropTypes from 'prop-types';

import AppContext from '../../contexts/AppContext';

const DeleteButton = ({ filter }) => {
  const {
    setAvaibleFilters,
    // numericFilters,
    setNumericFilters,
  } = useContext(AppContext);

  const handleClick = () => {
    console.log(filter);
    setNumericFilters((prevFilters) => prevFilters
      .filter((_filter) => _filter.column !== filter.column));

    setAvaibleFilters((prevFilters) => [...prevFilters, filter.column]);
  };
  return (
    <button type="button" onClick={ handleClick }>
      X
    </button>
  );
};

DeleteButton.propTypes = {
  filter: PropTypes.objectOf(
    PropTypes.shape({
      column: PropTypes.string.isRequired,
      comparison: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default DeleteButton;
