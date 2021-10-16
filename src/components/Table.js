import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const contextValue = useContext(MyContext);
  const { data, valueInput } = contextValue;

  const destinationObj = {};
  const object = Object.assign(destinationObj, data[0]);

  if (!data) return <p>loading...</p>;
  const filter = data.filter((planet) => (
    planet.name.toLowerCase().includes(valueInput.toLowerCase())));
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            {
              Object.keys(object).map((row, i) => <th key={ i }>{row}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            filter.map((planet, index) => (
              <tr key={ index }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
