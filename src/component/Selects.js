import React, { useState, useContext } from 'react';
import tableContext from '../context/tableContext';

function Select() {
  const { data, setData } = useContext(tableContext);
  const [selected, setSelected] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const createColumn = () => {
    const columns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'];
    const columnsMap = columns
      .map((option, id) => <option key={ id }>{ option }</option>);
    return columnsMap;
  };

  const createComparison = () => {
    const comparison = ['maior que', 'menor que', 'igual a'];
    const comparisonMap = comparison
      .map((option, id) => <option key={ id }>{ option }</option>);
    return comparisonMap;
  };

  // QUANDO HÁ UM CLICK NO SELECT A FUNCAO EXECUTA:
  // const handleChange = (event) => {
  //   // MUDANDO O ESTADO DO SELECT
  //   setSelected({
  //     ...selected,
  //     [event.target.id]: event.target.value });
  // };

  return (
    <>
      <div>
        <label htmlFor="column">
          <select
            name="column"
            id=""
            data-testid="column-filter"
          >
            {createColumn()}
          </select>

        </label>
      </div>
      <div>
        <label htmlFor="comparison">
          <select
            name="comparison"
            id=""
            data-testid="comparison-filter"
          >
            {createComparison()}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="number">
          only number
          <input
            type="number"
            name="number"
            data-testid="value-filter"
          />
        </label>
      </div>
      <button
        type="button"
        data-testid="button-filter"
      >
        click
      </button>
    </>
  );
}
export default Select;
