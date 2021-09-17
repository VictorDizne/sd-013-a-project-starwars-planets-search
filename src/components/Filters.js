import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Filters = () => {
  const { contextValue } = useContext(AppContext);
  const { name, setName } = contextValue;

  return (
    <form>
      <h1>Filtros</h1>
      <label htmlFor="name">
        Nome:
        <input
          id="name"
          value={ name }
          type="text"
          data-testid="name-filter"
          onChange={ (event) => setName(event.target.value) }
        />
      </label>
    </form>
  );
};

export default Filters;
