import React, { useContext } from 'react';
import MyContext from '../Contexto/MyContext';
import Planet from './Planet';

export default function Table() {
  const { planets, heads, nameFilter, filterByNumericValues } = useContext(MyContext);
  return (
    <div>
      <table border={ 1 }>
        <thead>
          <tr>
            {heads.map((head, i) => <th key={ i }>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {planets
            .filter((planet) => {
              const validation = filterByNumericValues.every((filter) => {
                const { column, comparison, value } = filter;
                if (comparison === 'maior que') {
                  return Number(planet[column]) > Number(value);
                }
                if (comparison === 'menor que') {
                  return Number(planet[column]) < Number(value);
                }
                if (comparison === 'igual a') {
                  return Number(planet[column]) === Number(value);
                }
                return false;
              });
              return validation;
            })
            .filter((planet) => planet.name.toLowerCase()
              .includes(nameFilter.toLowerCase()))
            .map((planet, i) => <Planet key={ i } planet={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}
