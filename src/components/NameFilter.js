import React, { useContext } from 'react';
import { PlanetsAndFiltersContext } from '../context/PlanetsAndFiltersContext';

const NameFilter = () => {
  // Lógica do context refatorada com a ajuda do colega Murilo Rainho
  const {
    setStates: { makeSearch, setFilteredPlanets }, planets
  } = useContext(PlanetsAndFiltersContext);

  const filterPlanets = ({ target: { value } }) => {
    makeSearch(value);

    const filteredPlanets = planets
      .filter((planet) => planet.name.toLowerCase().includes(value.toLowerCase()));

    setFilteredPlanets([...filteredPlanets]);
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
