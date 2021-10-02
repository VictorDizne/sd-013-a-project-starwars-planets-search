import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Filter = () => {
  const { setFilters } = useContext(PlanetsContext);

  const handleClick = (event) => {
    const { value } = event.target;
    setFilters({ filterByName: { name: value } });
  };

  return (
    <div>
      <input
        type="text"
        id="filtro"
        data-testid="name-filter"
        onChange={ handleClick }
      />
      {/* <button type="button" onClick={ handleClick }>Pesquisar</button> */}
    </div>
  );
};

export default Filter;
