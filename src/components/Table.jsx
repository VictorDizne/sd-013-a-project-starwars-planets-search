import React from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const size = 0.7;

  const sortData = (obj, filter) => {
    const numericalFilters = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    let order;
    const maior = 1;
    const menor = -1;
    const filterColumn = filter.order.column;
    const direction = filter.order.sort;

    const numerical = (numericalFilters.find((el) => el === filterColumn) !== undefined);

    if (direction === 'ASC') {
      order = [maior, menor];
    } else {
      order = [menor, maior];
    }

    let result = obj.sort((a, b) => {
      if (a[filterColumn] > b[filterColumn]) {
        return order[0];
      }
      if (a[filterColumn] < b[filterColumn]) {
        return order[1];
      }
      return 0;
    });

    if (numerical) {
      result = result.sort((a, b) => {
        if (direction === 'ASC') {
          return a[filterColumn] - b[filterColumn];
        }
        return b[filterColumn] - a[filterColumn];
      });
    }

    return result;
  };

  return (
    <PlanetsContext.Consumer>
      { (contextValue) => {
        const { data } = contextValue;
        const { filter } = contextValue;
        const numericFilters = filter.filterByNumericValues;

        // const dataKeys = data[0] ? Object.keys(data[0]) : [];

        const handleNumericFilter = (type, a, b) => {
          if (type === 'maior que') return a > b;
          if (type === 'menor que') return a < b;
          if (type === 'igual a') return a === b;
        };

        const filteredData = sortData(data
          .filter((planet) => planet.name.includes(filter.filterByName))
          .filter((planet) => {
            if (numericFilters.length > 0) {
              const result = numericFilters.map((numericFilter) => handleNumericFilter(
                numericFilter.comparison,
                parseInt(planet[numericFilter.column], 10),
                parseInt(numericFilter.value, 10),
              ));
              return result.find((el) => el === false) === undefined;
            }
            return true;
          }), filter);

        // console.table(numericFilters);
        return (
          <table border="1" style={ { fontSize: `${size}em` } }>
            <thead>
              <tr>
                {/* { dataKeys.map((value, key) => (
                  <th key={ key }>{value}</th>
                )) } */}
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
