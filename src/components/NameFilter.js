import React, { useContext } from 'react';
import Context from './mycontext';

const NameFilter = () => {
  const { filters: { filterByName }, data, setPlanets } = useContext(Context);

  // function changePlanetsArray(newPlanets) {
  //   if (newPlanets !== data) {
  //     console.log(newPlanets);
  //     setPlanets(newPlanets);
  //   }
  // }

  // if (filterByName.name !== '') {
  //   const newPlanets = data.filter((planet) => planet.name.includes(filterByName.name));
  //   changePlanetsArray(newPlanets);
  // }

  return (
    <label htmlFor="nameFilter">
      Filtre por nome:
      <input
        id="nameFilter"
        data-testid="name-filter"
        value={ filterByName.name }
        onChange={ (e) => filterByName.changeNameFilter(e.target.value) }
      />
    </label>
  );
};

export default NameFilter;
