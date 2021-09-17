import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const columnField = ['', 'population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];

const comparisonField = ['', 'maior que', 'menor que', 'igual a'];

function Filter() {
  const { handleChange, handleClick } = useContext(PlanetsContext);
  const [filter, setFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const updateFilter = ({ target: { name, value } }) => {
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  return (
    <form>
      <label htmlFor="input-name">
        Nome:
        <input
          id="input-name"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="column-filter">
        Filtro:
        <select
          id="column-filter"
          name="column"
          data-testid="column-filter"
          onChange={ updateFilter }
        >
          {
            columnField.map((field, i) => <option key={ i }>{ field }</option>)
          }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Comparação:
        <select
          id="comparison-filter"
          name="comparison"
          data-testid="comparison-filter"
          onChange={ updateFilter }
        >
          {
            comparisonField.map((field, i) => <option key={ i }>{ field }</option>)
          }
        </select>
      </label>
      <label htmlFor="value-filter">
        Valor:
        <input
          type="number"
          name="value"
          id="value-filter"
          data-testid="value-filter"
          onChange={ updateFilter }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick(filter) }
      >
        Adicionar Filtro
      </button>
    </form>
  );
}

export default Filter;
