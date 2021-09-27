import React, { useContext, useState } from 'react';
import MyContext from '../Contexto/MyContext';

function InputSearch() {
  const { handleChange, handleClick, columnItems } = useContext(MyContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valor, setValor] = useState('');

  function inputsFilters() {
    return (
      <div>
        <label htmlFor="column">
          Colum filter:
          <select
            value={ column }
            name="column"
            id="column"
            data-testid="column-filter"
            onChange={ ({ target: { value } }) => setColumn(value) }
          >
            {columnItems.map((coluna) => (
              <option
                key={ coluna }
                value={ coluna }
              >
                {coluna}
              </option>))}
          </select>
        </label>
        <label htmlFor="comparisonFilter">
          Comparison filter:
          <select
            value={ comparison }
            name="comparisonFilter"
            id="comparisonFilter"
            data-testid="comparison-filter"
            onChange={ ({ target: { value } }) => setComparison(value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="comparisonFilter">
          value filter:
          <input
            value={ valor }
            data-testid="value-filter"
            type="number"
            placeholder="pesquisar"
            onChange={ ({ target: { value } }) => setValor(value) }
          />
        </label>
        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => handleClick({ column, comparison, value: valor }) }
        >
          Get filter
        </button>
      </div>
    );
  }

  return (
    <section>
      <div>
        <input
          onChange={ handleChange }
          data-testid="name-filter"
          placeholder="pesquisar"
        />
      </div>
      { inputsFilters() }
    </section>
  );
}

export default InputSearch;
