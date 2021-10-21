import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';

function FilterNumber() {
  const STATE_PLANETS = [];
  const { data, filter: { filterByNumericValues } } = useContext(MyContext);

  const [filtraPlanetas, setFiltraPlanetas] = useState(STATE_PLANETS);

  useEffect(() => {
    let planet = [...data];

    filterByNumericValues.forEach(({ column, comparison, value }) => {
      switch (comparison) {
      case 'maior que':
        planet = planet.filter((planeta) => (
          Number(planeta[column]) !== 'unknown'
          && Number(planeta[column]) > Number(value)
        ));
        break;

      case 'igual a':
        planet = planet.filter((planeta) => (
          Number(planeta[column]) !== 'unknown'
          && Number(planeta[column]) === Number(value)
        ));
        break;

      case 'menor que':
        planet = planet.filter((planeta) => (
          Number(planeta[column]) !== 'unknown'
          && Number(planeta[column]) < Number(value)
        ));
        break;

      default:
        return data;
      }
    });
    setFiltraPlanetas(planet);
  }, [filterByNumericValues, data]);

  return (
    <tbody>
      {
        filtraPlanetas.map((item, index) => (
          <tr key={ index }>
            <td>{ item.name }</td>
            <td>{ item.rotation_period }</td>
            <td>{ item.orbital_period }</td>
            <td>{ item.diameter }</td>
            <td>{ item.climate }</td>
            <td>{ item.gravity }</td>
            <td>{ item.terrain }</td>
            <td>{ item.surface_water }</td>
            <td>{ item.population}</td>
            <td>{ item.films }</td>
            <td>{ item.created }</td>
            <td>{ item.edited }</td>
            <td>{ item.url }</td>
          </tr>
        ))
      }
    </tbody>
  );
}

export default FilterNumber;
