import React, { useContext } from 'react';
import myContext from '../context/myContext';
import Planet from './Planet';

function Table() {
  const { planets, titles, nameFilter } = useContext(myContext);
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
            .filter((plan) => plan.name.toLowerCase().includes(nameFilter.toLowerCase()))
            .map((planet, i) => <Planet key={ i } planet={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
