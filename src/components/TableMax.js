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

  const filteredPlanets = listPlanets.filter((planet) => (
    planet.name.toLowerCase().includes(filterName.toLowerCase())
  ));

  return (
    <tbody>
      {filteredPlanets.map((planet) => (
        <tr key={ planet.name } name={ planet.name }>
          {
            planetKeys.map((key) => (
              <td
                key={ planet[key] }
                data-testid={ planet.name === planet[key] && 'planet-name' }
              >
                {planet[key]}
              </td>
            ))
          }
        </tr>
      ))}
    </tbody>
  );
}
