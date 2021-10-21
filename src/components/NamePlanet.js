import React, { useContext } from 'react';
import { FilterContext } from '../context/MyContext';

export default function NamePlanet() {
  const { filters, setFilters } = useContext(FilterContext);

  function handleName({ target: { value } }) {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  }

  return (
    <label htmlFor="name">
      <input
        data-testid="name-filter"
        name="name"
        type="text"
        onChange={ handleName }
      />
    </label>
  );
}

//  Componente criado para resolução do requisito 3 junto com o component NumberPLanet
