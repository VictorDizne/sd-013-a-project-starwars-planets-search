import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Filter = () => {
  const { isFetching } = useContext(PlanetsContext);
  return (
    <div className="filters">
      <select>
        <option>ae</option>
      </select>
      {isFetching && <h2>Loading...</h2>}
    </div>
  );
};

export default Filter;
