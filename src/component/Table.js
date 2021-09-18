import React, { useContext } from 'react';
import StarsContext from '../context/StarContext';
import Select from './Select';

function Table() {
  const { data, setFilters, filters } = useContext(StarsContext);

  function handleChange(event) {
    setFilters({
      ...filters,
      filterByName: { name: event.target.value },
    });
  }

  const objectLiteral = {
    'maior que': (a, b) => Number(a) > Number(b),
    'menor que': (a, b) => Number(a) < Number(b),
    'igual a': (a, b) => Number(a) === Number(b),
  };

  function searchPlanet() {
    if (data.length) {
      const result = data.filter((planet) => {
        const filterByName = planet.name.toLowerCase()
          .includes(filters.filterByName.name.toLowerCase());
        const resultNumeric = filters.filterByNumericValues
          .every(({ column, value, comparison }) => {
            const filterNumeric = objectLiteral[comparison](planet[column], value);
            return filterNumeric;
          });
        return filterByName && resultNumeric;
      });
      return result;
    }
  }

  if (data.length === 0) {
    return <p>...loading</p>;
  }

  return (
    <div>
      <input type="text" onChange={ handleChange } data-testid="name-filter" id="name" />
      <Select />
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
          {searchPlanet().map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
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

export default Table;
