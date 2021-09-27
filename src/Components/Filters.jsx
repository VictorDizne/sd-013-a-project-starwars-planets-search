import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function Filters() {
  const { filters: {
    filterByName: {
      name,
    },
  },
  setName,
  } = useContext(PlanetsContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por nome"
        data-testid="name-filter"
        value={ name }
        onChange={ (e) => setName(e.target.value) }
      />
    </div>
  );
}

export default Filters;
