import React, { useContext } from 'react';
import MyContext from '../Contexto/MyContext';
import Planet from './Planets';

function Table() {
  const { planets, titles, nameFilter, filterByNumericValues } = useContext(MyContext); // aqui puxamos do Provider os estados planets e titles, juntamente com a nameFilter para retornarmos no <tbody/> a chave e o valor que estão vindo da API
  return (
    <div>
      <table border={ 1 }>
        <thead>
          <tr>
            {titles.map((title, id) => <th key={ id }>{ title }</th>)}
          </tr>
        </thead>
        <tbody>
          {planets
            .filter((planeta) => {
              const validation = filterByNumericValues.every((filter) => {
                const { column, comparison, value } = filter;
                if (comparison === 'maior que') {
                  return Number(planeta[column]) > Number(value);
                }
                if (comparison === 'menor que') {
                  return Number(planeta[column]) < Number(value);
                }
                if (comparison === 'igual a') {
                  return Number(planeta[column]) === Number(value);
                }
                return false;
              });
              return validation;
            })
            .filter((plan) => plan.name.toLowerCase().includes(nameFilter))
            .map((planet, i) => <Planet key={ i } planet={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
