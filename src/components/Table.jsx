import React from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const size = 0.7;
  return (
    <PlanetsContext.Consumer>
      { (contextValue) => {
        const { data } = contextValue;
        const { filter } = contextValue;
        const numericFilters = filter.filterByNumericValues;

        const handleNumericFilter = (type, a, b) => {
          if (type === 'maior_que') return a > b;
          if (type === 'menor_que') return a < b;
          if (type === 'igual_a') return a === b;
        };

        const filteredData = data
          .filter((planet) => planet.name.includes(filter.filterByName))
          .filter((planet) => {
            if (numericFilters.length > 0) {
              const result = numericFilters.map((numericFilter) => handleNumericFilter(
                numericFilter.comparison,
                parseInt(planet[numericFilter.column], 10),
                parseInt(numericFilter.value, 10),
              ));
              return result[0];
            }
            return true;
          });

        // console.table(numericFilters);
        return (
          <table border="1" style={ { fontSize: `${size}em` } }>
            <thead>
              <tr>
                <th>Name</th>
                <th>Rotation_period</th>
                <th>Orbital_period</th>
                <th>Diameter</th>
                <th>Climate</th>
                <th>Gravity</th>
                <th>Terrain</th>
                <th>Surface_water</th>
                <th>Population</th>
                <th>films</th>
                <th>created</th>
                <th>edited</th>
                <th>url</th>
              </tr>
            </thead>
            <tbody>
              {
                filteredData.map((item) => (
                  <tr key={ item.name }>
                    <td>{item.name}</td>
                    <td>{item.rotation_period}</td>
                    <td>{item.orbital_period}</td>
                    <td>{item.diameter}</td>
                    <td>{item.climate}</td>
                    <td>{item.gravity}</td>
                    <td>{item.terrain}</td>
                    <td>{item.surface_water}</td>
                    <td>{item.population}</td>
                    <td>{item.films}</td>
                    <td>{item.created}</td>
                    <td>{item.edited}</td>
                    <td>{item.url}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        );
      }}
    </PlanetsContext.Consumer>
  );
}

export default Table;
