import React, { useContext } from 'react';
import { PlanetsAndFiltersContext } from '../context/PlanetsAndFiltersContext';
import TableData from '../components/TableData';

const filteredPlanets = (search, planets) => {
  if (search) {
    return planets
      .filter((planet) => planet.name.toLowerCase().includes(search.toLowerCase()));
  }

  return planets;
};

const Table = () => {
  const {
    planets,
    loading,
    filters:
      { filterByName:
        { name: search },
      } } = useContext(PlanetsAndFiltersContext);

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
          ? filteredPlanets(search, planets)
            .map((planet) => <TableData key={ planet.name } data={ planet } />)
          : <tr><td>The force is loading...</td></tr>}
      </tbody>
    </table>
  );
};

export default Table;
