import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

export default function FilterRemove({ filter: { column, comparison, value } }) {
  const { filters: {
    filterByNumericValues }, setFilters, filters } = useContext(MyContext);

  function handleClick({ target: { parentNode: { children } } }) {
    const removFilter = filterByNumericValues
      .filter((objs) => objs.column !== children[0].id);
    setFilters({
      ...filters,
      filterByNumericValues: removFilter.length > 0 ? removFilter : [{
        column: '',
        comparison: '',
        value: '',
      }],
    });
  }

  return (
    <li data-testid="filter">
      <p id={ column }>{`Busca por ${column} ${comparison} ${value}.`}</p>
      <button type="button" onClick={ handleClick }>X</button>
    </li>
  );
}

FilterRemove.propTypes = {
  filter: PropTypes.shape(),
}.isRequired;

// Requisitos 4 e 5 feitos com ajud de Adriano Monteiro
