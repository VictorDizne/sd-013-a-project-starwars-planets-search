// Sequência de renderização no App.js: 5º
// Referência:
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/11/files

// import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function SortColumn() {
  const { orderOptions, setSortFilters } = useContext(MyContext);
  const [order, setOrder] = useState({
    column: '',
    sort: '',
  });

  function handleChange({ target }) {
    setOrder({
      ...order,
      [target.name]: target.value,
    });
  }

  function handleClick() {
    setSortFilters({
      order,
    });
  }

  return (
    <div>
      <label htmlFor="column">
        <select name="column" data-testid="column-sort" onChange={ handleChange }>
          {orderOptions.map((option) => <option key={ option }>{ option }</option>)}
        </select>
      </label>
      <div>
        <label htmlFor="ASC">
          ASC
          <input
            type="radio"
            value="ASC"
            name="sort"
            data-testid="column-sort-input-asc"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="DESC">
          DESC
          <input
            type="radio"
            value="DESC"
            name="sort"
            data-testid="column-sort-input-desc"
            onChange={ handleChange }
          />
        </label>
      </div>
      <button type="button" data-testid="column-sort-button" onClick={ handleClick }>
        Submeter Ordenação
      </button>
    </div>
  );
}

// InputNumber.propTypes = {
//   handleChangeProps: PropTypes.func.isRequired,
//   InputNumberProp: PropTypes.objectOf(PropTypes.string).isRequired,
// };

export default SortColumn;
