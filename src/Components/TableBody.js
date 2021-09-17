import React, { useContext } from 'react';
import starWarsContext from '../Context';

function TableBody() {
  const { backup } = useContext(starWarsContext);
  const backupEntries = Object.entries(backup);
  return (
    <tbody>
      { backupEntries.map((planet, index) => (
        <tr key={ index }>
          {Object.entries(planet[1])
            .map((info, infoIndex) => {
              if (info[0] !== 'residents') {
                return <td key={ infoIndex }>{ info[1] }</td>;
              } return null;
            })}
        </tr>)) }
    </tbody>
  );
}

export default TableBody;
