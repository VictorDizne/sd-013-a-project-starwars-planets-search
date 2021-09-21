import React, { useContext } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

export default function Filter() {
  const { context, setContext } = useContext(StarWarsContext);

  if (!context) return null;

  return (
    <form>
      Filtar por nome:
      <input
        onChange={ (e) => setContext({
          ...context,
          filters: {
            filterByName: {
              name: e.target.value } } }) }
        data-testid="name-filter"
      />
    </form>
  );
}
