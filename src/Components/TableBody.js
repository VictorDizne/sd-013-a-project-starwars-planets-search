import React, { useContext } from 'react';
import SwapiContext from '../Context/SwapiContext';

function TableBody() {
  const { backup } = useContext(SwapiContext);
  const filteredPlanetsEntries = Object.entries(backup);
  return (
    <tbody>
      { filteredPlanetsEntries.map((planet, index) => (
        <tr key={ index }>
          {Object.entries(planet[1])
            .map((info, infoIndex) => {
              if (info[0] !== 'residents') {
                if (info[0] === 'name') {
                  return <td key={ infoIndex } data-testid="planet-name">{ info[1] }</td>;
                }
                return <td key={ infoIndex }>{ info[1] }</td>;
              } return null;
            })}
        </tr>)) }
    </tbody>
  );
}

export default TableBody;
