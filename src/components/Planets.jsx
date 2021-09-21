import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import planetsContext from '../context/PlanetsContext';

// L7&&9 Trago as querys do header e verifico se existe entre os planets
function Planets({ planets }) {
  const { queryValue } = useContext(planetsContext);

  const filterPlanets = planets.filter((planet) => (
    planet.name.toLowerCase().includes(queryValue.toLowerCase())
  ));

  return (
    filterPlanets.map((planet) => (
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
