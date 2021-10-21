import React, { useContext, useEffect, useState } from 'react';
import Context from '../Context/Context';

export default function Table() {
  const { data, filters } = useContext(Context);
  const MENOSUM = -1;
  const UM = 1;
  const ZERO = 0;
  function compare(a, b) {
    if (a.name < b.name) {
      return MENOSUM;
    }
    if (a.name > b.name) {
      return UM;
    }
    return ZERO;
  }
  data.sort(compare);
  const { filterByNumericValues } = filters;
  const { filterByName: { name } } = filters;
  const [planets, setPlanets] = useState(data);

  useEffect(() => {
    const comparadores = {
      'maior que': (coluna, valor) => Number(coluna) > Number(valor),
      'menor que': (coluna, valor) => Number(coluna) < Number(valor),
      'igual a': (coluna, valor) => Number(coluna) === Number(valor),
    };
    if (!filterByNumericValues.length) {
      setPlanets(data);
    }
    if (filterByNumericValues.length + 1 === 2) {
      filterByNumericValues
        .forEach(({ column, comparison, value }) => setPlanets(
          data.filter((dat) => comparadores[comparison](dat[column], value)),
        ));
    } else {
      filterByNumericValues.forEach(({ column, comparison, value }) => setPlanets(
        planets.filter((p) => comparadores[comparison](p[column], value)),
      ));
    }
    if (name) {
      setPlanets(planets.filter((planet) => (planet.name).toLowerCase().includes(name)));
    }
  }, [data, filterByNumericValues, filters, name, planets]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
            <tr key={ planet.name }>
              <td data-testid="planet-name">{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
