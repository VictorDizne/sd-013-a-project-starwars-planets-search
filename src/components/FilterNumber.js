import React, { useState, useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterNumber() {
  const STATE_PLANETS = [];
  const { data, filter: { filterByNumericValues } } = useContext(MyContext);

  const [filtraPlanetas] = useState(STATE_PLANETS);

  filterByNumericValues.map(({ column, comparison, value }) => {
    switch (comparison) {
    case 'maior que':
      data.filter((planeta) => (
        Number(planeta[column]) !== 'unknown'
          && Number(planeta[column]) > Number(value)
          && STATE_PLANETS.push(planeta)
      ));
      break;

    case 'menor que':
      data.filter((planeta) => (
        Number(planeta[column]) !== 'unknown'
          && Number(planeta[column]) < Number(value)
          && STATE_PLANETS.push(planeta)
      ));
      break;

    case 'igual a':
      data.filter((planeta) => (
        Number(planeta[column]) !== 'unknown'
          && Number(planeta[column]) === Number(value)
          && STATE_PLANETS.push(planeta)
      ));
      break;

    default:
      return data;
    }
    return data;
  }, [filterByNumericValues, filtraPlanetas]);

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
