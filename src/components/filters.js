import React, { useContext } from 'react';
import dataContext from '../context/createContext';

function FilteredByName() {
  const { data, filters, actFilter, newState } = useContext(dataContext);
  const {
    filterByName: { name },
    filterByNumericValues,
    order: { sort },
    order,
  } = filters;
  const SORT_NUMBER = -1;
  function destructuring() {
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
  }

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
      {arrayCaseFilter.map((planetInf, ind) => {
        const testID = ind === 0 ? 'planet-name' : 'planet-infs';
        return (
          <td key={ `${planetInf[0]} ${ind}` } data-testid={ testID }>
            {planetInf}
          </td>);
      })}
    </tr>
  );

  function ordenarPlanetas(a, b) {
    const orderNum = order.column;
    const parseNuma = orderNum === 'name' ? a.name : parseInt(a[orderNum], 10);
    const parseNumb = orderNum === 'name' ? b.name : parseInt(b[orderNum], 10);
    if (sort === 'ASC') {
      return parseNuma < parseNumb ? SORT_NUMBER : 0;
    }
    if (sort === 'DESC') {
      return parseNuma < parseNumb ? 0 : SORT_NUMBER;
    }
  }
  function factoryFilteredByName() {
    data.sort(ordenarPlanetas);

    const { column, comparison, value } = destructuring();

    if (filterByNumericValues.length === 0) {
      data.sort(ordenarPlanetas);

      return data.map((planet, i) => {
        delete planet.residents;
        const matchPlanet = planet.name.match(name);
        const formatedPlanetValues = Object.values(planet);
        return (matchPlanet) ? matchPlanetsTable(formatedPlanetValues, i) : null;
        // return matchPlanetsTable(formatedPlanetValues, i);
      });
    }
    data.sort(ordenarPlanetas);

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
