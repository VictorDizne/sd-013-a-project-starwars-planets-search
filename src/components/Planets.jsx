import React from 'react';

function Planets({ planets }) {
  return (
    planets.map((planet) => (
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
