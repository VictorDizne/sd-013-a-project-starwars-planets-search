import React, { useContext } from 'react';
import ContextPlanet from '../contexts/ContextPlanet';

export default function Table() {
  const data = useContext(ContextPlanet);
  if (!data) return null;
  console.log(data);
  return (
    <main>
      <h1>Acesso Confidencial - Planetas do StarWars</h1>
      <table>
        <thead>
          {/* Criando linha com nome de cada planeta */}
          <tr>
            {
              Object.keys(data.planets[0])
                .map((rowPlanet) => <th key={ rowPlanet }>{ rowPlanet }</th>)
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
    </main>
  );
}
