import React, { useContext } from 'react';
import SwapiContext from '../Context/SwapiContext';

function TableBody() {
  const { data } = useContext(SwapiContext);
  return (
    <tbody>
      { data.map((planet, index) => (
        <tr key={ index }>
          {Object.values(planet)
            .map((item, i) => <td key={ i }>{ item }</td>)}
        </tr>)) }
    </tbody>
  );
}

export default TableBody;
