import React, { useContext } from 'react';
import PlanetContext from '../contexts/PlanetContext';
import usePlanetFilters from '../hooks/usePlanetFilters';

export default function SWAPITable() {
  const { planetData } = useContext(PlanetContext);
  const { filterByNumericValue } = usePlanetFilters();
  if (!planetData) return null;
  console.log(planetData);
  const { name } = planetData.filters.filterByName;
  return (
    <table>
      <thead>
        <tr>
          {
            Object.keys(planetData.planets[0]).map((row) => <th key={ row }>{ row }</th>)
          }
        </tr>
      </thead>
      <tbody>
        {/* Rogerio P. Silva me ajudou com essa lógica */}
        { planetData.planets
          .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()))
          .filter((planet) => filterByNumericValue(planet, planetData))
          .map((planet) => (
            <tr key={ planet.name }>
              <td data-testid="planet-name">{ planet.name }</td>
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
              <td>{ planet.url }</td>
            </tr>
          )) }
      </tbody>
    </table>
  );
}
