import React, { useContext } from 'react';
import InputFilter from '../components/inputFIlter';
import MyContext from '../context/myContext';
import './planet.css';

function Planets() {
  const { data, titles, filterByName: { name }, setName } = useContext(MyContext);
  const loading = <p>loading...</p>;

  function onChange(e) {
    setName(e.target.value);
  }

  function handleChange(e) {
    return e.filter((fill) => fill.name.toLowerCase().includes(name));
  }

  return (
    <div>
      <div>
        <InputFilter onChange={ onChange } />
      </div>
      <table>
        <thead>
          <tr>
            {titles.filter((title) => title !== 'residents')
              .map((title) => <th key={ title }>{title}</th>)}
          </tr>
        </thead>
        <tbody>
          {(!data.results) ? loading : handleChange(data.results).map((info, index) => {
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
