import React, { useContext } from 'react';
import myContext from '../context/myContext';
import Planet from './Planet';

function Table() {
  const { planets, titles, nameFilter, stateFiltered: {
    colummFilter,
    quantityFilter,
    numberFilter } } = useContext(myContext);

  const filterPlanets = (planet) => {
    if (planet[colummFilter] !== 'unknown') {
      switch (quantityFilter) {
      case 'maior que':
        return (planet[colummFilter] > numberFilter);
      case 'menor que':
        return planet[colummFilter] < numberFilter;
      case 'igual a':
        return planet[colummFilter] === numberFilter;
      default:
        break;
      }
    }
    return planet.name.toLowerCase().includes(nameFilter.toLowerCase());
  };

  return (
    <div>
      <table border={ 1 }>
        <thead>
          <tr>
            {titles.map((title, id) => <th key={ id }>{title}</th>)}
          </tr>
        </thead>
        <tbody>
          {planets
            .filter((plan) => filterPlanets(plan))
            .map((planet, i) => <Planet key={ i } planet={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
