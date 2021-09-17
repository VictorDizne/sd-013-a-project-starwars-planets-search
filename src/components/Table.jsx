import React from 'react';
import { useTable, useFilter } from '../hooks/hooks';

export default function Table() {
  const { data, loading, error } = useTable();
  const { planetFilter } = useFilter();

  if (loading || data.length === 0) {
    return <p>Carregando filmes...</p>;
  }

  if (error) {
    return <p>Oops, deu error!</p>;
  }

  const filteredData = data.filter((planet) => {
    const { name } = planetFilter.filters.filterByName;
    if (name === '') {
      return true;
    }
    const loweredCaseSearchText = name.toLowerCase();
    const includesTitle = planet.name.toLowerCase().includes(loweredCaseSearchText);
    // const includesSubtitle = movie.subtitle.toLowerCase()
    //   .includes(loweredCaseSearchText);
    // const includesStoryline = movie.storyline.toLowerCase()
    //   .includes(loweredCaseSearchText);
    // return includesTitle || includesSubtitle || includesStoryline;
    return includesTitle;
  });

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
        {filteredData && filteredData.map(
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
