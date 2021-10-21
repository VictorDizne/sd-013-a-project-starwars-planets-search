import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterInputNumero() {
  const { filter, setFilter } = useContext(MyContext);
  const { filterByNumericValues } = filter;

  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const comparação = [
    'maior que', 'menor que', 'igual a',
  ];
  const filtro = {
    column: 'population', comparison: 'maior que', value: '0' };

  function handleClick() {
    setFilter({ ...filter, filterByNumericValues: [...filterByNumericValues, filtro],
    });
  }

  function handleChange({ target }) {
    const { name, value } = target;
    filtro[name] = value;
  }

  function rederizarColumn() {
    const col = filterByNumericValues.map((item) => item.column);
    const filterColumn = columns.filter((column) => !col.includes(column));
    return filterColumn.map((item, index) => <option key={ index }>{item}</option>);
  }

  return (
    <div>
      Filter
      <select
        name="columFilter"
        onChange={ handleChange }
        data-testid="column-filter"
      >
        {rederizarColumn()}
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
