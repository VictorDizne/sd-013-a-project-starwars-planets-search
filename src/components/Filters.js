import React, { useContext } from 'react';
import PlanetsContext from '../context';

const planetFilter = (e, setFilters) => {
  setFilters((state) => (
    { ...state, filterByName: { name: e.target.value } }
  ));
};

const Filters = () => {
  const { filters, setFilters } = useContext(PlanetsContext);

  return (
    <div>
      <label htmlFor="filter">
        Filter by Name:
        <input
          id="filter"
          type="text"
          placeholder="Type planet..."
          data-testid="name-filter"
          value={ filters.filterByName.name }
          onChange={ (e) => planetFilter(e, setFilters) }
        />
      </label>
    </div>
  );
};

export default Filters;
