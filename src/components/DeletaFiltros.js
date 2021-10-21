import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function DeletaFiltros() {
  const {
    filter,
    filter: { filterByNumericValues },
    setFilter } = useContext(MyContext);

  function deletaButton({ target }) {
    const filt = filterByNumericValues
      .filter((_, i) => i !== Number(target.parentElement.id));
    setFilter({
      ...filter,
      filterByNumericValues: filt,
    });
  }

  return (
    <ul>
      {

        filterByNumericValues.filter(({ column, comparison, value }, i) => (
          <li key={ i } data-testid="filter" id={ i }>
            {`${column} | ${comparison} | ${value}`}
            <button
              type="button"
              onClick={ deletaButton }
            >
              X
            </button>
          </li>
        ))
      }
    </ul>
  );
}

export default DeletaFiltros;
