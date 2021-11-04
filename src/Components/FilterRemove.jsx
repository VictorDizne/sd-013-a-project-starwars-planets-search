import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../Contexto/MyContext';

export default function FilterRemove({ filter: { column, comparison, value } }) {
  const { filters: {
    filterByNumericValues }, setFilters, filters } = useContext(MyContext);
    // é pego três valores do filters sendo filterByNumericValues, setFilters e o proprio filters, que vem do My
    // primeiro é descontruido o que vem do filter
    // depois recontroi setando no estado

  function handleClick({ target: { parentNode: { children } } }) { // questão5
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

// handleClick  busca a coluna do filtro excluido pelo usuario para utilizar um filter onde será excluido o filter relacionado
// após isso filterByNumericValues é reescrita, se o removFilter estiver os valores maior que zero(ele reescreve com o proprio removFilter)
// se naõ  ele reescreve os valores com strig vazia.
