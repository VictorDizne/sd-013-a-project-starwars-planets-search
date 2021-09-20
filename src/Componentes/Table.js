import React, { useContext } from 'react';
import MyContext from '../Contexto/MyContext';
import Planet from './Planets';

function Table() {
  const { planets, titles, nameFilter } = useContext(MyContext);
  return (
    <div>
      <table border={ 1 }>
        <thead>
          <tr>
            {titles.map((title, id) => <th key={ id }>{ title }</th>)}
          </tr>
        </thead>
        <tbody>
          {planets.filter((plan) => plan.name.toLowerCase().includes(nameFilter))
            .map((planet, i) => <Planet key={ i } planet={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
