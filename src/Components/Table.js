import React, { useContext, useEffect } from 'react';
import PlanetContext from '../Context/PlanetContext';

function Table() {
  const context = useContext(PlanetContext);
  const { data, rend, setRend, filters } = context;

  const applyFilters = () => {
    const { filterByName: { name } } = filters;
    const afterFilterName = data
      .filter((planet) => planet.name.toLowerCase().includes(name));
    setRend(afterFilterName);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation period</th>
            <th>oributal period</th>
            <th>diamenter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>eduted</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {rend.map((info) => (
            <tr key={ info.name }>
              <td data-testid="planet-name">{info.name}</td>
              <td>{info.rotation_period}</td>
              <td>{info.orbital_period}</td>
              <td>{info.diameter}</td>
              <td>{info.climate}</td>
              <td>{info.gravity}</td>
              <td>{info.terrain}</td>
              <td>{info.surface_water}</td>
              <td>{info.population}</td>
              <td>{info.films.map((film) => film)}</td>
              <td>{info.created}</td>
              <td>{info.edited}</td>
              <td>{info.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
