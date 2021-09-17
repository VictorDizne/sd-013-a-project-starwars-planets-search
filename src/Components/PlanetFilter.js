import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function PlanetFilter() {
  const { filterwars, setfilterWars } = useContext(MyContext);

  const filterInput = ({ target: { value } }) => {
    setfilterWars({ ...filterwars,
      filters: { filterByName: { ...filterwars.filterByName, name: value } } });
  };

  return (
    <label htmlFor="filter">
      Procurar Planeta:
      <input
        data-testid="name-filter"
        type="text"
        id="filter"
        onChange={ filterInput }
      />
    </label>
  );
}

export default PlanetFilter;
