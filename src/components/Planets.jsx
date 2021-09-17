import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Planets({ planets }) {
  const { queryValue } = useContext(MyContext);

  return (
    planets.filter((planet) => (
      planet.name.toLowerCase().includes(queryValue.toLowerCase())
    )).map((planet) => (
      <tr key={ planet.name } name={ planet.name }>
        { Object.values(planet).map((planetValue) => (
          <td
            key={ planetValue }
            data-testid={ planet.name === planet.value && 'planet-name' }
          >
            {planetValue}
          </td>
        ))}
      </tr>
    ))
  );
}

export default Planets;
