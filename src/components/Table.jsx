import React, { useContext } from 'react';
import TableContext from '../utils/TableContext';

export default function Table() {
  const { data, loading, error } = useContext(TableContext);

  if (loading || data.length === 0) {
    return <p>Carregando filmes...</p>;
  }

  if (error) {
    return <p>Oops, deu error!</p>;
  }

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
          <th>Residents</th>
          <th>Films</th>
          <th>Created</th>
          <th>URL</th>
        </tr>
      </thead>

      <tbody>
        {data && data.map(
          ({
            name,
            rotation_period: rotationPeriod,
            orbital_period: orbitalPeriod,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water: surfaceWater,
            population,
            films,
            created,
            url,
          },
          index) => (
            <tr key={ index }>
              <td>{name}</td>
              <td>{rotationPeriod}</td>
              <td>{orbitalPeriod}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surfaceWater}</td>
              <td>{population}</td>
              <td />
              <td>{films}</td>
              <td>{created}</td>
              <td>{url}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}
