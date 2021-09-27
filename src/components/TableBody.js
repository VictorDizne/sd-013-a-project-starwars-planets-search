import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function TableBody() {
  const { data, setPlanetsList, planetsList, planetsKeys, filters } = useContext(Context);

  function filteredList(planets, { filterByName, filterByNumericValues }) {
    let filteredName = planets.filter((planet) => (
      planet.name.toLowerCase().includes(filterByName.name.toLowerCase())
    ));

    if (filterByNumericValues) {
      filterByNumericValues.forEach((obj) => {
        filteredName = filteredName.filter((planet) => {
          if (obj.comparison === 'menor que') {
            return Number(planet[obj.column]) < Number(obj.value);
          }
          if (obj.comparison === 'maior que') {
            return Number(planet[obj.column]) > Number(obj.value);
          }
          return Number(planet[obj.column]) === Number(obj.value);
        });
      });
    }

    return filteredName;
  }

  useEffect(() => {
    setPlanetsList(filteredList(data, filters));
  }, [filters, data]);

  return (
    <tbody>
      {planetsList.map((p) => (
        <tr key={ p.name } name={ p.name }>
          {planetsKeys.map((key) => (
            <td
              key={ p[key] }
              data-testid={ p.name === p[key] && 'planet-name' }
            >
              {p[key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
