import React, { useState, useContext } from 'react';
import StarsContext from '../context/StarContext';

function Table() {
  const { data } = useContext(StarsContext);
  const [state, setState] = useState(
    {
      nome: '',
    },
  );

  function handleChange(event) {
    setState({
      nome: event.target.value,
    });
  }

  function searchPlanet() {
    if (state.nome === '') {
      return data;
    }
    const result = data.filter((planet) => planet.name.toLowerCase()
      .includes(state.nome.toLowerCase()));
    return result;
  }
  if (data.length === 0) {
    return <p>...loading</p>;
  }

  return (
    <div>
      <input type="text" onChange={ handleChange } data-testid="name-filter" />
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
          {searchPlanet().map((planet) => (
            <tr key={ planet.name }>
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
              <td>{ planet.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
