import React, { useContext } from 'react';
import MyContext from '../context/Context';

export default function TableMax() {
  const {
    // data,
    // setListPlanets,
    filterName,
    listPlanets,
    // filters,
    planetKeys } = useContext(MyContext);

  return (
    <tbody>
      {listPlanets.filter((filter) => filter.name.toLowerCase().includes(filterName.toLowerCase())).map((planet) => (
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
