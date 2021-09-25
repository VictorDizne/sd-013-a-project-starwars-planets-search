import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import Loading from './Loading';
import Input from './Input';

export default function Table() {
  const [filterName, setFilterName] = useState('');
  const planets = useContext(Context);

  if (!planets.length) return <Loading />;

  console.log(planets);

  const header = Object.keys(planets[0]).filter((item) => item !== 'residents');

  // console.log(header);

  const onChange = (event) => {
    setFilterName(event.target.value);
  };

  return (
    <div>
      <Input onChange={ onChange } />
      <table>
        <thead>
          <tr>
            { header.map((item) => <th key={ planets[0] }>{ item }</th>)}
          </tr>
        </thead>
        <tbody>
          { planets
            .filter((planet) => planet.name.includes(filterName))
            .map((item) => (
              <tr key={ item.name }>
                <td>{item.name}</td>
                <td>{item.rotation_period}</td>
                <td>{item.orbital_period}</td>
                <td>{item.diameter}</td>
                <td>{item.climate}</td>
                <td>{item.gravity}</td>
                <td>{item.terrain}</td>
                <td>{item.surface_water}</td>
                <td>{item.population}</td>
                <td>{item.films}</td>
                <td>{item.created}</td>
                <td>{item.edited}</td>
                <td>{item.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
