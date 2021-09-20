import React, { useContext } from 'react';
import { Context } from '../context/MyContext';

function Filters() {
  const {
    filters, setColum, setComparison,
    setValue, column, comparison, value, handleOnClickState,
    handleOnChangeFilterInput, dropdonw } = useContext(Context);

  return (
    <section>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="pesquise..."
        onChange={ (event) => handleOnChangeFilterInput(event.target.value) }
        value={ filters.filterByName.name }
      />
      <select
        data-testid="column-filter"
        name="column"
        id="select"
        value={ column }
        onChange={ (event) => setColum(event.target.value) }
      >
        { dropdonw.map((item) => (
          <option key={ item } value={ item }>{item}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        id="select"
        value={ comparison }
        onChange={ (event) => setComparison(event.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        placeholder="fala 300"
        onChange={ (event) => setValue(event.target.value) }
        value={ value }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => handleOnClickState(column, comparison, value) }
      >
        filtrar
      </button>
    </section>
  );
}

export default Filters;
