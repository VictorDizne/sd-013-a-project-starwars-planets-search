import React, { useContext } from 'react';
import { Context } from '../context/PlanetProvider';
import TableRow from './TableRow';

function Table() {
  const { data, isFetching, filters } = useContext(Context);

  const filterPlanetsByName = () => {
    const userInput = filters.filterByName.name;
    return data.filter((planet) => planet.name.includes(userInput));
  };

  if (isFetching) return <h1>Loading...</h1>;

  const planets = filterPlanetsByName();

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
        {planets.map((planet) => <TableRow key={ planet.name } planet={ planet } />)}
      </tbody>
    </table>
  );
}

export default Table;
