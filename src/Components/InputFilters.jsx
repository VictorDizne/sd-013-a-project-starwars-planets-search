import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function InputFilters() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const setSearch = (name) => {
    setFilters((state) => ({ ...state, filterByName: { name } }));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={ (e) => setSearch(e.target.value) }
        data-testid="name-filter"
      />
    </div>
  );
}

export default InputFilters;
