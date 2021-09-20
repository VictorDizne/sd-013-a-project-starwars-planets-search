import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Table = () => {
  const { contextValue } = useContext(AppContext);
  const { planets, isLoading, filters } = contextValue;
  const { filters: { filterByName, filterByNumericValues } } = filters;
  const { name } = filterByName;
  const { column, comparison, value } = filterByNumericValues[0];

  const filterUsingNumericValues = () => {
    let comparisonFunction;
    switch (comparison) {
    case 'primeira':
      return planets;
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
      comparisonFunction = () => console.log('erro');
    }
    return planets
      .filter((planet) => comparisonFunction(planet[column], value));
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
