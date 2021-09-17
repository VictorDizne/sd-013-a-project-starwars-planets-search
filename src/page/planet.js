import React, { useContext } from 'react';
import Filters from '../components/filters';
import InputFilter from '../components/inputFIlter';
import MyContext from '../context/myContext';
import './planet.css';

function Planets() {
  const {
    data,
    filters: {
      filterByName: { name },
    },
    setName,
  } = useContext(MyContext);
  const loading = <p>loading...</p>;

  function onChange({ target: { value } }) {
    setName(value);
  }

  function handleChange(e) {
    return e.filter((fill) => fill.name.toLowerCase().includes(name));
  }

  return (
    <div>
      <div>
        <InputFilter onChange={ onChange } />
        <Filters />
      </div>
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
          {!data
            ? loading
            : handleChange(data).map((info, index) => {
              const {
                name: PlanetName,
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
                edited,
                url,
              } = info;
              return (
                <tr key={ index }>
                  <td>{PlanetName}</td>
                  <td>{orbitalPeriod}</td>
                  <td>{surfaceWater}</td>
                  <td>{diameter}</td>
                  <td>{climate}</td>
                  <td>{gravity}</td>
                  <td>{terrain}</td>
                  <td>{rotationPeriod}</td>
                  <td>{population}</td>
                  <td>{films}</td>
                  <td>{created}</td>
                  <td>{edited}</td>
                  <td>{url}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Planets;
