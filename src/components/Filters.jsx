import React, { useContext } from 'react';
import { Context } from '../context/MyContext';

function Filters() {
  const { filters, handleOnChangeFilter } = useContext(Context);
  const { filterByName: { name } } = filters;

  return (
    <section>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="pesquise..."
        onChange={ (event) => handleOnChangeFilter(event.target.value) }
        value={ name }
      />
    </section>
  );
}

export default Filters;
