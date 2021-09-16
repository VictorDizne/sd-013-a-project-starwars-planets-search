import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const resultsAPI = useContext(PlanetsContext);
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
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {
          resultsAPI.map((resultAPI, index) => (
            <tr key={ index }>
              <td>{ resultAPI.name }</td>
              <td>{ resultAPI.rotation_period }</td>
              <td>{ resultAPI.orbital_period }</td>
              <td>{ resultAPI.diameter }</td>
              <td>{ resultAPI.climate }</td>
              <td>{ resultAPI.gravity }</td>
              <td>{ resultAPI.terrain }</td>
              <td>{ resultAPI.surface_water }</td>
              <td>{ resultAPI.population }</td>
              <td>
                {
                  resultAPI.films
                    .map((film, indexFilm) => (
                      <span key={ indexFilm }>{ film }</span>
                    ))
                }
              </td>
              <td>{ resultAPI.created }</td>
              <td>{ resultAPI.edited }</td>
              <td>{ resultAPI.urln }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
