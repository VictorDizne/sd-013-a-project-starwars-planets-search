import React, { useContext } from 'react';
import PlanetsContext from '../contextAPI/SWContext';

function BodyPlanetsTable() {
  const { planets, isLoading } = useContext(PlanetsContext);
  return (
    <tbody>

      { isLoading ? 'loading...'
        : planets.map((planet, index) => (
          <tr key={ `${planet.name + index}` }>
            {Object.values(planet).map((data, key) => (
              <td key={ `${planet.created + key}` }>{ data }</td>))}
          </tr>
        ))}

    </tbody>
  );
}

export default BodyPlanetsTable;
