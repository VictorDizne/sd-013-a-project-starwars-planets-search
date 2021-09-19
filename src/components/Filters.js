import React, { useContext } from 'react';
import { Context } from '../context/PlanetProvider';
import NumericValuesFilter from './NumericValuesFilter';

function Filters() {
  const { filters, setFilters } = useContext(Context);

  const handleChange = (userInput) => {
    setFilters({ ...filters, filterByName: { name: userInput } });
  };

  return (
    <form>
      <label htmlFor="planetName">
        Planet Name
        <input
          name="planetName"
          type="text"
          onChange={ (e) => handleChange(e.target.value) }
          data-testid="name-filter"
        />
      </label>
      <NumericValuesFilter />
    </form>
  );
}

export default Filters;
