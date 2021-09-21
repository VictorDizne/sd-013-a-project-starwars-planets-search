import React, { useContext } from 'react';
import MyContext from '../Contexto/MyContext';
import Planet from './Planet';

export default function Table() {
  const { planets, heads, nameFilter } = useContext(MyContext);
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
            .filter((planet) => planet.name.toLowerCase()
              .includes(nameFilter.toLowerCase()))
            .map((planet, i) => <Planet key={ i } planet={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}
