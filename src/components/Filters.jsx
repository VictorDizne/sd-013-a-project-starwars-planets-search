import React, { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

const nameFilter = (evt, setFilters) => {
  evt.persist();
  setFilters((state) => ({ ...state, filterByName: { name: evt.target.value } }));
};

function Filters() {
  const { filters, setFilters } = useContext(PlanetsContext);
  return (
    <input
      type="text"
      data-testid="name-filter"
      placeholder="Name"
      value={ filters.filterByName.name }
      onChange={ (evt) => nameFilter(evt, setFilters) }
    />
  );
}

export default Filters;
