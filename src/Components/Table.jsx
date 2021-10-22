import React, { useContext } from 'react';
import Context from '../Context/Context';

function Table() {
  const { planets, loaded } = useContext(Context);
  return (
    <table>
      <thead>
        <tr>
          {loaded && Object.keys(planets[0]).map((category, index) => (
            <th key={ `${category}-${index}` }>{ category }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {loaded && planets.map((planet) => (
          <tr key={ `${planet.name}` }>
            {Object.values(planet).map((planetData, index) => (
              <td key={ `${planet.name}-${index}` }>{planetData}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
