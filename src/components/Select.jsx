import React, { useState, useContext } from 'react';
import { Context } from '../context/Context';

export default function Select() {
  const { column,
    setColumn, filterByNumericValues, setfilterByNumericValues } = useContext(Context);
  const [comparison, setComparison] = useState('maior que');
  const [valor, setValor] = useState('');
  console.log(column, 'colunas');

  const filterColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const [filterColumn, setFilterColumn] = useState(filterColumns);

  // Função feita com consulta ao PR #61, de Débora Teodorico
  const removeSelectedItems = () => {
    const newColumns = filterColumn
      .filter((item) => (item !== column));
    setFilterColumn(newColumns);
  };

  const handleClick = (value) => {
    setfilterByNumericValues([...filterByNumericValues, value]);
    removeSelectedItems();
  };

  function filters() {
    return (
      <div>
        <select
          name="column"
          onChange={ ({ target: { value } }) => setColumn(value) }
          data-testid="column-filter"
        >
          { filterColumn.map((columnx) => <option key={ columnx }>{ columnx }</option>) }
        </select>
        <select
          name="comparison"
          onChange={ ({ target: { value } }) => setComparison(value) }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={ ({ target: { value } }) => setValor(value) }
        />
        <button
          onClick={ () => handleClick({ column, comparison, value: valor }) }
          type="submit"
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </div>
    );
  }

  return (
    <section>
      { filters() }
    </section>
  );
}
