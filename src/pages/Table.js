import React, { useContext } from 'react';
import { PlanetsAndFiltersContext } from '../context/PlanetsAndFiltersContext';
import TableData from '../components/TableData';

const Table = () => {
  const {
    planets,
    planetsWithFilters,
    loading,
    filters:
    {
      filterByName:
      { name: search },
      filterByNumericValues:
      [{ column, comparison, value: valueFilter }],
    } } = useContext(PlanetsAndFiltersContext);

  // const filteredPlanets = () => {
  //   if (search) {
  //     return planets
  //       .filter((planet) => planet.name.toLowerCase().includes(search.toLowerCase()));
  //   }

  //   if (valueFilter && comparison === 'maior que') {
  //     return planets
  //       .filter((planet) => Number(planet[column]) > Number(valueFilter));
  //   }

  //   if (valueFilter && comparison === 'menor que') {
  //     return planets
  //       .filter((planet) => Number(planet[column]) < Number(valueFilter));
  //   }

  //   if (valueFilter && comparison === 'igual a') {
  //     return planets
  //       .filter((planet) => Number(planet[column]) === Number(valueFilter));
  //   }
  //   return planets;
  // };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {!loading
          ? planetsWithFilters
            .map((planet) => <TableData key={ planet.name } data={ planet } />)
          : <tr><td>The force is loading...</td></tr>}
      </tbody>
    </table>
  );
};

export default Table;
