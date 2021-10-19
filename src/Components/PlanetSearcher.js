import React, { useContext } from 'react';
import SwapiContext from '../Context/SwapiContext';

function PlanetSearcher() {
  const { filters, setFilters } = useContext(SwapiContext);
  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };
  return (
    <div>
      <h3>Search</h3>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </div>
  );
}

export default PlanetSearcher;
