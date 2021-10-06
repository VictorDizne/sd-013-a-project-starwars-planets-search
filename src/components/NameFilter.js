import React, { useContext } from 'react';
import { PlanetsAndFiltersContext } from '../context/PlanetsAndFiltersContext';

const NameFilter = () => {
  // Lógica do context refatorada com a ajuda do colega Murilo Rainho
  const {
    setStates: { makeSearch },
  } = useContext(PlanetsAndFiltersContext);

  const filterPlanets = ({ target: { value } }) => {
    makeSearch(value);
  };

  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ filterPlanets }
    />
  );
};

export default NameFilter;
