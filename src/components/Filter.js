import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Filter = () => {
  const { isFetching, setFilter, filter } = useContext(PlanetsContext);

  const handleOnChange = ({ target }) => {
    setFilter({ ...filter, filterByName: { name: target.value } });
  };

  return (
    <div className="filters">
      <label htmlFor="text-filter">
        Filtrar:
        <input
          id="text-filter"
          onChange={ handleOnChange }
          data-testid="name-filter"
        />
      </label>
      {isFetching && <h2>Loading...</h2>}
    </div>
  );
};

export default Filter;
