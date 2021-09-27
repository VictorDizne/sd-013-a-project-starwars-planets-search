import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import SelectFilters from './SelectFilters';

import Loading from '../images/swloading.gif';

function Table() {
  const { data, filters, setFilters } = useContext(MyContext);

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
    return (
      <img
        src={ Loading }
        alt="carregando"
      />
    );
  }

  return (
    <div>
      <input
        type="text"
        onChange={ handleChange }
        data-testid="name-filter"
        id="name"
      />
      <SelectFilters />
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
          {searchPlanet().map((p) => (
            <tr key={ p.name }>
              <td>{ p.name }</td>
              <td>{ p.rotation_period }</td>
              <td>{ p.orbital_period }</td>
              <td>{ p.diameter }</td>
              <td>{ p.climate }</td>
              <td>{ p.gravity }</td>
              <td>{ p.terrain }</td>
              <td>{ p.surface_water }</td>
              <td>{ p.population }</td>
              <td>{ p.films }</td>
              <td>{ p.created }</td>
              <td>{ p.edited }</td>
              <td>{ p.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
