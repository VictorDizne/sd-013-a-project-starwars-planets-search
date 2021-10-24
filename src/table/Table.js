import React, { useContext, useState, useEffect } from 'react';
// import PlanetsFilter from '../componentes/PlanetsFilter';
import contextApp from '../context/contextApp';

function Table() {
  const { data, numericFilter, filters } = useContext(contextApp);
  const [planetasFiltrados, setPlanetasFriltrados] = useState([]);

  const { dataError, filters: {
    filterByName, filterByNumericValues } } = useContext(contextApp);

  // Filtro por "NOME DO TIPO TEXTO"
  const FilterName = (array) => {
    if (!filterByName.name) {
      return array;
    }
    if (filterByName.name) {
      return array.filter(({ name }) => name.includes(filterByName.name));
    }
  };
  //

  // Filtra por valores.
  const filterNumericValues = (planetsData) => {
    let filteredPlanets = [];
    const { comparison, column, value } = numericFilter;
    if (numericFilter.length === 0) {
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

  // Chama os filtros aninhadamente.
  const renderiza = () => {
    setPlanetasFriltrados(filterNumericValues(FilterName(data)));
    console.log(filterByNumericValues);
  };
  // Faz update a cada dependente atualizado.
  useEffect(renderiza, [data, filterByName, filters]);
  //

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
