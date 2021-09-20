import React, { useContext } from 'react';
import MyContext from './MyContext';
import '../App.css';

function Table() {
  const planet = useContext(MyContext);
  console.log(planet);
  return (
    <div>
      {
        planet.length === 0 ? <h1>Loading</h1>
          : (
            <table>
              <tr>
                {
                  Object.keys(planet[0])
                    .filter((item) => item !== 'residents')
                    .map((item) => <th key={ planet[0] }>{ item }</th>)
                }
              </tr>
              {
                planet.map((item) => (
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
                  </tr>))
              }
            </table>
          )
      }
    </div>
  );
}

export default Table;
