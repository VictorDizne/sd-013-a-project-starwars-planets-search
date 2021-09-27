// @ts-check
import React, { useContext, useState } from 'react';
import MyContext from '../Context/MyContext';

function Filters() {
  const { addNumericFilter, availableColumns } = useContext(MyContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);

  const onChangeColumnValue = (event) => {
    setColumn(event.target.value);
  };

  const onChangeComparisonValue = (event) => {
    setComparison(event.target.value);
  };

  const onChangeNumberValue = (event) => {
    setNumber(event.target.value);
  };

  const onPressFilter = () => {
    addNumericFilter({
      column,
      value: number,
      comparison,
    });
  };

  return (
    <div>
      <select
        value={ column }
        onChange={ onChangeColumnValue }
        data-testid="column-filter"
      >
        {availableColumns.map(
          (availableColumn, index) => (
            <option
              key={ index }
              value={ availableColumn }
            >
              {availableColumn}
            </option>
          ),
        )}

      </select>
      <select
        value={ comparison }
        onChange={ onChangeComparisonValue }
        data-testid="comparison-filter"
      >
        <option value="igual a">igual a</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        value={ number }
        onChange={ onChangeNumberValue }
        type="number"
        data-testid="value-filter"
      />
      <button
        onClick={ onPressFilter }
        type="button"
        data-testid="button-filter"
      >
        Filtrar

      </button>
    </div>
  );
}

export default Filters;
