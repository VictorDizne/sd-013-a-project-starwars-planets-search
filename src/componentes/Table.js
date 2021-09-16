import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const data = useContext(MyContext);
  return (
    <table>
      <tbody>
        <tr>
          <th>Planet</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
        {
          data.map((planet, index) => (
            <tr key={ index }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>
                <a
                  href={ planet.url }
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  { planet.url }
                </a>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
