import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from '../context/PlanetContext';

function Filters({ filter: { column, comparison, value }, handleClick }) {
  const { filters, setFilters } = useContext(PlanetContext);
  const { filterByNumericValues } = filters;
  return (
    <li data-testid="filter">
      {`${column} ${comparison} ${value}`}
      <button
        type="button"
        id={ column }
        onClick={ (e) => handleClick(e, filterByNumericValues, setFilters, filters) }
      >
        X
      </button>
    </li>
  );
}

Filters.propTypes = {
  filter: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Filters;
