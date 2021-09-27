import React, { useContext, useState } from 'react';
import MyContext from '../Context/MyContext';

function InputSearch() {
  const { handleChange, handleClick, columnItens } = useContext(MyContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valor, setValor] = useState('');

  // const collunms = ['population', 'orbital_period',
  //   'diameter', 'rotation_period', 'surface_water'];
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
            { columnItens.map((item) => (
              <option value={ item } key={ item }>{ item }</option>)) }
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
          type="text"
          data-testid="name-filter"
          placeholder="pesquisar"
          onChange={ handleChange }
        />
      </div>
      { inputsFilters() }
    </section>
  );
}

export default InputSearch;
