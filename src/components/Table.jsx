import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { planets } = useContext(PlanetContext);
  // console.log(data);

  return (

    <table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Diameter</th>
          <th scope="col">Gravity</th>
          <th scope="col">Climate</th>
          <th scope="col">Surface Water</th>
          <th scope="col">Rotation Period</th>
          <th scope="col">Orbital Period</th>
          <th scope="col">Terrain</th>
          <th scope="col">Population</th>
          <th scope="col">Films</th>
          <th scope="col">url</th>
          <th scope="col">Created</th>
          <th scope="col">Edited</th>

        </tr>
      </thead>
      <tbody>
        {
          planets.map((planet) => (
            <tr key={ planet.name }>
              <td>
                {planet.name}
              </td>
              <td>
                {planet.diameter}
              </td>
              <td>
                {planet.gravity}
              </td>
              <td>
                {planet.climate}
              </td>
              <td>
                {planet.surface_water}
              </td>
              <td>
                {planet.rotation_period}
              </td>
              <td>
                {planet.orbital_period}
              </td>
              <td>
                {planet.terrain}
              </td>
              <td>
                {planet.population}
              </td>
              <td>
                {planet.films}
              </td>
              <td>
                {planet.url}
              </td>
              <td>
                {planet.created}
              </td>
              <td>
                {planet.edited}
              </td>
            </tr>))
        }
      </tbody>
    </table>
  );
}

export default Table;
