import React, { useContext, useState, useEffect } from 'react';
import contextApp from '../context/contextApp';

function Table() {
  const { data, dataError,
    filters: {
      filterByName, filterByNumericValues } } = useContext(contextApp);
  const [planetasFiltrados, setPlanetasFiltrados] = useState();

  const FilterName = (array) => {
    if (!filterByName.name) {
      return array;
    }
    if (filterByName.name) {
      return array.filter(({ name }) => name.includes(filterByName.name));
    }
  };

  const filterNumericValues = (planetsData) => {
    if (filterByNumericValues.length === 0) {
      return planetsData;
    }
    let result = [];
    filterByNumericValues.forEach(({ comparison, column, value }) => {
      if (comparison === 'maior que') {
        result = planetsData.filter((planeta) => (
          Number(planeta[column]) > Number(value)));
      } else if (comparison === 'menor que') {
        result = planetsData.filter((planeta) => (
          Number(planeta[column]) < Number(value)));
      } else {
        result = planetsData.filter((planeta) => (
          Number(planeta[column]) === Number(value)));
      }
    });
    return result;
  };

  const renderiza = () => {
    setPlanetasFiltrados(filterNumericValues(FilterName(data)));
  };

  useEffect(renderiza, [data, filterByName, filterByNumericValues]);

  return (data.length > 0 && !dataError)
    && (
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((header, index) => (
              <th key={ index }>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planetasFiltrados.map((planet, i) => (
            <tr key={ i }>
              {Object.keys(planet).map((column, j) => (
                <td key={ j }>{planet[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default Table;
