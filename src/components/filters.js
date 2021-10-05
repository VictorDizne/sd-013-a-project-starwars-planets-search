import React, { useContext } from 'react';
import dataContext from '../context/createContext';

function FilteredByName() {
  const { data, filters, actFilter, newState } = useContext(dataContext);
  const { filterByName: { name }, filterByNumericValues } = filters;
  const destructuring = () => {
    if (filterByNumericValues.length !== 0) {
      const {
        column,
        comparison,
        value } = filterByNumericValues[filterByNumericValues.length - 1];
      return { column, comparison, value };
    }
    const {
      column,
      comparison,
      value } = newState;
    return { column, comparison, value };
  };

  const converMathSignalAndCalc = (tableParam, inputParam, comparisonf) => {
    let calc;
    switch (comparisonf) {
    case 'maior que':
      calc = tableParam > inputParam;
      return calc;
    case 'menor que':
      calc = tableParam < inputParam;
      return calc;
    case 'igual a':
      calc = tableParam === inputParam;
      return calc;
    default:
      break;
    }
  };

  const matchPlanetsTable = (arrayCaseFilter, i) => (
    <tr key={ i }>
      {arrayCaseFilter.map((planetInf, ind) => (
        <td key={ `${planetInf[0]} ${ind}` }>
          {planetInf}
        </td>))}
    </tr>);

  function factoryFilteredByName() {
    const { column, comparison, value } = destructuring();

    if (filterByNumericValues.length === 0) {
      return data.map((planet, i) => {
        delete planet.residents;
        const formatedPlanetValues = Object.values(planet);

        return matchPlanetsTable(formatedPlanetValues, i);
      });
    }

    return data.map((planet, i) => {
      delete planet.residents;

      const matchPlanet = planet.name.match(name);
      const formatedPlanetValues = Object.values(planet);

      if (matchPlanet && actFilter) {
        const planetColumn = parseInt(planet[column], 10);
        const param1 = parseInt(planetColumn, 10);
        const param2 = parseInt(value, 10);
        const isTrue = converMathSignalAndCalc(param1, param2, comparison);
        if (isTrue) return matchPlanetsTable(formatedPlanetValues, i);
      } else if (matchPlanet) {
        return matchPlanetsTable(formatedPlanetValues, i);
      }
      return null;
    });
  }

  return factoryFilteredByName();
}

export default FilteredByName;
