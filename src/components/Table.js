import React, { useContext } from 'react';
import PlanetContext from '../contexts/PlanetContext';

export default function Table() {
  const data = useContext(PlanetContext);
  if (!data) return null;
  console.log(data.planets);
  return (
    <>
      <h1>TABELOTA DE PLANETAS DO GUERRA NAS STARS</h1>
      <table>
        <thead>
          <tr>
            {
              Object.keys(data.planets[0]).map((row) => <th key={ row }>{ row }</th>)
            }
          </tr>
        </thead>
        <tbody>
          { data.planets.map((item) => (
            <tr key={ item.name }>
              <td data-testid="planet-name">{ item.name }</td>
              <td>{ item.rotation_period }</td>
              <td>{ item.orbital_period }</td>
              <td>{ item.diameter }</td>
              <td>{ item.climate }</td>
              <td>{ item.gravity }</td>
              <td>{ item.terrain }</td>
              <td>{ item.surface_water }</td>
              <td>{ item.population }</td>
              <td>{ item.films }</td>
              <td>{ item.created }</td>
              <td>{ item.edited }</td>
              <td>{ item.url }</td>
            </tr>
          )) }
        </tbody>
      </table>
    </>
  );
}
