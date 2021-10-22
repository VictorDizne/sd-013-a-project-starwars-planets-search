import React, { useContext } from 'react';
import MyContext from '../context/Context';

export default function TableMax() {
  const {
    // data,
    // setListPlanets,
    listPlanets,
    // filters,
    planetKeys } = useContext(MyContext);

  return (
    <tbody>
      {listPlanets.map((planet) => (
        <tr key={ planet.name } name={ planet.name }>
          {planetKeys.map((key) => (
            <td
              key={ planet[key] }
              data-testid={ planet.name === planet[key] && 'planet-name' }
            >
              {planet[key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
