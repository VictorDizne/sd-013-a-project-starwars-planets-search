import React, { useContext } from 'react';
import ContextAPI from '../context/ContextAPI';

export default function Filter() {
  const { state, setFilterName } = useContext(ContextAPI);
  if (!state) return null;

  return (
    <form>
      <h1>{state.text}</h1>
      <input
        type="text"
        name="name"
        data-testid="name-filter"
        onChange={ setFilterName }
      />
      {/* <input
        type="number"
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => setState(value) }
      /> */}
    </form>
  );
}
