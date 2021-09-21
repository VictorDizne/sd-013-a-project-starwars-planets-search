import React, { useContext } from 'react';
import starWarsContext from '../Context';

function TableBody() {
  const { backup } = useContext(starWarsContext);
  // This turns the object into an array, so we can iterate it
  const filteredPlanetsEntries = Object.entries(backup);
  return (
    <tbody>
      { filteredPlanetsEntries.map((planet, index) => (
        <tr key={ index }>
          { /* Same as  above, we turn the object into an array so we can itrate it. */ }
          {Object.entries(planet[1])
            .map((info, infoIndex) => {
              // First off we need to check if the info is about the residents. The  project
              // requirements states that residents should not be displayed. If it's indeed
              // about residents, then we return null
              if (info[0] !== 'residents') {
                // This checks if the info is the name of the planet, the requirements demand
                // this property to have the data-testid stated below
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
