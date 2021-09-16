import React, { useContext } from 'react';
import { PlanetsContext } from '../../context';

const Input = () => {
  const { setQueryFilter } = useContext(PlanetsContext);
  return (
    <div>
      <label htmlFor="name">
        <input
          type="text"
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => setQueryFilter(value) }
        />
      </label>
    </div>
  );
};

export default Input;
