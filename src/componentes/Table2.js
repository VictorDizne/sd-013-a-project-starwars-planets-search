import React, { useContext, useState, useEffect } from 'react';
import contextApp from '../context/contextApp';

function Table() {
  const { data, dataError, estadoNumerico,
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
    let filteredPlanets = [];
    const { comparison, column, value } = estadoNumerico;
    if (estadoNumerico.length === 0) {
      return planetsData;
    }
    if (comparison === 'maior que') {
      filteredPlanets = planetsData.filter((planet) => (
        Number(planet[column]) > Number(value)
      ));
    }
    if (comparison === 'menor que') {
      filteredPlanets = planetsData.filter((planet) => (
        Number(planet[column]) < Number(value)
      ));
    }
    if (comparison === 'igual a') {
      filteredPlanets = planetsData.filter((planet) => (
        Number(planet[column]) === Number(value)
      ));
    }
    return filteredPlanets;
  };

  const renderiza = () => {
    setPlanetasFiltrados(FilterName(data));
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
