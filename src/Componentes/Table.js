import React, { useContext } from 'react';
import MyContext from '../Contexto/MyContext';
import Planet from './Planets';

function Table() {
  const { planets, titles } = useContext(MyContext);
  return (
    <div>
      <table border={ 1 }>
        <thead>
          <tr>
            {titles.map((title, id) => <th key={ id }>{ title }</th>)}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet, i) => <Planet key={ i } planet={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
