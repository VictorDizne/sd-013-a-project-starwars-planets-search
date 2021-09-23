import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Table = () => {
  const { contextValue } = useContext(AppContext);
  const { planets, isLoading, filters } = contextValue;
  const { filters: { filterByName, filterByNumericValues } } = filters;
  const { name } = filterByName;

  const filterUsingNumericValues = () => {
    let filteredPlanets = planets;
    filterByNumericValues.forEach((filter) => {
      const { column, comparison, value } = filter;
      let comparisonFunction;
      switch (comparison) {
      case 'maior que':
        comparisonFunction = (a, b) => parseInt(a, 10) > parseInt(b, 10);
        break;
      case 'menor que':
        comparisonFunction = (a, b) => parseInt(a, 10) < parseInt(b, 10);
        break;
      case 'igual a':
        comparisonFunction = (a, b) => parseInt(a, 10) === parseInt(b, 10);
        break;
      default:
        return planets;
      }
      filteredPlanets = filteredPlanets
        .filter((planet) => comparisonFunction(planet[column], value));
    });
    return filteredPlanets;
  };

  if (isLoading) {
    return (
      <div>Carregando...</div>
    );
  }

  return (
    <div>
      {console.log(planets)}
      <table>
        <tr>
          {Object.keys(planets[0]).map((key) => (
            <th key={ key }>{ key}</th>
          ))}
        </tr>
        {filterUsingNumericValues()
          .filter((planet) => planet.name.includes(name))
          .map((planet) => (
            <tr key={ planet.name }>
              {Object.values(planet).map((valor) => (
                <td key={ valor }>{valor}</td>
              ))}
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Table;
