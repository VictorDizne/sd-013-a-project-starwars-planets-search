import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterInputNumero() {
  const { filter, setFilter } = useContext(MyContext);
  const { filterByNumercValues } = filter;

  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const comparação = [
    'maior que', 'menor que', 'igual a',
  ];
  const filtro = {
    column: 'population', comparison: 'maior que', value: '0' };

  function handleClick() {
    setFilter({ ...filter, filterByNumercValues: [...filterByNumercValues, filtro],
    });
  }

  function handleChange({ target }) {
    const { name, value } = target;
    filter[name] = value;
  }

  return (
    <div>
      Filter
      <select
        name="columFilter"
        onChange={ handleChange }
        data-testid="column-filter"
      >
        {columns.map((item, index) => <option key={ index }>{item}</option>)}
      </select>

      Comparison
      <select
        name="comparison"
        onChange={ handleChange }
        data-testid="comparison-filter"
      >
        {comparação.map((item, index) => <option key={ index }>{item}</option>)}
      </select>

      <input
        data-testid="value-filter"
        name="value"
        type="number"
        onChange={ handleChange }
        min="0"
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filter
      </button>
    </div>
  );
}

export default FilterInputNumero;
