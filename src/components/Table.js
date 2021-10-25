// Sequência de renderização no App.js: 6º
import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { useData, dataTable, valueInput,
    buttonFilter, removeFilter, orderByColumn } = useContext(MyContext);
  const filterColumns = (planet, filters) => {
    const validate = filters.every((
      { column, comparison, value },
    ) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      return Number(planet[column]) === Number(value);
    });
    return validate;
  };
  const filter = useData
    .filter((planet) => filterColumns(planet, buttonFilter))
    .filter((planet) => planet.name.toLowerCase()
      .includes(valueInput.toLowerCase()));

  if (useData === undefined) return <p>Loading...</p>;

  function renderFilters() {
    return (
      <div>
        { buttonFilter.map(({ column, comparison, value }) => (
          <div data-testid="filter" key={ column }>
            <p>{ column }</p>
            <p>{ comparison }</p>
            <p>{ value }</p>
            <button type="button" onClick={ () => removeFilter(column) }>X</button>
          </div>
        )) }
      </div>
    );
  }

  return (
    <div>
      { renderFilters() }
      <table>
        <thead>
          <tr>
            {
              Object.keys(dataTable).map((column) => (
                <th key={ column }>{column}</th>))
            }
          </tr>
        </thead>
        <tbody>
          {
            filter.length > 0 && orderByColumn(filter).map((row) => (
              <tr key={ row.name }>
                <td data-testid="planet-name">{ row.name }</td>
                <td>{ row.rotation_period }</td>
                <td>{ row.orbital_period }</td>
                <td>{ row.diameter }</td>
                <td>{ row.climate }</td>
                <td>{ row.gravity }</td>
                <td>{ row.terrain }</td>
                <td>{ row.surface_water }</td>
                <td>{ row.population }</td>
                <td>{ row.films }</td>
                <td>{ row.created }</td>
                <td>{ row.edited }</td>
                <td>{ row.url }</td>
              </tr>
            ))

          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
