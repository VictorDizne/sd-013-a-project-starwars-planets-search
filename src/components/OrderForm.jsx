import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const arrayOptions = ['name', 'population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];

function OrderForm() {
  const { submitOrder } = useContext(PlanetsContext);
  const [localOrder, setLocalOrder] = useState({
    column: '',
    sort: '',
  });

  const handleChange = ({ target: { value, name } }) => {
    setLocalOrder({
      ...localOrder,
      [name]: value,
    });
  };

  return (
    <div>
      <label htmlFor="select-options">
        Ordenar:
        <select
          name="column"
          id="select-options"
          onChange={ handleChange }
          data-testid="column-sort"
        >
          { arrayOptions.map((opt, i) => <option key={ i }>{ opt }</option>)}
        </select>
      </label>
      <label htmlFor="asc-opt">
        Crecente
        <input
          type="radio"
          id="asc-opt"
          value="ASC"
          name="sort"
          onChange={ handleChange }
          data-testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="desc-opt">
        Decrescente
        <input
          type="radio"
          id="desc-opt"
          value="DESC"
          name="sort"
          onChange={ handleChange }
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ () => submitOrder(localOrder) }
      >
        Clique aqui!
      </button>
    </div>
  );
}

export default OrderForm;
