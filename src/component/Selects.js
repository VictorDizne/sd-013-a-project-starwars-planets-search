import React, { useState, useContext } from 'react';
import tableContext from '../context/tableContext';

function Select() {
  const { handleFilterByNumericValues } = useContext(tableContext);
  const [selectedFilters, setSelectedFilters] = useState({
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
      .map((option) => <option key={ option }>{ option }</option>);
    return columnsMap;
  };

  const createComparison = () => {
    const comparison = ['maior que', 'menor que', 'igual a'];
    const comparisonMap = comparison
      .map((option) => <option key={ option }>{ option }</option>);
    return comparisonMap;
  };

  // QUANDO HÁ UM CLICK NO SELECT A FUNCAO EXECUTA:
  const handleChange = (event) => {
    // MUDANDO O ESTADO DO SELECT
    setSelectedFilters({
      ...selectedFilters,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    handleFilterByNumericValues(selectedFilters);
  };

  return (
    <>
      <div>
        <label htmlFor="column">
          <select
            name="column"
            data-testid="column-filter"
            onChange={ handleChange }
          >
            {createColumn()}
          </select>

        </label>
      </div>
      <div>
        <label htmlFor="comparison">
          <select
            name="comparison"
            data-testid="comparison-filter"
            onChange={ handleChange }
          >
            {createComparison()}
            {handleChange}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="value">
          <input
            type="number"
            name="value"
            data-testid="value-filter"
            onChange={ handleChange }
          />
        </label>
      </div>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        click
      </button>
    </>
  );
}
export default Select;
