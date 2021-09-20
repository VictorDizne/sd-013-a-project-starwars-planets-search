import React from 'react';
import PropTypes from 'prop-types';

function Planets({ planets }) {
  return (
    planets.map((planet) => (
      <tr key={ planet.name } name={ planet.name }>
        {
          Object.values(planet).map((planetValue) => (
            <td
              key={ planetValue }
              data-testid={ planet.name === planetValue && 'planet-name' }
            >
              {planetValue}
            </td>
          ))
        }
      </tr>
    ))
  );
}

Planets.propTypes = {
  planets: PropTypes.node,
}.isRequired;

export default Planets;
