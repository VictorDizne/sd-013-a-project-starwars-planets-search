import React, { useContext } from 'react';
import PlanetsContext from '../contextAPI/SWContext';

function BodyDropdownTable({ filters }) {
  const { planets, isLoading } = useContext(PlanetsContext);
  const { selectColumn, selectComparison, inputNumber } = filters;

  const signComparison = () => {
    console.log(Number(planets[3][selectColumn]) < Number(inputNumber));
    switch (selectComparison) {
    case 'maior que':
      return planets.filter((planet) => Number(planet[selectColumn]) > Number(inputNumber));
    case 'menor que':
      return planets.filter((planet) => Number(planet[selectColumn]) < Number(inputNumber));
    case 'igual a':
      return planets.filter((planet) => Number(planet[selectColumn]) === Number(inputNumber));
    default:
      return null;
    }
  };

  return (

    <tbody>
      { isLoading ? null
        : signComparison().map((planet, index) => (
          <tr key={ `${planet.name + index}` }>
            {Object.values(planet).map((data, key) => (
              <td key={ `${planet.created + key}` }>{ data }</td>))}
          </tr>
        ))}
    </tbody>
  );
}

export default BodyDropdownTable;
